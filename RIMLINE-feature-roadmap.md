# RIMLINE Feature Roadmap

## Purpose

RIMLINE already has the foundation for an offline-first basketball career simulation: separate Player and Manager modes, real NBA team and player references, weekly progression, box scores, college and draft routes, challenges, IndexedDB persistence, accessibility controls, Life systems, and the Tactical Courtbook visual language. The roadmap below identifies the most valuable additions for increasing replayability, strategic depth, authenticity, and long-term retention without weakening the mobile-first experience.

## Priority Key

| Tier | Meaning | Typical treatment |
|---|---|---|
| P0 | Core next release | Implement before adding broad new systems. |
| P1 | Near-term depth | High-value systems that build on the current foundation. |
| P2 | Expansion | Larger systems that need additional data, balancing, or UI. |
| P3 | Optional / long-horizon | Social, advanced presentation, or infrastructure-heavy ideas. |

---

## 1. Core Career Loop and Weekly Progression

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Career calendar | A season calendar showing past games, upcoming games, events, deadlines, and rest days. |
| P0 | Weekly agenda planner | Let players choose between training, recovery, media, relationship, and Life activities before advancing the week. |
| P0 | Post-game decision window | Add a deliberate screen after every game for recovery, media response, team meeting, or personal choice. |
| P0 | Season objectives | Convert the current season into measurable personal and team targets with progress tracking. |
| P0 | Form and momentum model | Track short-term form separately from long-term attributes and make it react to recent performances. |
| P1 | Weekly newsletter | Summarize league news, injuries, standings movement, awards races, rumors, and the player’s narrative. |
| P1 | Calendar consequences | Make missed training, skipped recovery, or excessive media commitments influence later weeks. |
| P1 | Rivalry weeks | Mark specific matchups as higher-pressure events with special objectives and narrative stakes. |
| P1 | Mid-season review | Present a halfway report covering performance, team role, contract value, trust, and awards position. |
| P1 | End-of-season review | Compare the season against objectives and carry successes or failures into the next contract cycle. |
| P2 | Multi-season timeline | Provide a scrollable career history across seasons, clubs, roles, awards, injuries, and major choices. |
| P2 | Career chapter system | Divide a career into chapters such as Prospect, Rotation Piece, Star, Veteran, and Mentor. |
| P2 | Dynamic schedule difficulty | Adjust schedule difficulty based on opponents, travel, back-to-backs, and playoff pressure. |
| P3 | Historical career archive | Store completed careers locally as separate archives that can be reviewed without replacing the active save. |

## 2. Player Mode: On-Court Gameplay and Performance

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Possession-impact model | Let player archetype, fatigue, trust, matchup, and tactical fit affect box-score outcomes directly. |
| P0 | Role-based stat targets | Track targets appropriate to the player’s role, such as spacing, secondary creation, rebounding, or point-of-attack defense. |
| P0 | Performance grades | Produce offense, defense, decision-making, and impact grades alongside the traditional box score. |
| P0 | Teammate chemistry effects | Make lineups and relationships affect assist quality, shot quality, defensive coverage, and late-game execution. |
| P0 | Game-plan fit | Show how the selected team tactic helps or hurts the player’s archetype. |
| P1 | Clutch-time simulation | Add a distinct final-five-minute phase with pressure, trust, fatigue, and decision-making modifiers. |
| P1 | Matchup scouting | Identify the opposing defender or offensive threat most likely to shape the game. |
| P1 | Defensive assignment choice | Allow the player to choose whether to accept a difficult assignment for extra trust or protect energy. |
| P1 | Shot profile report | Track rim, midrange, catch-and-shoot, pull-up, transition, and free-throw opportunities. |
| P1 | Turnover taxonomy | Distinguish bad passes, ball handling, offensive fouls, travel, and late-clock decisions. |
| P1 | Film-room review | Convert the previous game into a short tactical review with three or four actionable lessons. |
| P1 | Hot and cold zones | Display recent shot zones and let training target weaknesses or reinforce strengths. |
| P2 | Possession text commentary | Generate compact possession-level commentary without requiring real-time graphics. |
| P2 | Play-type library | Track pick-and-roll, spot-up, transition, isolation, post-up, handoff, cut, and putback production. |
| P2 | Playoff matchup series | Give playoff series their own evolving matchup logic rather than treating them as ordinary games. |
| P2 | All-Star weekend | Add selection, skills events, three-point contest, dunk contest, and All-Star game outcomes. |
| P3 | Interactive play calls | Let users select a few high-impact decisions during simulated games without turning RIMLINE into an arcade game. |

