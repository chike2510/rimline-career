# RIMLINE Flow Revision Checklist

- [x] Add a first-launch/new-career mode chooser with Player Mode and Manager Mode as mutually exclusive career starts.
- [x] Add Create Player setup screen with name, position, archetype, and confirmation.
- [x] Add Create Manager setup screen with manager name, philosophy, and confirmation.
- [x] Separate the Player Mode screen navigation from the Manager Mode screen navigation after career creation.
- [x] Add a post-game state that displays the complete box score for both teams before weekly advancement.
- [x] Add explicit Continue to Next Week progression from the box score.
- [x] Preserve selected mode, created profile, weekly state, and box scores in local storage.
- [x] Verify responsive mobile layouts, type-check, production build, and offline PWA behavior.
- [ ] Add deterministic weekly event generation with Player and Manager event pools.
- [ ] Add event decision screens with resource/stat consequences and event history.
- [ ] Add season-end detection at Game 82 and an offseason progression screen.
- [ ] Add offseason rewards, attribute/team progression, contract or philosophy carryover, and next-season reset.
- [ ] Persist weekly events, offseason state, season number, and career history locally.
- [ ] Verify weekly event and offseason flows on mobile, type-check, production build, and PWA behavior.

## IndexedDB Persistence Release

- [x] Add an IndexedDB career-file schema with versioning and atomic writes.
- [x] Migrate existing localStorage career data into IndexedDB without losing progress.
- [x] Replace state persistence with debounced automatic IndexedDB saves.
- [x] Add explicit save/load controls and a recovery state when IndexedDB is unavailable.
- [x] Verify reload, offline, migration, and corrupt-data recovery paths.
- [x] Save and push the IndexedDB persistence release.

## Full Feature Expansion

- [ ] Expand the shared simulation model for playoffs, awards, progression, relationships, contracts, staff, tactics, league evolution, achievements, and challenges.
- [ ] Add playoffs, postseason awards, legacy milestones, and challenge scenarios.
- [ ] Add Player Mode skill tree, injuries, relationships, contract negotiation, lifestyle reputation, and career legacy.
- [ ] Add Manager Mode rotations, trades, free agency, draft scouting, staff, tactical game plans, and evolving league teams.
- [ ] Add expanded event variety with rarity, streaks, and cross-system consequences.
- [ ] Add multiple save slots plus JSON export/import around IndexedDB.
- [ ] Polish navigation and mobile UI for the expanded feature set.
- [ ] Verify major flows, type-check, production build, and offline behavior.
- [ ] Save the release and commit all finished files to GitHub.

## Real NBA Data Release

- [x] Research and record authoritative current NBA team and player sources.
- [x] Replace fictional teams with the 30 real NBA franchises and conference/division metadata.
- [x] Replace fictional player names in rosters, box scores, contracts, events, and Manager Mode.
- [x] Add real-data attribution and a clear unofficial/non-affiliation notice.
- [x] Use text/initials or user-provided assets instead of shipping unlicensed team logos.
- [x] Verify mobile rendering, offline persistence, type-check, production build, and GitHub commit.

## NCAA and Draft Pipeline

- [x] Add a new Player Route selection: College Route or Direct Pro Route.
- [x] Add NCAA player profile fields, college team, college season, conference record, tournament, and draft eligibility state.
- [x] Add College Mode weekly games, training, events, tournament progression, and declare-for-draft decision.
- [x] Add draft combine, scouting projection, lottery/order assignment, and automatic NBA team selection for drafted players.
- [x] Add direct-to-pro interest offers from 2–4 real NBA teams where the player chooses the signing club.
- [x] Add undrafted/free-agent fallback if a player is not selected.
- [x] Connect route, college, draft, assigned team, and signing offer data to Player Mode and IndexedDB saves.
- [x] Add Manager Mode draft board and college prospect pool using clearly labeled fictional prospects unless licensed real NCAA data is supplied.
- [x] Verify route-specific screens, real NBA team display, mobile layout, persistence, build, and GitHub commit.

## Archetype and UX Refinement

- [x] Expand Player Mode from three archetypes to a richer position-aware archetype catalog.
- [x] Add archetype descriptions, strengths, tradeoffs, and starting-stat identities.
- [x] Improve creation-screen selection feedback, preview copy, and validation.
- [x] Refine mobile spacing, type hierarchy, choice layout, CTA treatment, and accessibility states.
- [x] Verify the create-player screen at phone width, run checks/build, save the release, and push to GitHub.

## Archetype Attribute Radar

