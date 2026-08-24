/*
 * RIMLINE Tactical Courtbook UI
 * This page keeps the mobile command-center layout: midnight navy, ember orange agency,
 * warm gold legacy, compact data panels, and a persistent next decision.
 */
import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  Circle,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Dumbbell,
  Flame,
  Home as HomeIcon,
  LayoutDashboard,
  LineChart,
  Medal,
  Menu,
  Play,
  RotateCcw,
  Shield,
  ShoppingBag,
  Sparkles,
  Star,
  Trophy,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

type Mode = "player" | "manager";
type Tab = "home" | "league" | "training" | "life" | "stats";
type Player = { name: string; position: string; archetype: string; overall: number; energy: number; cash: number; fans: number; game: number; wins: number; losses: number; ppg: number; rpg: number; apg: number; form: number };

type Team = { rank: number; name: string; city: string; overall: number; wins: number; losses: number; tone: string };

const initialPlayer: Player = { name: "Malik Carter", position: "SG", archetype: "Pure Shooter", overall: 84, energy: 100, cash: 24860, fans: 342000, game: 28, wins: 18, losses: 9, ppg: 19.6, rpg: 4.8, apg: 3.9, form: 76 };

const teams: Team[] = [
  { rank: 1, name: "Chicago Fury", city: "CHI", overall: 81, wins: 52, losses: 24, tone: "#f05c39" },
  { rank: 2, name: "Washington Sentinels", city: "WAS", overall: 82, wins: 50, losses: 26, tone: "#f2b84b" },
  { rank: 3, name: "Orlando Comets", city: "ORL", overall: 81, wins: 48, losses: 28, tone: "#94a3b8" },
  { rank: 4, name: "Toronto Huskies", city: "TOR", overall: 81, wins: 46, losses: 30, tone: "#93c5fd" },
  { rank: 5, name: "Detroit Steel", city: "DET", overall: 82, wins: 44, losses: 32, tone: "#c9a66b" },
  { rank: 6, name: "Charlotte Monarchs", city: "CHA", overall: 81, wins: 42, losses: 34, tone: "#b07bf3" },
  { rank: 7, name: "Brooklyn Phantoms", city: "BKN", overall: 82, wins: 40, losses: 36, tone: "#2dd4bf" },
  { rank: 8, name: "Boston Comets", city: "BOS", overall: 80, wins: 18, losses: 9, tone: "#ff6a00" },
];

const navItems: { id: Tab; label: string; icon: typeof HomeIcon }[] = [
  { id: "league", label: "League", icon: Trophy },
  { id: "training", label: "Training", icon: Dumbbell },
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "life", label: "Life", icon: Star },
  { id: "stats", label: "Stats", icon: BarChart3 },
];

function money(value: number) { return `$${value.toLocaleString("en-US")}`; }
function shortFans(value: number) { return value >= 1000000 ? `${(value / 1000000).toFixed(2)}M` : `${(value / 1000).toFixed(0)}K`; }