## 3. Player Mode: Attributes, Archetypes, and Progression

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Attribute potential | Separate current rating from potential, development speed, and aging curve. |
| P0 | Skill cap system | Give every attribute a soft cap shaped by archetype, body profile, coaching, and age. |
| P0 | Attribute decay | Introduce realistic decline in athleticism, recovery, and durability while allowing skill and IQ to remain valuable. |
| P0 | Development plans | Let the player choose one primary and one secondary development focus each offseason. |
| P0 | Role progression | Move the player through bench, rotation, starter, sixth-player, star, and franchise roles. |
| P0 | Badge or perk system | Add conditional traits such as Corner Specialist, Screen Navigator, Floor General, Rim Protector, or Iron Body. |
| P1 | Archetype evolution | Permit a player to gradually blend into a neighboring archetype through repeated choices. |
| P1 | Signature skill mastery | Track mastery milestones for selected skills instead of only raising broad attributes. |
| P1 | Practice quality model | Make training outcomes depend on intensity, coach quality, fatigue, and player commitment. |
| P1 | Mentor development | Let experienced teammates accelerate selected skills or mental attributes. |
| P1 | Hidden traits | Model coachability, competitiveness, composure, durability, professionalism, and adaptability. |
| P1 | Personality alignment | Make off-court decisions and media behavior affect team fit and leadership identity. |
| P2 | Physical profile editor | Add wingspan, frame, athletic profile, handedness, and movement style with clear gameplay effects. |
| P2 | Signature animations as metadata | Track preferred finishes, pull-ups, passing style, and defensive stance as identity fields. |
| P2 | Training minigames | Add small offline drills that provide a limited bonus without dominating the simulation. |
| P3 | Legacy archetype trees | Give retired players or second careers access to lineage-based progression paths. |

## 4. Player Mode: Contracts, Representation, and Career Business

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Contract negotiation screen | Present years, salary, role, options, incentives, guarantees, and team expectations. |
| P0 | Agent relationship meter | Make agent trust affect offer quality, information, endorsements, and negotiation options. |
| P0 | Performance incentives | Add bonuses for starts, awards, playoff wins, All-League teams, and statistical milestones. |
| P0 | Contract year pressure | Make a contract season influence media, risk tolerance, team perception, and player choices. |
| P1 | Player options | Add player options, team options, qualifying offers, restricted free agency, and minimum contracts. |
| P1 | Trade-request path | Allow a player to request a trade with consequences for trust, public image, and destination options. |
| P1 | No-trade preferences | Let a player list preferred markets, teams, role types, or climate/lifestyle preferences. |
| P1 | Endorsement categories | Separate local, national, footwear, apparel, training, technology, and charitable partnerships. |
| P1 | Endorsement obligations | Add scheduled appearances, social campaigns, and performance clauses that compete with recovery time. |
| P1 | Financial planning | Track cash, savings, spending, risk, and long-term financial stability. |
| P2 | Taxes and cost of living | Make location and salary structure matter without requiring real-world financial advice. |
| P2 | Brand identity | Build a player brand around style, leadership, community, performance, or authenticity. |
| P2 | Charity foundation | Let the player invest money and time into a foundation with legacy and community outcomes. |
| P2 | Retirement decision | Allow retirement, one-day contracts, coaching, broadcasting, ownership, or mentorship paths. |
| P3 | Agent roster | Let users compare multiple agents with different strengths, personalities, and tradeoffs. |