- [x] Define six readable attribute dimensions and per-archetype values.
- [x] Add a live SVG radar chart that updates with the selected archetype.
- [x] Add numeric stat labels and an explanatory legend for the chart.
- [x] Keep the chart accessible with text alternatives and responsive mobile sizing.
- [x] Verify the screen, run checks/build, save the release, and push to GitHub.

## Integrated Full Simulation Release

- [x] Build shared full-season, NCAA, draft, playoffs, awards, legacy, and evolving-league simulation rules.
- [x] Add complete Player Mode schedule, injuries, contracts, relationships, lifestyle, legacy, and achievement depth.
- [x] Add complete Manager Mode rotations, transactions, staff, scouting, tactics, draft, and AI team movement.
- [x] Add multiple named IndexedDB save slots and robust import/export validation.
- [x] Add presentation-ready navigation and responsive UX for the expanded systems.
- [x] Verify every major flow, offline behavior, mobile layouts, and production build.
- [x] Save and commit the integrated release to GitHub.

## Full Depth Expansion

- [x] Add practice drills with risk/reward outcomes.
- [x] Add shot profile and advanced analytics.
- [x] Add coach trust and player personality traits.
- [x] Add press conferences, social-media narratives, and team chemistry activities.
- [x] Add agents, endorsements, and contract obligations.
- [x] Add travel, fatigue, injury, and recovery effects.
- [x] Add coach/system fit and franchise identity.
- [x] Add dynamic records, milestones, retirement, and post-career paths.
- [x] Add scenario editor and challenge configuration.
- [x] Add difficulty, accessibility, and presentation settings.
- [x] Persist the expanded systems in IndexedDB and verify offline reload.
- [x] Save the release and commit it to GitHub.

## Simulation Depth Wave

- [ ] Persist Command Desk meters, decisions, and history in the canonical IndexedDB career state.
- [ ] Add live box-score-linked shot profile and advanced analytics.
- [ ] Add injuries, diagnoses, rehabilitation plans, setbacks, and return-to-play decisions.
- [ ] Add relationships, mentorships, rivalries, locker-room chemistry, and narrative effects.
- [ ] Add contract negotiation with salary, years, options, incentives, and role guarantees.
- [ ] Add Player awards, award races, records, Hall of Fame, and timeline history.
- [ ] Add Manager trades, salary matching, free agency, draft picks, and CPU transaction logic.
- [ ] Add rookie class generation, scouting uncertainty, staff hiring, and staff specialties.
- [ ] Add game-plan editor with offensive, defensive, pace, matchup, and rotation settings.
- [ ] Add league evolution, expansion/relocation, rule changes, rivalries, and generational stars.
- [ ] Add challenge scenarios with objectives, modifiers, rewards, and completion tracking.
- [ ] Add localization-ready copy structure, color-blind palettes, reduced motion, and keyboard/controller shortcuts.
- [ ] Verify major Player and Manager flows, offline reload, mobile layouts, type-check, and production build.
- [ ] Save and commit the simulation-depth wave to GitHub.

## Screenshot-Inspired Feature Wave

- [ ] Add a season recap and awards screen with MVP, top honors, All-League, All-Defense, and league leaders.
- [ ] Add persistent daily missions with progress, gem rewards, completion states, and daily refresh messaging.
- [ ] Add a Life wallet header and offline-safe gem store with retry and purchase feedback.
- [ ] Integrate recap, missions, and Life screens into Player navigation and career progression.
- [ ] Verify screenshot-inspired mobile hierarchy, accessibility, type-check, production build, and offline persistence.
- [ ] Save the screenshot-inspired feature-wave checkpoint.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, condensed uppercase headings, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep store failure states local and honest: show offline/retry behavior rather than pretending to complete a remote purchase.

## Style Decisions

- Treat the supplied screenshots as the visual ground truth for this feature wave: portrait-first composition, deep navy surfaces, pale gold section rules, electric cyan/green accents, and tightly stacked evidence panels.
- Use real in-game career state for recap values and mission progress; never invent user-generated reviews or testimonials.
- Keep

## Full Roadmap Expansion

### Shared Simulation
- [ ] Add explicit deterministic simulation seeds and replay metadata.
- [ ] Add transparent modifier ledgers for fatigue, injuries, trust, tactics, challenges, and chemistry.
- [ ] Add performance grades, form/momentum, shot profile, defensive assignment, and matchup outputs.
- [ ] Add career record book, milestone tracking, award race state, and reward ledger.

### Player Mode
- [ ] Add career calendar and weekly agenda planner.
- [ ] Add post-game decision window and film-room review.
- [ ] Add potential, aging, attribute caps, development plans, badges/perks, and mentor effects.
- [ ] Add contract negotiation, incentives, options, agent trust, trade request, and destination preferences.
- [ ] Add relationship network actions, rivalry history, family/support, media interviews, brand identity, and financial planning.

