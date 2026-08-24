/* RIMLINE Tactical Courtbook — screenshot-inspired mobile surfaces.
   Deep navy evidence panels, condensed uppercase hierarchy, pale gold rules, and cyan/green status accents. */
import type { ReactNode } from "react";
import { Check, Clock3, Gem, Gift, ShieldCheck, Sparkles, Trophy, X, Zap } from "lucide-react";

type Mode = "player" | "manager";

export type DailyMission = {
  id: string;
  title: string;
  detail: string;
  goal: number;
  progress: number;
  reward: number;
  claimed: boolean;
};

export type SeasonRecap = {
  season: number;
  record: string;
  playerName: string;
  team: string;
  ppg: number;
  rpg: number;
  apg: number;
  mvpName: string;
  mvpLine: string;
  dpoyName: string;
  dpoyLine: string;
  rookieName: string;
  rookieLine: string;
  allLeague: { position: string; name: string }[];
  allDefense: { position: string; name: string }[];
  leaders: { label: string; name: string; value: string }[];
};

export function buildDailyMissions(games: number, wins: number): DailyMission[] {
  return [
    { id: "login", title: "Log in to career mode", detail: "Open Career Mode today.", goal: 1, progress: 1, reward: 5, claimed: false },
    { id: "win", title: "Stack a win", detail: "Finish a game on the right side of the ledger.", goal: 1, progress: Math.min(1, wins > 0 ? 1 : 0), reward: 8, claimed: false },
    { id: "games-5", title: "Finish 5 matches", detail: "Play or simulate five games today.", goal: 5, progress: Math.min(5, games), reward: 8, claimed: false },
    { id: "games-10", title: "Finish 10 matches", detail: "Keep the grind going.", goal: 10, progress: Math.min(10, games), reward: 10, claimed: false },
    { id: "games-20", title: "Finish 20 matches", detail: "Marathon day on the hardwood.", goal: 20, progress: Math.min(20, games), reward: 17, claimed: false },
  ];
}

export function SeasonRecapScreen({ recap, onContinue }: { recap: SeasonRecap; onContinue?: () => void }) {
  return <div className="screen recap-screen">
    <div className="recap-header"><span className="recap-rule" /><div className="eyebrow gold-label">{recap.season + 2032}/{String(recap.season + 2033).slice(-2)} RECAP</div><h1>SEASON IN FULL</h1><p>{recap.record} • {recap.team}</p></div>
    <section className="recap-mvp"><div className="recap-icon trophy-icon"><Trophy size={30} /></div><div><span className="section-label gold-label">MOST VALUABLE PLAYER</span><strong>{recap.mvpName}</strong><small>{recap.mvpLine}</small></div></section>
    <div className="recap-section-label">TOP HONORS</div><div className="honor-grid"><HonorTile icon={<ShieldCheck size={26} />} label="DPOY" name={recap.dpoyName} line={recap.dpoyLine} tone="cyan" /><HonorTile icon={<Sparkles size={26} />} label="ROOKIE" name={recap.rookieName} line={recap.rookieLine} tone="green" /></div>
    <RecapRoster title="ALL-LEAGUE FIRST TEAM" items={recap.allLeague} accent="orange" /><RecapRoster title="ALL-DEFENSIVE FIRST TEAM" items={recap.allDefense} accent="cyan" />
    <div className="recap-section-label">LEAGUE LEADERS</div><div className="leader-grid">{recap.leaders.map((leader) => <div className="leader-card" key={leader.label}><span>{leader.label}</span><strong>{leader.name}</strong><small>{leader.value}</small></div>)}</div>
    {onContinue && <button className="primary-cta recap-continue" onClick={onContinue}>OPEN NEXT SEASON <Zap size={16} /></button>}
  </div>;
}

function HonorTile({ icon, label, name, line, tone }: { icon: ReactNode; label: string; name: string; line: string; tone: "cyan" | "green" }) {
  return <div className={`honor-tile ${tone}`}><div className="honor-icon">{icon}</div><span>{label}</span><strong>{name}</strong><small>{line}</small></div>;
}

function RecapRoster({ title, items, accent }: { title: string; items: { position: string; name: string }[]; accent: "orange" | "cyan" }) {
  return <section className="recap-roster"><div className={`recap-section-label ${accent}`}>{title}</div><div className="recap-roster-scroll">{items.map((item) => <div className={`recap-player ${accent}`} key={`${title}-${item.name}`}><span>{item.position}</span><strong>{item.name}</strong></div>)}</div></section>;
}