## 5. Player Mode: Life, Relationships, and Off-Court Narrative

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Relationship network | Expand the existing relationship system into teammates, coach, agent, family, rivals, and media. |
| P0 | Relationship actions | Add repeatable actions such as team dinner, film session, apology, mentorship, or boundary setting. |
| P0 | Lifestyle budget | Let cash flow into housing, transport, training, family support, recovery, and personal interests. |
| P0 | Recovery choices | Add rest, treatment, sleep routine, travel comfort, and workload choices with visible tradeoffs. |
| P1 | Social feed | Create a local fictional feed for rumors, praise, criticism, teammate posts, and fan reactions. |
| P1 | Media interview tree | Add selectable answers that shape personality, pressure, trust, and brand heat. |
| P1 | Family and support circle | Track how major career decisions affect family support and personal stability. |
| P1 | Rival system | Turn recurring opponents or teammates into named rivals with history and special events. |
| P1 | Home customization | Add a restrained collection of apartments, homes, recovery rooms, and personal spaces. |
| P1 | Transportation effects | Make travel ownership affect fatigue, status, and schedule flexibility rather than only serving as decoration. |
| P2 | Community events | Add clinics, school visits, local appearances, and charity games. |
| P2 | Personal interests | Add hobbies that improve recovery, relationships, media identity, or mental health. |
| P2 | Difficult personal events | Introduce sensitive, optional narrative events with respectful language and non-punitive exits. |
| P2 | Offseason travel | Add short offseason trips that trade money and time for recovery, relationships, or brand growth. |
| P3 | Apartment visual room view | Provide a compact visual Life hub with unlockable areas rather than a large 3D scene. |

## 6. Manager Mode: Roster and Staff Operations

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Full roster dashboard | Show depth chart, contracts, roles, morale, chemistry, injuries, and development needs in one view. |
| P0 | Rotation planner | Set minutes, starters, bench units, closing lineup, and matchup-specific adjustments. |
| P0 | Staff assignment | Assign assistant coaches, trainers, scouts, and development staff to specific priorities. |
| P0 | Training camp plan | Choose team-wide priorities before the season and measure their effect on development. |
| P0 | Morale actions | Let the manager address poor morale through meetings, role changes, rest, or accountability. |
| P1 | Player role promises | Make promised minutes, starts, touches, or development roles affect satisfaction and retention. |
| P1 | Staff contracts | Negotiate staff salary, years, responsibilities, and quality. |
| P1 | Staff chemistry | Model conflicts and synergies among head coach, assistants, scouts, and medical staff. |
| P1 | Development pipeline | Track each player’s current plan, potential, readiness, and minutes needed for growth. |
| P1 | Practice intensity | Set intensity by day and player group, balancing improvement against fatigue and injury risk. |
| P1 | Team culture identity | Choose whether the organization emphasizes development, defense, pace, star power, or continuity. |
| P2 | Coaching tree | Let staff leave for promotions and create future hiring advantages or rivalries. |
| P2 | Assistant coach autonomy | Delegate training, scouting, or lineup preparation to trusted staff. |
| P2 | Ownership expectations | Add owner goals, patience, budget, and board pressure. |
| P2 | Front-office politics | Introduce disagreement between coach, general manager, ownership, and star players. |
| P3 | Coach career ladder | Let the manager move between teams, become an executive, or build a coaching legacy. |

## 7. Manager Mode: Trade Machine and Transactions

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Trade builder | Construct multi-player and multi-pick trades with validation. |
| P0 | Salary matching | Apply simplified salary-matching rules with clear explanations when a trade fails. |
| P0 | Roster legality checks | Validate roster size, position balance, contracts, and required slots. |
| P0 | CPU trade proposals | Generate proposals based on needs, contracts, age, picks, fit, and team direction. |
| P0 | Trade value model | Score players and picks using age, performance, potential, contract, and positional scarcity. |
| P1 | Trade deadline board | Add urgency, rumors, buyer/seller labels, and deadline countdown. |
| P1 | Draft pick protections | Support protected, conditional, and unprotected future picks. |
| P1 | Pick swap logic | Add pick swaps with a visible best-case and worst-case value. |
| P1 | No-trade clauses | Reflect contract restrictions and player preferences in trade validation. |
| P1 | Negotiation styles | Let the manager choose aggressive, patient, transparent, or secretive negotiation behavior. |
| P1 | Trade rejection memory | Make teams remember lowball offers, tampering concerns, and previous negotiations. |
| P2 | Sign-and-trade | Add a controlled sign-and-trade path during free agency. |
| P2 | Waive and stretch decisions | Let managers release players with cap and morale consequences. |
| P2 | Buyout negotiations | Add veteran buyouts with player preference and contender logic. |
| P2 | Three-team trades | Support larger transaction webs without making the UI unreadable on mobile. |
| P3 | League transaction ticker | Show a compact, non-intrusive stream of league trades and signings. |