export default function Home() {
  const [mode, setMode] = useState<Mode>(() => new URLSearchParams(window.location.search).get("mode") === "manager" ? "manager" : ((localStorage.getItem("rimline-mode") as Mode) || "player"));
  const [tab, setTab] = useState<Tab>("home");
  const [player, setPlayer] = useState<Player>(() => {
    try { return { ...initialPlayer, ...JSON.parse(localStorage.getItem("rimline-player") || "{}") }; } catch { return initialPlayer; }
  });
  const [lastResult, setLastResult] = useState<{ result: "WIN" | "LOSS"; score: string; note: string } | null>(null);
  const [toast, setToast] = useState("");
  const [managerFocus, setManagerFocus] = useState("Balanced");
  const [managerState, setManagerState] = useState({ chemistry: 72, morale: 81, defense: 78, scouting: 64, teamWins: 18, teamLosses: 9 });

  useEffect(() => { localStorage.setItem("rimline-player", JSON.stringify(player)); }, [player]);
  useEffect(() => { localStorage.setItem("rimline-mode", mode); }, [mode]);
  useEffect(() => { if (!toast) return; const timer = window.setTimeout(() => setToast(""), 2600); return () => window.clearTimeout(timer); }, [toast]);

  const nextOpponent = useMemo(() => teams[(player.game + 1) % teams.length], [player.game]);

  function simulateGame() {
    const boost = player.energy > 60 ? 3 : 0;
    const performance = player.form + boost + Math.round(Math.random() * 16 - 8);
    const win = performance >= 74;
    const points = Math.max(12, Math.round(player.ppg + performance / 10 + Math.random() * 9));
    const newWins = player.wins + (win ? 1 : 0);
    const newLosses = player.losses + (win ? 0 : 1);
    setPlayer((current) => ({ ...current, game: Math.min(82, current.game + 1), wins: newWins, losses: newLosses, energy: Math.max(22, current.energy - 18), fans: current.fans + (win ? 420 : 160), cash: current.cash + (win ? 1250 : 650), ppg: Number(((current.ppg * 0.94 + points * 0.06)).toFixed(1)), form: Math.min(97, Math.max(48, current.form + (win ? 4 : -3))) }));
    setLastResult({ result: win ? "WIN" : "LOSS", score: `${win ? 118 : 106} : ${win ? 112 : 111}`, note: win ? `${points} points • 6 reb • 8 ast` : `${points} points • 4 reb • 5 ast` });
    setToast(win ? "Victory logged. +420 fans, +$1,250 cash." : "Tough night. Your next focus can change the trend.");
  }

  function train(type: string, amount: number) {
    if (player.energy < 20) { setToast("Not enough energy. Recover before training."); return; }
    setPlayer((current) => ({ ...current, energy: current.energy - 20, overall: Math.min(99, current.overall + amount), form: Math.min(97, current.form + 2) }));
    setToast(`${type} complete. Overall rating increased.`);
  }

  function managerAction(action: string) {
    setManagerState((current) => ({ ...current, chemistry: Math.min(99, current.chemistry + (action === "chemistry" ? 5 : 0)), morale: Math.min(99, current.morale + (action === "morale" ? 5 : 0)), defense: Math.min(99, current.defense + (action === "defense" ? 4 : 0)), scouting: Math.min(99, current.scouting + (action === "scouting" ? 5 : 0)) }));
    setToast(`${action[0].toUpperCase() + action.slice(1)} plan applied to the team.`);
  }

  function resetGame() { localStorage.removeItem("rimline-player"); setPlayer(initialPlayer); setLastResult(null); setToast("Career reset. A new story begins."); }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-lockup"><img className="brand-logo" src="/manus-storage/rimline-mark_489959e3.png" alt="" /><span>RIM<span>LINE</span></span></div>
        <div className="top-actions"><div className="resource"><WalletCards size={15} /><strong>{money(player.cash)}</strong></div><div className="resource energy"><Zap size={15} /><strong>{player.energy}</strong></div><button className="icon-button" aria-label="Menu"><Menu size={21} /></button></div>
      </header>

      <main className="main-content">
        <section className="mode-switch" aria-label="Game mode">
          <button className={mode === "player" ? "active" : ""} onClick={() => setMode("player")}><Sparkles size={15} /> Player Mode</button>
          <button className={mode === "manager" ? "active manager" : ""} onClick={() => setMode("manager")}><LayoutDashboard size={15} /> Manager Mode</button>
        </section>

        {mode === "manager" ? <ManagerView focus={managerFocus} setFocus={setManagerFocus} state={managerState} onAction={managerAction} nextOpponent={nextOpponent} /> : (
          <>
            {tab === "home" && <HomeView player={player} nextOpponent={nextOpponent} lastResult={lastResult} onSimulate={simulateGame} />}
            {tab === "league" && <LeagueView />}
            {tab === "training" && <TrainingView player={player} onTrain={train} />}
            {tab === "life" && <LifeView player={player} onBuy={(cost, item) => { if (player.cash < cost) { setToast("Not enough cash for that move."); return; } setPlayer((current) => ({ ...current, cash: current.cash - cost, fans: current.fans + 18000 })); setToast(`${item} added to your lifestyle portfolio.`); }} />}
            {tab === "stats" && <StatsView player={player} />}
          </>
        )}
      </main>

      {toast && <div className="toast"><span className="toast-dot" />{toast}</div>}
      <nav className="bottom-nav" aria-label="Primary navigation">
        {navItems.map(({ id, label, icon: Icon }) => <button key={id} className={tab === id && mode === "player" ? "active" : ""} onClick={() => { setMode("player"); setTab(id); }}><Icon size={20} /><span>{label}</span></button>)}
        <button className={mode === "manager" ? "active manager" : ""} onClick={() => setMode("manager")}><BriefcaseBusiness size={20} /><span>Manage</span></button>
      </nav>
      <button className="reset-button" onClick={resetGame} title="Reset career"><RotateCcw size={14} /></button>
    </div>
  );
}

