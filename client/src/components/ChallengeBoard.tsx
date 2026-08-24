/* RIMLINE Tactical Courtbook — challenge selection is a decision board, not a passive list. */
import { Check, ChevronRight, Crosshair, Crown, Flag, LockKeyhole, ShieldCheck, Sparkles, Target, Trophy } from "lucide-react";
import type { DepthAction, DepthState } from "@/lib/depthSimulation";

type Mode = "player" | "manager";

type ChallengeDefinition = {
  name: string;
  kicker: string;
  description: string;
  modifier: string;
  reward: string;
  target: number;
  action: DepthAction;
  icon: typeof Target;
  mode: Mode | "both";
};

const challengeDefinitions: ChallengeDefinition[] = [
  { name: "Underdog Run", kicker: "PLAYER / PRESSURE", description: "Win against teams rated above your current level and turn difficult nights into legacy capital.", modifier: "Higher-rated opponents carry bonus legacy.", reward: "+10 LEGACY", target: 10, action: "challenge-underdog", icon: Target, mode: "player" },
  { name: "Cap Discipline", kicker: "MANAGER / CONTROL", description: "Finish the season beneath the cap while keeping the rotation competitive and the room connected.", modifier: "Contract decisions change the challenge track.", reward: "+1 STAFF LEVEL", target: 100, action: "challenge-cap", icon: ShieldCheck, mode: "manager" },
  { name: "Late-Round Find", kicker: "MANAGER / DEVELOPMENT", description: "Find a prospect outside the obvious names and build the development plan that makes the room believe.", modifier: "Rookie development becomes a front-office objective.", reward: "SCOUT NETWORK", target: 8, action: "challenge-rookie", icon: Sparkles, mode: "manager" },
  { name: "The Clutch Ledger", kicker: "PLAYER / MOMENT", description: "Build a closing-time profile by improving clutch impact and protecting your late-game trust.", modifier: "Film work and high-leverage wins move the ledger.", reward: "+6 CLUTCH NET", target: 12, action: "challenge-underdog", icon: Crown, mode: "player" },
  { name: "Identity First", kicker: "MANAGER / CULTURE", description: "Make the organization recognizable: commit to a system, then make the roster and rotation carry it.", modifier: "Tactical choices influence chemistry and defense.", reward: "+8 FRANCHISE LEGACY", target: 6, action: "challenge-cap", icon: Flag, mode: "manager" },
];

function definitionFor(challenge: DepthState["challenges"][number], mode: Mode) {
  return challengeDefinitions.find((item) => item.name === challenge.name && (item.mode === mode || item.mode === "both")) || challengeDefinitions.find((item) => item.name === challenge.name) || challengeDefinitions[0];
}

function progressPercent(progress: number, target: number) {
  return Math.max(0, Math.min(100, Math.round((progress / target) * 100)));
}

export default function ChallengeBoard({ mode, state, onAction }: { mode: Mode; state: DepthState; onAction: (action: DepthAction) => void }) {
  const visible = state.challenges.map((challenge) => ({ challenge, definition: definitionFor(challenge, mode) })).filter(({ definition }) => definition.mode === mode || definition.mode === "both");
  const activeCount = visible.filter(({ challenge }) => challenge.active).length;
  const completedCount = visible.filter(({ challenge, definition }) => progressPercent(challenge.progress, definition.target) >= 100).length;
  const nextChallenge = visible.find(({ challenge }) => !challenge.active) || visible[0];

  return <div className={`screen challenge-board ${mode} ${state.largeType ? "large-type" : ""} ${state.colorBlind ? "colorblind-mode" : ""} ${state.reducedMotion ? "reduced-motion" : ""}`}>
    <div className="challenge-heading">
      <div>
        <div className="eyebrow orange">{mode === "player" ? "PLAYER CHALLENGE BOARD" : "FRONT OFFICE CHALLENGE BOARD"}</div>
        <h1>{mode === "player" ? "CHOOSE THE PRESSURE" : "SET THE STANDARD"}</h1>
        <p>{mode === "player" ? "Pick a live objective before the next week. The reward is visible; the cost shows up in the career." : "Choose the organizational test that will shape your next run. One board, many ways to build the era."}</p>
      </div>
      <div className="challenge-score"><strong>{completedCount}/{visible.length}</strong><span>COMPLETE</span></div>
    </div>

    <section className="challenge-brief">
      <div className="challenge-brief-mark"><Crosshair size={18} /></div>
      <div><span>ACTIVE BRIEF</span><strong>{activeCount ? `${activeCount} challenge${activeCount === 1 ? "" : "s"} in motion` : "No challenge selected"}</strong><small>{nextChallenge ? `Next recommendation: ${nextChallenge.challenge.name}` : "The board is clear."}</small></div>
      <div className="challenge-brief-rule"><span>RULE</span><small>Selection persists offline and affects the career file.</small></div>
    </section>

    <div className="challenge-board-label"><span>01</span> AVAILABLE TRACKS <small>{visible.length} OPTIONS / PICK YOUR EDGE</small></div>
    <div className="challenge-list">
      {visible.map(({ challenge, definition }, index) => {
        const Icon = definition.icon;
        const percent = progressPercent(challenge.progress, definition.target);
        const completed = percent >= 100;
        return <article className={`challenge-card ${challenge.active ? "active" : ""} ${completed ? "completed" : ""}`} key={`${challenge.name}-${index}`}>
          <div className="challenge-card-top"><span className="challenge-index">0{index + 1}</span><div className="challenge-icon"><Icon size={17} /></div><div className="challenge-kicker">{definition.kicker}</div>{challenge.active && <span className="challenge-status"><Check size={12} /> ACTIVE</span>}</div>
          <div className="challenge-card-body"><h2>{challenge.name}</h2><p>{definition.description}</p><div className="challenge-progress-row"><span>PROGRESS</span><strong>{challenge.progress} / {definition.target}</strong></div><div className="challenge-progress"><b style={{ width: `${percent}%` }} /></div><div className="challenge-meta"><span><LockKeyhole size={13} /> {definition.modifier}</span><em><Trophy size={13} /> {challenge.reward || definition.reward}</em></div></div>
          <button className="challenge-select" onClick={() => onAction(definition.action)} aria-pressed={challenge.active}>{completed ? "COMPLETED" : challenge.active ? "PAUSE CHALLENGE" : "ACTIVATE CHALLENGE"}<ChevronRight size={16} /></button>
        </article>;
      })}
    </div>

    <section className="challenge-footer"><span className="annotation-mark">LAST DECISION</span><strong>{state.lastAction}</strong><small>Activate or pause any track. Multiple tracks may run at once, but every active challenge adds another standard to protect.</small></section>
  </div>;
}
export { challengeDefinitions };