export function DailyMissionsScreen({ missions, refreshLabel, onClaim, onClose }: { missions: DailyMission[]; refreshLabel: string; onClaim: (id: string, reward: number) => void; onClose?: () => void }) {
  return <div className="screen missions-screen"><div className="missions-header"><div><div className="eyebrow gold-label">DAILY MISSIONS</div><p>Complete missions to earn gems. Resets daily at 18:00.</p></div>{onClose && <button className="icon-button" aria-label="Close daily missions" onClick={onClose}><X size={19} /></button>}</div><div className="mission-list">{missions.map((mission) => { const complete = mission.progress >= mission.goal; return <div className={`mission-card ${complete ? "complete" : ""}`} key={mission.id}><div className="mission-reward"><Gem size={24} /><strong>×{mission.reward}</strong></div><div className="mission-copy"><strong>{mission.title}</strong><small>{mission.detail}</small><div className="mission-progress"><span style={{ width: `${Math.min(100, mission.progress / mission.goal * 100)}%` }} /><em>{mission.progress} / {mission.goal}</em></div></div><button className={`mission-action ${complete ? "claimed" : ""}`} disabled={!complete || mission.claimed} onClick={() => onClaim(mission.id, mission.reward)}>{mission.claimed ? <Check size={18} /> : complete ? <Check size={18} /> : "TRACK"}</button></div>; })}</div><div className="missions-refresh"><Clock3 size={14} /> DAILY REFRESH • <strong>{refreshLabel}</strong></div></div>;
}

export function GemStoreModal({ wallet, onPurchase, onRetry, onClose, offline }: { wallet: number; onPurchase: (amount: number, cost: number) => void; onRetry: () => void; onClose: () => void; offline: boolean }) {
  const bundles = [{ amount: 30, cost: "$0.99" }, { amount: 130, cost: "$3.99" }, { amount: 700, cost: "$14.99" }];
  return <div className="store-overlay" role="dialog" aria-modal="true" aria-labelledby="gem-store-title"><section className="gem-store"><button className="store-close" aria-label="Close gem store" onClick={onClose}><X size={18} /></button><span className="store-kicker">FUEL YOUR CAREER</span><h2 id="gem-store-title">GEM STORE</h2><div className="wallet-pill"><Gem size={15} /> {wallet} IN WALLET</div>{offline ? <div className="store-offline"><p>Local catalog ready. Purchases are simulated on this device so your career stays playable offline.</p><div className="store-bundles">{bundles.map((bundle) => <button key={bundle.amount} onClick={() => onPurchase(bundle.amount, 0)}><Gem size={18} /><strong>{bundle.amount}</strong><small>{bundle.cost} • LOCAL</small></button>)}</div><div className="store-note"><Gift size={14} /> No network required for this demo economy.</div></div> : <div className="store-error"><p>Couldn’t reach the store. Check your connection and try again.</p><button className="secondary-cta" onClick={onRetry}>RETRY</button></div>}</section></div>;
}

export function LifeHeader({ wallet, onOpenStore, onOpenMissions }: { wallet: number; onOpenStore: () => void; onOpenMissions: () => void }) {
  return <div className="life-wallet-header"><div><div className="eyebrow orange">LIFE / OFF COURT</div><h1>LIFE</h1></div><div className="life-wallet-actions"><button className="wallet-chip" onClick={onOpenMissions}><Gift size={15} /> MISSIONS</button><button className="wallet-chip" onClick={onOpenStore}><Gem size={15} /> {wallet}</button></div></div>;
}

export function defaultRecap(playerName: string, team: string, season: number, wins: number, losses: number, ppg: number, rpg: number, apg: number, mode: Mode): SeasonRecap {
  const prefix = mode === "player" ? playerName : "Boston Celtics";
  return { season, record: `${wins}-${losses}`, playerName, team, ppg, rpg, apg, mvpName: prefix, mvpLine: `${ppg.toFixed(1)} PPG • ${rpg.toFixed(1)} RPG • ${apg.toFixed(1)} APG • ${team}`, dpoyName: "Victor Wembanyama", dpoyLine: "2.8 BPG • 10.6 RPG", rookieName: "Cooper Flagg", rookieLine: "18.1 PPG • 7.4 RPG", allLeague: [{ position: "C", name: "Victor Wembanyama" }, { position: "SG", name: playerName }, { position: "SF", name: "Jayson Tatum" }, { position: "PG", name: "Shai Gilgeous-Alexander" }, { position: "PF", name: "Giannis Antetokounmpo" }], allDefense: [{ position: "C", name: "Victor Wembanyama" }, { position: "C", name: "Rudy Gobert" }, { position: "PF", name: "Jaden McDaniels" }, { position: "PG", name: "Alex Caruso" }, { position: "C", name: "Jarrett Allen" }], leaders: [{ label: "SCORING", name: playerName, value: `${ppg.toFixed(1)} PPG` }, { label: "ASSISTS", name: "Josh Giddey", value: `${apg.toFixed(1)} APG` }, { label: "REBOUNDS", name: "Domantas Sabonis", value: `${rpg.toFixed(1)} RPG` }, { label: "BLOCKS", name: "Victor Wembanyama", value: "2.8 BPG" }] };
}
