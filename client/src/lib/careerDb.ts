/* RIMLINE Tactical Courtbook persistence: IndexedDB is the durable offline career file; localStorage is only a migration/fallback layer. */

export const CAREER_DB_NAME = "rimline-career-db";
export const CAREER_DB_VERSION = 1;
export const CAREER_STORE = "career-files";
export const CAREER_KEY = "active-career";
const SLOT_PREFIX = "career-slot:";

export type CareerSave = {
  schemaVersion: number;
  updatedAt: string;
  mode: "player" | "manager";
  screen: string;
  playerTab: string;
  managerTab: string;
  player: Record<string, unknown>;
  managerName: string;
  managerPhilosophy: string;
  managerFocus: string;
  managerState: Record<string, unknown>;
  seasonState: Record<string, unknown>;
  lastBox: Record<string, unknown> | null;
  weeklyEvent: Record<string, unknown> | null;
  seasonSummary: Record<string, unknown> | null;
  progression?: Record<string, unknown>;
  managerExtras?: Record<string, unknown>;
  playoffState?: Record<string, unknown>;
  saveSlots?: Record<string, unknown>;
  careerRoute?: string;
  collegeState?: Record<string, unknown>;
  draftState?: Record<string, unknown>;
  proOffers?: Record<string, unknown>[];
  depthState?: Record<string, unknown>;
  dailyMissions?: Record<string, unknown>[];
  gemWallet?: number;
  seasonRecap?: Record<string, unknown>;
};

function canUseIndexedDb() {
  return typeof window !== "undefined" && "indexedDB" in window;
}

function openCareerDb(): Promise<IDBDatabase> {
  if (!canUseIndexedDb()) return Promise.reject(new Error("IndexedDB is unavailable in this browser."));
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(CAREER_DB_NAME, CAREER_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(CAREER_STORE)) db.createObjectStore(CAREER_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not open the RIMLINE career database."));
    request.onblocked = () => reject(new Error("The RIMLINE career database is blocked by another tab."));
  });
}

export async function getCareerSave(): Promise<CareerSave | null> {
  const db = await openCareerDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(CAREER_STORE, "readonly");
    const request = transaction.objectStore(CAREER_STORE).get(CAREER_KEY);
    request.onsuccess = () => resolve((request.result as CareerSave | undefined) || null);
    request.onerror = () => reject(request.error || new Error("Could not load the RIMLINE career file."));
    transaction.oncomplete = () => db.close();
    transaction.onerror = () => reject(transaction.error || new Error("Could not read the RIMLINE career file."));
  });
}

export async function saveCareerSave(save: CareerSave): Promise<void> {
  const db = await openCareerDb();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(CAREER_STORE, "readwrite");
    transaction.objectStore(CAREER_STORE).put(save, CAREER_KEY);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not save the RIMLINE career file."));
    transaction.onabort = () => reject(transaction.error || new Error("The RIMLINE career save was aborted."));
  }).finally(() => db.close());
}

export async function saveCareerSlot(slotId: string, save: CareerSave): Promise<void> { const db = await openCareerDb(); await new Promise<void>((resolve, reject) => { const transaction = db.transaction(CAREER_STORE, "readwrite"); transaction.objectStore(CAREER_STORE).put({ ...save, slotId }, `${SLOT_PREFIX}${slotId}`); transaction.oncomplete = () => resolve(); transaction.onerror = () => reject(transaction.error || new Error("Could not save the RIMLINE career slot.")); transaction.onabort = () => reject(transaction.error || new Error("The RIMLINE career slot was aborted.")); }).finally(() => db.close()); }

export async function listCareerSlots(): Promise<(CareerSave & { slotId: string })[]> { const db = await openCareerDb(); return new Promise((resolve, reject) => { const transaction = db.transaction(CAREER_STORE, "readonly"); const request = transaction.objectStore(CAREER_STORE).getAll(); request.onsuccess = () => resolve((request.result as (CareerSave & { slotId?: string })[]).filter((item) => Boolean(item.slotId)).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)) as (CareerSave & { slotId: string })[]); request.onerror = () => reject(request.error || new Error("Could not list RIMLINE career slots.")); transaction.oncomplete = () => db.close(); }); }

export async function getCareerSlot(slotId: string): Promise<CareerSave | null> { const db = await openCareerDb(); return new Promise((resolve, reject) => { const transaction = db.transaction(CAREER_STORE, "readonly"); const request = transaction.objectStore(CAREER_STORE).get(`${SLOT_PREFIX}${slotId}`); request.onsuccess = () => resolve((request.result as CareerSave | undefined) || null); request.onerror = () => reject(request.error || new Error("Could not load the RIMLINE career slot.")); transaction.oncomplete = () => db.close(); }); }

export async function deleteCareerSlot(slotId: string): Promise<void> { const db = await openCareerDb(); await new Promise<void>((resolve, reject) => { const transaction = db.transaction(CAREER_STORE, "readwrite"); transaction.objectStore(CAREER_STORE).delete(`${SLOT_PREFIX}${slotId}`); transaction.oncomplete = () => resolve(); transaction.onerror = () => reject(transaction.error || new Error("Could not delete the RIMLINE career slot.")); }).finally(() => db.close()); }

export async function clearCareerSave(): Promise<void> {
  const db = await openCareerDb();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(CAREER_STORE, "readwrite");
    transaction.objectStore(CAREER_STORE).delete(CAREER_KEY);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not clear the RIMLINE career file."));
  }).finally(() => db.close());
}

function legacyJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch {
    return fallback;
  }
}

export async function migrateLegacySave(defaults: CareerSave): Promise<{ save: CareerSave | null; migrated: boolean }> {
  const existing = await getCareerSave();
  if (existing && existing.schemaVersion === CAREER_DB_VERSION) return { save: existing, migrated: false };

  const hasLegacy = localStorage.getItem("rimline-career-started") === "true" || localStorage.getItem("rimline-player");
  if (!hasLegacy) return { save: null, migrated: false };

  const migrated: CareerSave = {
    ...defaults,
    schemaVersion: CAREER_DB_VERSION,
    updatedAt: new Date().toISOString(),
    mode: (localStorage.getItem("rimline-mode") as CareerSave["mode"]) || defaults.mode,
    player: legacyJson("rimline-player", defaults.player),
    managerName: localStorage.getItem("rimline-manager-name") || defaults.managerName,
    managerPhilosophy: localStorage.getItem("rimline-manager-philosophy") || defaults.managerPhilosophy,
    managerState: legacyJson("rimline-manager-state", defaults.managerState),
    seasonState: legacyJson("rimline-season", defaults.seasonState),
  };
  await saveCareerSave(migrated);
  return { save: migrated, migrated: true };
}

export function writeLocalFallback(save: CareerSave) {
  try { localStorage.setItem("rimline-career-fallback", JSON.stringify(save)); } catch { /* Storage may be disabled; IndexedDB remains the primary path. */ }
}

export function readLocalFallback(): CareerSave | null {
  try {
    const raw = localStorage.getItem("rimline-career-fallback");
    return raw ? JSON.parse(raw) as CareerSave : null;
  } catch {
    return null;
  }
}