## 8. NBA Ecosystem, League Rules, and Realism

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Conference standings | Track wins, losses, streaks, point differential, and playoff position. |
| P0 | Play-in tournament | Add the modern play-in path with clear qualification rules. |
| P0 | Playoff bracket | Show a responsive bracket with series results, home-court advantage, and elimination. |
| P0 | League leaders | Track scoring, rebounds, assists, steals, blocks, efficiency, and advanced categories. |
| P0 | Awards race | Show MVP, Rookie of the Year, Defensive Player, Sixth Player, Most Improved, and Coach of the Year races. |
| P1 | All-League voting | Translate performance, team success, role, and reputation into selections. |
| P1 | All-Defense voting | Track defensive impact, assignment difficulty, and team defense. |
| P1 | Record book | Store franchise, league, playoff, rookie, and career records. |
| P1 | Schedule density | Model back-to-backs, travel, rest, and road stretches. |
| P1 | League injuries | Let injuries to real-name reference players influence rotations and standings. |
| P1 | League transactions | Generate offseason signings, trades, retirements, and draft movement. |
| P2 | Salary cap eras | Let future careers use configurable cap environments rather than one fixed economic model. |
| P2 | Expansion teams | Add a configurable expansion path with expansion draft logic. |
| P2 | Rule toggles | Allow optional rule variations for play-in, trade restrictions, draft lottery, and awards. |
| P3 | Historical start dates | Let users begin from different seasons if the data package supports it. |

## 9. College, NCAA-Style Route, and Draft Pipeline

| Priority | Feature | What it adds |
|---|---|---|
| P0 | College season dashboard | Show schedule, conference record, tournament hopes, stats, and draft stock. |
| P0 | College development choices | Give college players decisions around training, academics, team role, and draft preparation. |
| P0 | Draft stock model | Make performance, age, position, potential, interviews, and workouts affect draft range. |
| P0 | Draft combine | Add measurement, athletic testing, shooting drills, interviews, and medical outcomes. |
| P0 | Draft board | Show projected range, team needs, fit, and uncertainty without guaranteeing a pick. |
| P1 | March tournament route | Add conference tournament and national tournament progression. |
| P1 | College recruiting identity | Give colleges different styles, development reputations, and role opportunities. |
| P1 | Transfer decision | Let the player transfer, stay, or declare early with consequences. |
| P1 | NIL-style choices | Add optional college brand opportunities with time, money, and reputation tradeoffs. |
| P1 | Undrafted pathway | Expand two-way, summer league, overseas, G League, and camp invite routes. |
| P1 | Draft interviews | Let answers affect team fit, leadership perception, and draft confidence. |
| P2 | Procedural rookie classes | Generate future classes with varied archetypes, strengths, weaknesses, and backgrounds. |
| P2 | International prospects | Add overseas prospects, international teams, and different scouting uncertainty. |
| P2 | Draft lottery animation | Provide a short, skippable lottery sequence with odds and movement. |
| P3 | College legacy records | Store school records, retired numbers, and program history for long careers. |

