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
