/* RIMLINE Tactical Courtbook — persisted simulation-depth domain model. */

export type Difficulty = "Standard" | "Competitive" | "Story Mode";
export type Locale = "EN" | "ES" | "FR";
export type DepthAction =
  | "shot-lab"
  | "finishing"
  | "film-room"
  | "defense-drill"
  | "media-team"
  | "media-touches"
  | "media-quiet"
  | "relationship-listen"
  | "relationship-compete"
  | "relationship-workout"
  | "accept-endorsement"
  | "negotiate-contract"
  | "rehab"
  | "trade-veteran"
  | "hold-assets"
  | "run-workouts"
  | "hire-medical"
  | "hire-scout"
  | "hire-performance"
  | "set-balanced"
  | "set-run-gun"
  | "set-lockdown"
  | "challenge-underdog"
  | "challenge-cap"
  | "challenge-rookie"
  | "challenge-clutch"
  | "challenge-identity"
  | "toggle-colorblind"
  | "toggle-motion"
  | "set-large-type"
  | "set-locale"
  | "cycle-difficulty";

export type DepthState = {
  energy: number;
  trust: number;
  chemistry: number;
  fatigue: number;
  reputation: number;
  difficulty: Difficulty;
  largeType: boolean;
  colorBlind: boolean;
  reducedMotion: boolean;
  locale: Locale;
  shotProfile: { rim: number; catchShoot: number; pullUp: number; clutchNet: number; deflections: number; last10: number };
  injury: { status: "Healthy" | "Questionable" | "Out"; diagnosis: string; weeks: number; rehab: number };
  relationships: { teammate: number; agent: number; rival: number; mentor: number };
  contract: { aav: number; years: number; guaranteed: boolean; incentives: string[]; endorsementValue: number };
  transactions: { capSpace: number; trades: number; pending: string[] };
  rookieClass: { name: string; school: string; position: string; overall: number; potential: number; confidence: number }[];
  staff: { name: string; role: string; level: number; specialty: string }[];
  tactics: { system: "Balanced" | "Run & Gun" | "Lockdown"; pace: number; defense: number; rotationSize: number };
  awards: { name: string; status: string; progress: number }[];
  challenges: { name: string; objective: string; progress: number; reward: string; active: boolean; mode?: "player" | "manager" | "both" }[];
  league: { expansionWatch: number; rivalryHeat: number; ruleChange: string; timeline: string[] };
  history: string[];
  lastAction: string;
};

export const defaultDepthState: DepthState = {
  energy: 100, trust: 0, chemistry: 0, fatigue: 0, reputation: 0, difficulty: "Standard", largeType: false, colorBlind: false, reducedMotion: false, locale: "EN",
  shotProfile: { rim: 0, catchShoot: 0, pullUp: 0, clutchNet: 0, deflections: 0, last10: 0 }, injury: { status: "Healthy", diagnosis: "No current designation", weeks: 0, rehab: 100 }, relationships: { teammate: 0, agent: 0, rival: 0, mentor: 0 }, contract: { aav: 0, years: 0, guaranteed: false, incentives: [], endorsementValue: 0 }, transactions: { capSpace: 0, trades: 0, pending: [] }, rookieClass: [], staff: [], tactics: { system: "Balanced", pace: 0, defense: 0, rotationSize: 0 }, awards: [], challenges: [
    { name: "Underdog Run", objective: "Win 10 games against higher-rated teams", progress: 0, reward: "+10 legacy", active: false, mode: "player" },
    { name: "Clutch Ledger", objective: "Reach 12 clutch impact points", progress: 0, reward: "+6 clutch net", active: false, mode: "player" },
    { name: "Cap Discipline", objective: "Finish a season under the cap", progress: 0, reward: "+1 staff level", active: false, mode: "manager" },
    { name: "Late-Round Find", objective: "Develop a rookie by 8 overall", progress: 0, reward: "Scout network", active: false, mode: "manager" },
    { name: "Identity First", objective: "Complete 6 system-aligned decisions", progress: 0, reward: "+8 franchise legacy", active: false, mode: "manager" },
  ], league: { expansionWatch: 0, rivalryHeat: 0, ruleChange: "No league note yet", timeline: [] }, history: [], lastAction: "No decision logged yet",
};
const clamp = (value: number, min = 0, max = 99) => Math.max(min, Math.min(max, value));