## 10. AI and Simulation Intelligence

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Deterministic scenario seeds | Let users replay a week or compare choices using a stored seed. |
| P0 | Transparent modifier panel | Explain exactly how injuries, fatigue, trust, tactics, and challenges influence a result. |
| P0 | Difficulty profiles | Offer Casual, Standard, Simulation, and Iron Career tuning. |
| P0 | CPU team identities | Give each team a recognizable pace, shot profile, defensive identity, and roster philosophy. |
| P1 | Adaptive opponents | Let CPU teams react to player strengths, recent performances, and playoff history. |
| P1 | AI lineup logic | Make CPU rotations account for fatigue, matchups, roles, and closing ability. |
| P1 | AI trade logic | Make CPU transactions respect cap space, timeline, chemistry, and draft assets. |
| P1 | News generation rules | Produce league stories from actual simulated events rather than generic filler. |
| P1 | Narrative consequence engine | Link choices to future events using tagged consequences and cooldowns. |
| P2 | Scenario editor | Let advanced users create custom challenge conditions and save them locally. |
| P2 | Replay comparison | Compare two simulation outcomes with a side-by-side modifier breakdown. |
| P2 | Community seed sharing | Export and import deterministic challenge seeds without requiring a server. |
| P3 | Optional LLM commentary | Add opt-in generative commentary only where it can run reliably and transparently. |

## 11. Challenges, Missions, Achievements, and Meta Progression

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Challenge modifiers in simulation | Make active challenge rules directly influence games, contracts, or objectives. |
| P0 | Challenge completion screen | Celebrate success with a factual outcome summary, reward breakdown, and next unlock. |
| P0 | Challenge streaks | Reward completing related challenges across multiple weeks or seasons. |
| P0 | Daily mission variety | Rotate training, game, relationship, Life, and Manager tasks from deterministic pools. |
| P0 | Weekly missions | Add larger objectives that require several sessions and offer better rewards. |
| P1 | Season challenge packs | Bundle objectives around themes such as Rookie Rise, Defensive Anchor, Rebuild, or Small Market. |
| P1 | Mode-exclusive achievements | Create separate achievement families for Player and Manager careers. |
| P1 | Milestone badges | Award badges for records, loyalty, recovery, mentorship, drafting, and tactical identity. |
| P1 | Reward catalog | Exchange earned gems or legacy points for cosmetic, informational, or quality-of-life unlocks. |
| P1 | Challenge leaderboard locally | Compare current career against personal bests without requiring fake global rankings. |
| P2 | Iron Career mode | Disable reloads or reduce safety nets for users seeking a high-stakes run. |
| P2 | Randomized challenge seed | Start a new run with a deterministic but unusual roster, injury, or contract condition. |
| P2 | Challenge creator | Build, validate, and export user-authored challenge rules. |
| P3 | Seasonal content drops | Add new challenge packs without requiring a full app rewrite. |

## 12. Economy, Gems, Rewards, and Ethical Retention

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Gem ledger | Record every gem earn and spend event with a reason and timestamp. |
| P0 | Reward preview | Show exactly what a mission, challenge, or milestone pays before the user commits. |
| P0 | Offline purchase receipts | Store local receipts for simulated or cosmetic purchases and make them exportable. |
| P0 | Wallet safety state | Prevent negative balances, duplicate claims, and repeated reward exploitation. |
| P1 | Legacy currency | Add a long-term currency earned through completed seasons and career milestones. |
| P1 | Cosmetic unlocks | Offer courtbook themes, accent colors, badges, avatar frames, and report covers. |
| P1 | Information unlocks | Let users spend earned currency on scouting reports, deeper analytics, or extra comparison views. |
| P1 | Rest tokens | Add optional, clearly labeled recovery aids that do not make results pay-to-win. |
| P1 | Reward history | Show all recent gem, legacy, contract, endorsement, and challenge rewards. |
| P2 | Collection book | Track unlocked themes, awards, records, teams, player routes, and career chapters. |
| P2 | No-pressure economy mode | Allow users to disable gems and use direct unlocks for a simpler offline experience. |
| P3 | Cloud entitlement sync | If a backend is ever introduced, sync purchases carefully without compromising local saves. |