### Manager Mode
- [ ] Add full roster dashboard, rotation planner, closing lineups, and matchup adjustments.
- [ ] Add staff assignments, staff contracts, coaching tree, team culture, ownership expectations, and practice intensity.
- [ ] Add trade builder with salary matching, roster legality, CPU proposals, protected picks, swaps, and negotiation memory.
- [ ] Add waiver, buyout, sign-and-trade, multi-team transaction, and deadline workflows.

### League, NCAA, and Draft
- [ ] Add conference standings, play-in, playoff bracket, series logic, league leaders, and awards races.
- [ ] Add league transactions, injuries, schedule density, CPU team identities, and record book.
- [ ] Add college dashboard, tournament path, transfer decision, combine, interviews, draft board, and undrafted routes.
- [ ] Add procedural rookie classes, international prospects, draft lottery, pick protections, and draft history.

### Meta, Life, and Rewards
- [ ] Connect active challenge modifiers directly to simulation outcomes.
- [ ] Add daily/weekly/season challenge packs, streaks, achievement cabinet, and Iron Career mode.
- [ ] Add Life relationship actions, lifestyle budget, recovery choices, social feed, rivalry system, and community events.
- [ ] Add gem ledger, legacy currency, cosmetic and information unlocks, reward history, no-pressure economy mode, and collection book.

### Offline, Accessibility, and Presentation
- [ ] Add save snapshots, repair utility, conflict resolver, storage usage panel, and version migration tests.
- [ ] Add complete keyboard navigation, screen-reader summaries, font-size presets, color-blind semantics, and data-density modes.
- [ ] Add localization structure, RTL readiness, and optional haptic hooks.
- [ ] Add award ceremony panels, court diagrams, form charts, award cabinet, season reports, and shareable career cards.
- [ ] Add determinism tests, simulation modifier tests, save/load regression coverage, and a mobile viewport matrix.

### Release Gates
- [ ] Verify each release wave with type-check and production build.
- [ ] Verify offline save/load, refresh recovery, import/export, and multi-slot behavior.
- [ ] Verify Player and Manager flows remain structurally separate.
- [ ] Capture representative mobile screenshots after the expansion.
- [ ] Save a final expanded-release checkpoint.

## Next-Step Release Wave

- [ ] Add full best-of-seven playoff series state with per-game results, round advancement, elimination, and championship outcomes.
- [ ] Add deterministic bracket and opponent generation for conference finals and championship rounds.
- [ ] Add CPU-generated Manager trade proposals with salary matching, roster legality, fit score, and accept/decline flow.
- [ ] Persist trade proposal inbox, negotiation history, accepted transactions, and declined proposal memory.
- [ ] Add procedural rookie class generation per season with seed, archetypes, schools, potential, and scouting confidence.
- [ ] Add draft lottery odds, draw results, draft order, draft board, selections, and draft history.
- [ ] Integrate playoff, trade, and draft routes into separate Player and Manager navigation.
- [ ] Verify offline persistence, determinism, accessibility, mobile layouts, type-check, build, and final checkpoint.

## Integrated Career-Loop Release

- [ ] Persist playoff state and CPU trade inbox state through named saves and import/export.
- [ ] Connect playoff completion to season summary, awards, offseason progression, and next-season reset.
- [ ] Add Manager draft selection, drafted-player signing, roster insertion, and draft history.
- [ ] Integrate postseason and draft controls into separate Player and Manager screens.
- [ ] Verify persistence, determinism, accessibility, mobile layout, type-check, production build, and checkpoint.

## Differentiated Navigation and Career-Loop Release

- [ ] Connect playoff completion to the visible season recap and offseason transition.
- [ ] Add draft selection, rookie signing, roster insertion, and Manager draft history.
- [ ] Generate CPU trade proposals automatically at deadline weeks and persist accept/decline decisions.
- [ ] Make Player and Manager nav bars distinct in labels, ordering, accent treatment, and contextual headers.
- [ ] Verify deep links, persistence, responsive layouts, accessibility, type-check, production build, and offline behavior.
- [ ] Save the differentiated-navigation release checkpoint.

## GitHub Synchronization Audit

- [ ] Compare local RIMLINE branch with the configured private GitHub remote.
- [ ] Review uncommitted files and checkpoint changes before committing.
- [ ] Push any missing latest changes to the remote main branch.
- [ ] Verify remote commit head and working-tree synchronization.