function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) { return <div className="page-heading">{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h1>{title}</h1>{description && <p>{description}</p>}</div>; }

function HomeView({ player, nextOpponent, lastResult, onSimulate }: { player: Player; nextOpponent: Team; lastResult: { result: "WIN" | "LOSS"; score: string; note: string } | null; onSimulate: () => void }) {
  return <div className="screen home-screen">
    <div className="hero-card">
      <div className="player-copy"><div className="eyebrow orange"><span className="annotation-mark">01</span> MY PLAYER / CAREER FILE</div><h1>{player.name}</h1><p>{player.position} <span>/</span> {player.archetype} <span>/</span> USA <span>/</span> AGE 22</p><div className="team-line"><span className="mini-dot" /> Boston Comets <em>• {money(player.cash)} salary</em></div></div>
      <div className="overall"><strong>{player.overall}</strong><span>OVR</span></div>
      <div className="player-silhouette"><div className="portrait-glow" /><img className="portrait-image" src="/manus-storage/rimline-player-malik_e95d0f53.png" alt="" /></div>
    </div>
    <div className="energy-row"><div><div className="section-label"><span className="annotation-mark">04</span> ENERGY RESERVE</div><strong>{player.energy}%</strong></div><div className="progress"><span style={{ width: `${player.energy}%` }} /></div></div>
    <section className="data-panel performance-panel"><div className="section-label"><span className="annotation-mark">02</span> SEASON VERDICT <span className="info-dot">i</span></div><div className="metric-grid"><Metric value={player.ppg.toFixed(1)} label="PPG" /><Metric value={player.rpg.toFixed(1)} label="RPG" /><Metric value={player.apg.toFixed(1)} label="APG" /></div></section>
    <section className="data-panel news-panel"><div className="section-label">CAREER PULSE <span className="info-dot">i</span></div><div className="news-row"><div className="news-icon"><Flame size={18} /></div><div><strong>{lastResult ? `${lastResult.result === "WIN" ? "Victory" : "Defeat"} vs ${lastResult.result === "WIN" ? "Seattle Pulse" : "Chicago Fury"} — ${lastResult.note}` : `VERDICT: ${player.wins}-${player.losses} through ${player.game - 1} games`}</strong><small>{lastResult ? "RESULT LOGGED" : "FORM CHECK"}</small></div></div></section>
    <section className="next-game"><div className="section-label"><span className="annotation-mark">03</span> NEXT DECISION / GAME {player.game} OF 82 <span className="info-dot">i</span></div><div className="matchup"><div className="team"><div className="crest comet"><img src="/manus-storage/rimline-comets-crest_2d4a2f65.png" alt="" /></div><strong>Boston</strong><small>{player.wins}-{player.losses}</small></div><div className="vs"><span>{player.energy < 40 ? "RECOVER" : "4 DAYS AWAY"}</span><b>VS</b><small>AWAY</small></div><div className="team"><div className="crest pulse"><img src="/manus-storage/rimline-pulse-crest_cd5690fb.png" alt="" /></div><strong>{nextOpponent.name.split(" ")[0]}</strong><small>{nextOpponent.wins}-{nextOpponent.losses}</small></div></div><button className="primary-cta" onClick={onSimulate}><Play size={17} fill="currentColor" /> SIMULATE NEXT GAME <ChevronRight size={18} /></button></section>
  </div>;
}

function Metric({ value, label }: { value: string; label: string }) { return <div className="metric"><strong>{value}</strong><span>{label}</span></div>; }

function LeagueView() { return <div className="screen"><PageHeader title="League" description="Every game changes the shape of the standings." /><div className="segmented"><button className="active">Teams</button><button>Players</button><button>Playoffs</button></div><div className="segmented conference"><button className="active">Eastern</button><button>Western</button></div><section className="standings"><div className="table-head"><span>TEAM</span><span>OVR</span><span>W</span><span>L</span></div>{teams.map((team) => <div className="standing-row" key={team.name}><span className="rank">{team.rank}</span><span className="team-cell"><span className="team-crest" style={{ borderColor: team.tone, color: team.tone }}>{team.city.slice(0, 1)}</span><strong>{team.name}</strong></span><strong>{team.overall}</strong><strong className="win">{team.wins}</strong><strong className="loss">{team.losses}</strong></div>)}</section></div>; }

function TrainingView({ player, onTrain }: { player: Player; onTrain: (type: string, amount: number) => void }) { const options = [{ title: "Shooting Lab", detail: "+3PT / +FORM", icon: Circle, amount: 1 }, { title: "Film Study", detail: "+IQ / +VISION", icon: LineChart, amount: 1 }, { title: "Strength Room", detail: "+POWER / +STAMINA", icon: Dumbbell, amount: 1 }]; return <div className="screen"><PageHeader title="Training" description="Spend energy now to shape the player you become." /><div className="training-meter"><div><span className="section-label">AVAILABLE ENERGY</span><strong>{player.energy}/100</strong></div><div className="progress"><span style={{ width: `${player.energy}%` }} /></div></div><div className="training-list">{options.map(({ title, detail, icon: Icon, amount }) => <button className="training-row" key={title} onClick={() => onTrain(title, amount)}><span className="training-icon"><Icon size={21} /></span><span><strong>{title}</strong><small>{detail}</small></span><ChevronRight size={18} /></button>)}</div><div className="quote">“A better player is built between the games.”<small>— Coach Rivera</small></div></div>; }

function LifeView({ player, onBuy }: { player: Player; onBuy: (cost: number, item: string) => void }) { const items = [{ name: "Kaze Shadow 400", cost: 35000, detail: "LIGHTWEIGHT • AGILE", icon: "◒" }, { name: "Northstar Coupe", cost: 85000, detail: "PERFORMANCE • LUXURY", icon: "▰" }, { name: "Harbor Loft", cost: 180000, detail: "RECOVERY • STATUS", icon: "⌂" }]; return <div className="screen"><PageHeader title="Life" description="Your career has a life beyond the box score." /><section className="social-panel"><div className="social-title"><span className="social-icon"><Sparkles size={16} /></span><strong>CHIRPER</strong><span className="verified">✓</span></div><div className="social-metrics"><Metric value={shortFans(player.fans)} label="FOLLOWERS" /><Metric value={money(player.cash)} label="CASH" /><Metric value="72" label="BRAND HEAT" /></div></section><div className="segmented"><button>Feed</button><button className="active">Shop</button><button>Brands</button></div><div className="section-label shop-label">VEHICLES & ESTATES</div><div className="shop-list">{items.map((item) => <div className="shop-row" key={item.name}><div className="shop-illustration">{item.icon}</div><div className="shop-copy"><strong>{item.name}</strong><small>{item.detail}</small><em>{money(item.cost)}</em></div><button className="outline-cta" onClick={() => onBuy(item.cost, item.name)}>BUY</button></div>)}</div></div>; }

function StatsView({ player }: { player: Player }) { const seasons = [["30/31", player.ppg.toFixed(1), player.apg.toFixed(1), player.rpg.toFixed(1)], ["29/30", "17.8", "3.3", "3.1"], ["28/29", "14.2", "2.7", "2.6"], ["27/28", "11.9", "2.4", "2.5"]]; return <div className="screen"><PageHeader title="Stats" description="The record of every version of your game." /><div className="profile-strip"><div className="profile-rating"><strong>{player.overall}</strong><small>OVR</small></div><div><div className="eyebrow orange">CAREER LEDGER</div><h2>{player.name}</h2><p>{player.archetype} • Boston Comets • Age 22</p></div></div><section className="stats-table"><div className="table-head"><span>YEAR</span><span>PPG</span><span>APG</span><span>RPG</span></div>{seasons.map((row) => <div className="stat-row" key={row[0]}><strong>{row[0]}</strong><strong>{row[1]}</strong><strong>{row[2]}</strong><strong>{row[3]}</strong></div>)}</section><div className="awards-line"><Medal size={19} /><div><strong>AWARDS TRACKER</strong><small>1× Rising Star shortlist • 3× Player of the Game</small></div></div></div>; }

function ManagerView({ focus, setFocus, state, onAction, nextOpponent }: { focus: string; setFocus: (value: string) => void; state: { chemistry: number; morale: number; defense: number; scouting: number; teamWins: number; teamLosses: number }; onAction: (action: string) => void; nextOpponent: Team }) { return <div className="screen manager-screen"><PageHeader eyebrow="FRANCHISE CONTROL" title="Manager Mode" description="Run the team. Shape the culture. Build a contender." /><section className="manager-hero"><div><div className="eyebrow orange">BOSTON COMETS</div><h2>Front Office</h2><p>GM • Head Coach • Development Lead</p></div><div className="manager-record"><strong>{state.teamWins}-{state.teamLosses}</strong><small>SEASON RECORD</small></div></section><div className="manager-focus"><div className="section-label">GAME PLAN FOCUS</div><div className="focus-grid">{["Balanced", "Run & Gun", "Lockdown"].map((item) => <button key={item} className={focus === item ? "active" : ""} onClick={() => setFocus(item)}>{item}</button>)}</div></div><section className="manager-grid"><ManagerMetric label="CHEMISTRY" value={state.chemistry} tone="orange" /><ManagerMetric label="MORALE" value={state.morale} tone="gold" /><ManagerMetric label="DEFENSE" value={state.defense} tone="teal" /><ManagerMetric label="SCOUTING" value={state.scouting} tone="purple" /></section><div className="manager-actions"><div className="section-label">STAFF ACTIONS</div><button onClick={() => onAction("chemistry")}><Users size={18} /><span><strong>Run team session</strong><small>Improve chemistry</small></span><ChevronRight size={17} /></button><button onClick={() => onAction("defense")}><Shield size={18} /><span><strong>Install defensive package</strong><small>Raise defensive floor</small></span><ChevronRight size={17} /></button><button onClick={() => onAction("scouting")}><BriefcaseBusiness size={18} /><span><strong>Scout next opponent</strong><small>{nextOpponent.name} • {nextOpponent.overall} OVR</small></span><ChevronRight size={17} /></button></div><div className="manager-callout"><div className="section-label">NEXT DECISION</div><p>Your rotation is stable. Push pace for a higher ceiling, or protect the lead with a defensive identity.</p></div></div>; }

function ManagerMetric({ label, value, tone }: { label: string; value: number; tone: string }) { return <div className={`manager-metric ${tone}`}><div><span>{label}</span><strong>{value}</strong></div><div className="mini-progress"><i style={{ width: `${value}%` }} /></div></div>; }