## 13. Accessibility, Localization, and Mobile UX

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Complete keyboard navigation | Ensure every action, tab, modal, and chart has a visible focus path. |
| P0 | Screen-reader summaries | Provide concise text alternatives for radar charts, standings, awards, and box scores. |
| P0 | Large type mode | Scale labels, numbers, navigation, and action targets without clipping. |
| P0 | Color-blind palettes | Make status, progress, wins, losses, injury severity, and rewards distinguishable without color alone. |
| P0 | Reduced motion | Remove non-essential transitions, flashes, and animated result reveals. |
| P0 | Touch target audit | Keep important controls at comfortable mobile sizes with clear spacing. |
| P1 | Haptic feedback hooks | Add optional vibration cues for game results, claims, injuries, and challenge completions. |
| P1 | Portrait and landscape layouts | Support compact portrait play and a wider landscape dashboard on tablets. |
| P1 | Localization framework | Prepare labels, dates, currencies, and pluralization for multiple languages. |
| P1 | Font-size presets | Offer compact, standard, large, and extra-large presets. |
| P1 | Data density toggle | Let users choose quick summary, standard, or advanced analytics views. |
| P2 | Right-to-left support | Prepare navigation and layout for RTL languages. |
| P2 | Dyslexia-friendly option | Offer a readable typeface and increased line spacing as an opt-in mode. |
| P3 | Voice command shortcuts | Support local commands such as “open challenges” or “save career” where browser support allows. |

## 14. Offline-First PWA and Data Reliability

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Save version migrations | Keep a migration chain for every future save schema change. |
| P0 | Multiple named career files | Let users store separate Player, Manager, experiment, and challenge careers locally. |
| P0 | Export/import validation | Validate schema, reject corrupt files, and explain recovery options. |
| P0 | Autosave indicator | Show saved, saving, fallback, and conflict states clearly. |
| P0 | Offline status banner | Indicate that all core systems remain playable without a network connection. |
| P1 | Save snapshots | Automatically retain a small number of rolling snapshots before major progression events. |
| P1 | Conflict resolver | If local and imported files differ, let users compare timestamps and choose deliberately. |
| P1 | Service-worker update prompt | Explain when a new app version is ready and let the user refresh safely. |
| P1 | Data repair utility | Scan a save for missing optional fields and restore safe defaults without wiping progress. |
| P1 | Storage usage panel | Show approximate save size and offer cleanup for old snapshots. |
| P2 | Optional cloud backup | Add encrypted backup only after the local-first flow is stable and explicit consent exists. |
| P2 | Cross-device transfer code | Create a user-controlled export code for moving a career between devices. |
| P2 | Offline content packs | Cache future rookie classes, team data, and challenge packs as versioned packages. |
| P3 | Install onboarding | Add a short PWA installation guide tailored to iOS and Android behavior. |

## 15. Presentation, Visual Feedback, and Tactical Courtbook Polish

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Consistent result hierarchy | Make every screen clearly distinguish headline result, supporting evidence, and next action. |
| P0 | Award ceremony panels | Give awards and records a strong, skippable presentation using the existing Courtbook aesthetic. |
| P0 | Better empty states | Explain what becomes available after the next game, training session, or season milestone. |
| P0 | Contextual tooltips | Explain terms such as trust, usage, fatigue, fit, potential, and cap impact. |
| P1 | Form charts | Add compact line and bar visuals for recent performance without cluttering mobile screens. |
| P1 | Court diagrams | Use static, accessible half-court diagrams for shot zones, defensive assignments, and tactics. |
| P1 | Award cabinet | Store MVPs, All-League teams, records, challenges, and career honors in one visual archive. |
| P1 | Player card evolution | Update the player card as role, rating, awards, and team change. |
| P1 | Manager office evolution | Change the Manager home surface as the team moves from rebuild to contender. |
| P2 | Story recap montage | Build a skippable sequence from actual saved events, not fabricated highlights. |
| P2 | Printable season report | Export a well-formatted local HTML or Markdown season report. |
| P3 | Shareable career card | Export a privacy-safe image or JSON summary with no hidden personal data. |

## 16. Quality, Testing, and Trust Features