export function normalizeDepthState(value: unknown): DepthState {
  const candidate = (value && typeof value === "object" ? value : {}) as Partial<DepthState>;
  const incomingChallenges = Array.isArray(candidate.challenges) ? candidate.challenges : [];
  return {
    ...defaultDepthState,
    ...candidate,
    shotProfile: { ...defaultDepthState.shotProfile, ...(candidate.shotProfile || {}) },
    injury: { ...defaultDepthState.injury, ...(candidate.injury || {}) },
    relationships: { ...defaultDepthState.relationships, ...(candidate.relationships || {}) },
    contract: { ...defaultDepthState.contract, ...(candidate.contract || {}) },
    transactions: { ...defaultDepthState.transactions, ...(candidate.transactions || {}) },
    tactics: { ...defaultDepthState.tactics, ...(candidate.tactics || {}) },
    league: { ...defaultDepthState.league, ...(candidate.league || {}), timeline: Array.isArray(candidate.league?.timeline) ? candidate.league.timeline : defaultDepthState.league.timeline },
    rookieClass: Array.isArray(candidate.rookieClass) ? candidate.rookieClass : defaultDepthState.rookieClass,
    staff: Array.isArray(candidate.staff) ? candidate.staff : defaultDepthState.staff,
    awards: Array.isArray(candidate.awards) ? candidate.awards : defaultDepthState.awards,
    challenges: incomingChallenges.length ? incomingChallenges.filter((item) => item && typeof item === "object").map((item) => ({ ...(item as DepthState["challenges"][number]) })) : defaultDepthState.challenges,
    history: Array.isArray(candidate.history) ? candidate.history : defaultDepthState.history,
  };
}

const log = (state: DepthState, message: string): DepthState => ({ ...state, lastAction: message, history: [...state.history.slice(-11), message] });

