# RIMLINE IndexedDB Persistence

RIMLINE stores the active career in the `rimline-career-db` IndexedDB database, version 1, under the `career-files` object store with the fixed key `active-career`. The record contains the selected mode, current screen, player and manager profiles, manager metrics, season state, last box score, active weekly event, and offseason summary.

The app hydrates from IndexedDB on launch. Existing RIMLINE localStorage keys are migrated once into the versioned career record so earlier progress is not discarded. After hydration, state changes are debounced for 350 milliseconds before an atomic IndexedDB `put` replaces the active career record.

The header exposes explicit Save and Load actions. If IndexedDB is unavailable or blocked, the app writes a serialized recovery copy to `rimline-career-fallback` in localStorage and exposes a `RECOVERY COPY` status. Load also attempts this fallback when IndexedDB cannot be opened. Reset clears both the legacy localStorage keys and the IndexedDB active record.