| Priority | Feature | What it adds |
|---|---|---|
| P0 | Determinism tests | Verify that the same save, action, and seed produce the same result offline. |
| P0 | Save/load regression suite | Test every save schema against current and previous versions. |
| P0 | Simulation modifier tests | Verify injuries, challenges, fatigue, trust, and tactics affect outcomes in intended ranges. |
| P0 | Accessibility regression pass | Test tab order, focus visibility, screen-reader labels, contrast, and reduced-motion behavior. |
| P0 | Mobile viewport matrix | Verify narrow Android, iPhone, and tablet widths for every major screen. |
| P1 | Balance telemetry locally | Store anonymous-in-device aggregates such as average season length and challenge completion without sending data. |
| P1 | Debug inspector | Add a developer-only panel showing seed, modifiers, save version, and current state. |
| P1 | User-facing rules glossary | Explain the simulation rules in plain language. |
| P1 | Error recovery screen | Replace silent failures with a clear option to retry, use fallback storage, export, or restart safely. |
| P2 | Scenario balance reports | Generate local reports showing whether an archetype, strategy, or challenge is unusually strong. |
| P2 | Accessibility feedback export | Let users export the current settings and affected screen state when reporting an issue. |
| P3 | Replay audit log | Store every major action in a compact timeline for debugging and career storytelling. |

---

## Recommended Next 12 Implementations

| Order | Implementation | Reason |
|---:|---|---|
| 1 | Connect active challenge modifiers to simulation outcomes | It turns the Challenge Board into a true gameplay system rather than a separate tracker. |
| 2 | Build the Manager trade machine with salary matching | It is the clearest missing Manager-specific strategic loop. |
| 3 | Add season recap and awards calculation from actual saved stats | It gives every season a satisfying conclusion and strengthens replayability. |
| 4 | Add a full career calendar and weekly agenda planner | It makes choices feel intentional instead of presenting progression as a single button. |
| 5 | Add procedural rookie-class generation | It keeps future seasons fresh and gives the draft route lasting value. |
| 6 | Add conference standings, play-in, playoff bracket, and awards races | It makes the league feel alive beyond the user’s own team. |
| 7 | Add attribute potential, aging, and development plans | It makes multi-season Player careers more strategic. |
| 8 | Add Manager rotation planner and CPU team identities | It gives Manager Mode a deeper day-to-day operating layer. |
| 9 | Add player contract negotiation and agent relationship | It gives Player Mode a meaningful business loop. |
| 10 | Add relationship actions and post-game decision windows | It makes the existing depth systems react more visibly to play. |
| 11 | Add save snapshots, repair, and conflict resolution | It protects the user’s long offline career files before complexity grows. |
| 12 | Add accessibility and determinism regression coverage | It preserves trust as the simulation and interface expand. |

## Suggested Release Waves

### Wave A: Simulation Reactivity

Implement challenge modifiers, injury impact, fatigue and recovery effects, performance grades, modifier transparency, and deterministic tests. This wave should make the existing systems visibly matter during games.

### Wave B: Manager Strategy

Implement the trade machine, salary matching, CPU proposals, rotation planner, staff assignments, and roster legality. This wave should make Manager Mode feel structurally independent from Player Mode.

### Wave C: Season Closure and Replayability

Implement season recap, awards, standings, playoff bracket, career calendar, procedural rookie classes, and multi-season record keeping. This wave gives the user a reason to continue past the first season.

### Wave D: Player Business and Life

Implement contract negotiation, agent relationships, endorsement obligations, financial planning, relationship actions, and stronger Life consequences. This wave turns the off-court layer into a meaningful career-management system.

### Wave E: Reliability and Presentation

Implement save snapshots, data repair, accessibility regression, glossary, award cabinet, exportable season reports, and final mobile polish. This wave improves trust and makes long careers easier to understand and share.

## Product Guardrails

RIMLINE should remain playable without a network connection, and every important result should be explainable through visible modifiers or a concise rules note. Real NBA names and teams should remain clearly presented as reference data rather than official affiliation. Rewards should be transparent and should not make the core simulation pay-to-win. Any future cloud or social layer should be optional, privacy-conscious, and never replace local save ownership.