export function applyDepthAction(state: DepthState, action: DepthAction): DepthState {
  let next = { ...state, shotProfile: { ...state.shotProfile }, injury: { ...state.injury }, relationships: { ...state.relationships }, contract: { ...state.contract }, transactions: { ...state.transactions, pending: [...state.transactions.pending] }, tactics: { ...state.tactics }, league: { ...state.league, timeline: [...state.league.timeline] } };
  switch (action) {
    case "shot-lab": next.energy -= 8; next.fatigue = clamp(next.fatigue + 6); next.shotProfile.catchShoot += 2; next.shotProfile.pullUp += 1; return log(next, "Shot Map Lab complete: catch-and-shoot volume improved.");
    case "finishing": next.energy -= 10; next.fatigue = clamp(next.fatigue + 8); next.shotProfile.rim += 2; return log(next, "Pressure Finishing complete: rim reads sharpened.");
    case "film-room": next.energy -= 4; next.trust = clamp(next.trust + 3); next.shotProfile.clutchNet += 0.4; return log(next, "Film Room complete: second-defender reads added to the game plan.");
    case "defense-drill": next.energy -= 9; next.fatigue = clamp(next.fatigue + 5); next.trust = clamp(next.trust + 2); next.shotProfile.deflections += 0.3; return log(next, "Defensive Slide Work complete: containment grade moved up.");
    case "media-team": next.reputation = clamp(next.reputation + 3); next.chemistry = clamp(next.chemistry + 2); return log(next, "You gave the team credit. The room noticed.");
    case "media-touches": next.reputation = clamp(next.reputation + 4); next.trust = clamp(next.trust - 1); return log(next, "You called for more touches. Usage pressure is now public.");
    case "media-quiet": next.energy = clamp(next.energy + 8, 0, 100); return log(next, "You kept it short and protected the next recovery window.");
    case "relationship-listen": next.relationships.teammate = clamp(next.relationships.teammate + 6); next.chemistry = clamp(next.chemistry + 3); return log(next, "You listened first. Teammate trust improved.");
    case "relationship-compete": next.relationships.rival = clamp(next.relationships.rival + 3); next.reputation = clamp(next.reputation + 1); return log(next, "You competed for the role without backing away.");
    case "relationship-workout": next.relationships.mentor = clamp(next.relationships.mentor + 5); next.fatigue = clamp(next.fatigue + 3); return log(next, "Shared workout logged. The next class has a reference point.");
    case "accept-endorsement": next.contract.endorsementValue += 8; next.reputation = clamp(next.reputation + 5); next.energy = clamp(next.energy - 6, 0, 100); return log(next, "Endorsement accepted: brand value up, recovery window tighter.");
    case "negotiate-contract": next.contract.aav = Number((next.contract.aav + (next.trust >= 75 ? 1.2 : 0.4)).toFixed(1)); next.contract.years = next.trust >= 82 ? next.contract.years + 1 : next.contract.years; next.contract.incentives = [...next.contract.incentives, "Role security review"]; return log(next, `Contract negotiated to $${next.contract.aav}M AAV.`);
    case "rehab": next.injury.status = "Healthy"; next.injury.weeks = 0; next.injury.rehab = 100; next.fatigue = clamp(next.fatigue - 18); next.energy = clamp(next.energy + 16, 0, 100); return log(next, "Rehabilitation block complete: return-to-play clearance restored.");
    case "trade-veteran": next.transactions.capSpace += 9; next.transactions.trades += 1; next.chemistry = clamp(next.chemistry - 4); next.transactions.pending.shift(); return log(next, "Trade framework accepted: cap flexibility gained, chemistry tested.");
    case "hold-assets": next.chemistry = clamp(next.chemistry + 4); next.transactions.pending = ["Revisit veteran market after next homestand"]; return log(next, "Assets held: the room stays connected while leverage builds.");
    case "run-workouts": next.rookieClass = next.rookieClass.map((prospect, index) => index === 0 ? { ...prospect, confidence: clamp(prospect.confidence + 8) } : prospect); return log(next, "Prospect workouts complete: top fit confidence increased.");
    case "hire-medical": next.staff = next.staff.map((item) => item.role === "Medical Director" ? { ...item, level: item.level + 1 } : item); next.injury.rehab = 100; return log(next, "Medical staff upgraded: recovery setbacks are less likely.");
    case "hire-scout": next.staff = next.staff.map((item) => item.role === "Lead Scout" ? { ...item, level: item.level + 1 } : item); next.rookieClass = next.rookieClass.map((prospect) => ({ ...prospect, confidence: clamp(prospect.confidence + 4) })); return log(next, "Scout network upgraded: rookie-class confidence improved.");
    case "hire-performance": next.staff = next.staff.map((item) => item.role === "Performance Coach" ? { ...item, level: item.level + 1 } : item); next.tactics.rotationSize = 10; return log(next, "Performance staff upgraded: workload monitoring added.");
    case "set-balanced": next.tactics = { ...next.tactics, system: "Balanced", pace: 71, defense: 78 }; return log(next, "Balanced system selected: stable variance across the rotation.");
    case "set-run-gun": next.tactics = { ...next.tactics, system: "Run & Gun", pace: 88, defense: 68 }; next.fatigue = clamp(next.fatigue + 3); return log(next, "Run & Gun selected: pace rises, recovery becomes more important.");
    case "set-lockdown": next.tactics = { ...next.tactics, system: "Lockdown", pace: 62, defense: 87 }; next.trust = clamp(next.trust + 2); return log(next, "Lockdown selected: defensive identity is now the organizational brief.");
    case "challenge-underdog": next.challenges = next.challenges.map((item) => item.name === "Underdog Run" ? { ...item, active: !item.active } : item); return log(next, `Underdog Run ${next.challenges.find((item) => item.name === "Underdog Run")?.active ? "activated" : "paused"}: higher-rated opponents carry bonus legacy.`);
    case "challenge-clutch": next.challenges = next.challenges.map((item) => item.name === "Clutch Ledger" ? { ...item, active: !item.active } : item); return log(next, `Clutch Ledger ${next.challenges.find((item) => item.name === "Clutch Ledger")?.active ? "activated" : "paused"}: closing-time impact is now tracked.`);
    case "challenge-cap": next.challenges = next.challenges.map((item) => item.name === "Cap Discipline" ? { ...item, active: !item.active } : item); return log(next, `Cap Discipline ${next.challenges.find((item) => item.name === "Cap Discipline")?.active ? "activated" : "paused"}: contract decisions affect the challenge track.`);
    case "challenge-rookie": next.challenges = next.challenges.map((item) => item.name === "Late-Round Find" ? { ...item, active: !item.active } : item); return log(next, `Late-Round Find ${next.challenges.find((item) => item.name === "Late-Round Find")?.active ? "activated" : "paused"}: rookie development is now a career objective.`);
    case "challenge-identity": next.challenges = next.challenges.map((item) => item.name === "Identity First" ? { ...item, active: !item.active } : item); return log(next, `Identity First ${next.challenges.find((item) => item.name === "Identity First")?.active ? "activated" : "paused"}: system-aligned decisions now count.`);
    case "toggle-colorblind": next.colorBlind = !next.colorBlind; return log(next, `Color-blind palette ${next.colorBlind ? "enabled" : "disabled"}.`);
    case "toggle-motion": next.reducedMotion = !next.reducedMotion; return log(next, `Reduced motion ${next.reducedMotion ? "enabled" : "disabled"}.`);
    case "set-large-type": next.largeType = !next.largeType; return log(next, `Large type ${next.largeType ? "enabled" : "disabled"}.`);
    case "set-locale": next.locale = next.locale === "EN" ? "ES" : next.locale === "ES" ? "FR" : "EN"; return log(next, `Interface language set to ${next.locale}.`);
    case "cycle-difficulty": next.difficulty = next.difficulty === "Standard" ? "Competitive" : next.difficulty === "Competitive" ? "Story Mode" : "Standard"; return log(next, `Simulation difficulty set to ${next.difficulty}.`);
  }
}
