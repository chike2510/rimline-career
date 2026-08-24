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
  challenges: { name: string; objective: string; progress: number; reward: string; active: boolean }[];
  league: { expansionWatch: number; rivalryHeat: number; ruleChange: string; timeline: string[] };
  history: string[];
  lastAction: string;
};

export const defaultDepthState: DepthState = {
  energy: 78, trust: 61, chemistry: 72, fatigue: 24, reputation: 51,
  difficulty: "Standard", largeType: false, colorBlind: false, reducedMotion: false, locale: "EN",
  shotProfile: { rim: 54, catchShoot: 38, pullUp: 31, clutchNet: 4.8, deflections: 1.7, last10: 10 },
  injury: { status: "Healthy", diagnosis: "No current designation", weeks: 0, rehab: 100 },
  relationships: { teammate: 72, agent: 64, rival: 41, mentor: 58 },
  contract: { aav: 16.2, years: 3, guaranteed: true, incentives: ["Starter minutes", "Playoff appearance"], endorsementValue: 48 },
  transactions: { capSpace: 42, trades: 0, pending: ["Veteran-for-prospect framework"] },
  rookieClass: [
    { name: "Cameron Ellis", school: "Duke", position: "SG", overall: 78, potential: 91, confidence: 74 },
    { name: "Malik Foster", school: "UConn", position: "C", overall: 76, potential: 88, confidence: 68 },
    { name: "Andre Bell", school: "Kansas", position: "PG", overall: 74, potential: 86, confidence: 62 },
  ],
  staff: [
    { name: "I. Chen", role: "Medical Director", level: 1, specialty: "Recovery" },
    { name: "Mina Okafor", role: "Lead Scout", level: 2, specialty: "Draft fit" },
    { name: "D. Price", role: "Performance Coach", level: 1, specialty: "Workload" },
  ],
  tactics: { system: "Balanced", pace: 71, defense: 78, rotationSize: 9 },
  awards: [
    { name: "All-League Team", status: "In the conversation", progress: 68 },
    { name: "Most Valuable Player", status: "Long shot", progress: 31 },
    { name: "Defensive Team", status: "Trending up", progress: 54 },
  ],
  challenges: [
    { name: "Underdog Run", objective: "Win 10 games against higher-rated teams", progress: 4, reward: "+10 legacy", active: true },
    { name: "Cap Discipline", objective: "Finish a season under the cap", progress: 42, reward: "+1 staff level", active: false },
    { name: "Late-Round Find", objective: "Develop a rookie by 8 overall", progress: 3, reward: "Scout network", active: false },
  ],
  league: { expansionWatch: 38, rivalryHeat: 66, ruleChange: "Transition take foul review", timeline: ["Season 1: Celtics identity established", "Season 2: Expansion vote pending", "Season 3: Rivalry heat rising"] },
  history: ["Career file opened", "First Rotation Minutes"],
  lastAction: "No decision logged yet.",
};

const clamp = (value: number, min = 0, max = 99) => Math.max(min, Math.min(max, value));
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
    case "challenge-underdog": next.challenges = next.challenges.map((item) => item.name === "Underdog Run" ? { ...item, active: true } : item); return log(next, "Underdog Run activated: higher-rated opponents now carry bonus legacy.");
    case "challenge-cap": next.challenges = next.challenges.map((item) => item.name === "Cap Discipline" ? { ...item, active: true } : item); return log(next, "Cap Discipline activated: contract decisions now affect the challenge track.");
    case "challenge-rookie": next.challenges = next.challenges.map((item) => item.name === "Late-Round Find" ? { ...item, active: true } : item); return log(next, "Late-Round Find activated: rookie development is now a career objective.");
    case "toggle-colorblind": next.colorBlind = !next.colorBlind; return log(next, `Color-blind palette ${next.colorBlind ? "enabled" : "disabled"}.`);
    case "toggle-motion": next.reducedMotion = !next.reducedMotion; return log(next, `Reduced motion ${next.reducedMotion ? "enabled" : "disabled"}.`);
    case "set-large-type": next.largeType = !next.largeType; return log(next, `Large type ${next.largeType ? "enabled" : "disabled"}.`);
    case "set-locale": next.locale = next.locale === "EN" ? "ES" : next.locale === "ES" ? "FR" : "EN"; return log(next, `Interface language set to ${next.locale}.`);
    case "cycle-difficulty": next.difficulty = next.difficulty === "Standard" ? "Competitive" : next.difficulty === "Competitive" ? "Story Mode" : "Standard"; return log(next, `Simulation difficulty set to ${next.difficulty}.`);
  }
}
