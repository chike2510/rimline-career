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
