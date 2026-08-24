# RIMLINE Development Memory

The original implementation joined Player Mode and Manager Mode behind one shared navigation rail. The current flow is mode-first: a fresh install opens `Choose Your Career`, then routes to either `Create Player` or `Create Manager`. After confirmation, each career has its own dedicated navigation and screens. Player careers use Home, Training, League, Life, and Stats. Manager careers use Front Office, Roster Room, and League.

A completed game now creates a `BoxScore` state with separate home and away rosters. `BoxScoreScreen` renders both teams and all player lines before `Continue to Next Week` returns to the selected career. Query screens `?screen=start`, `?screen=create-player`, `?screen=create-manager`, and `?screen=boxscore` exist for deterministic visual verification.

The app remains client-only and offline-first. Career data and manager data are stored locally; the PWA manifest and service worker remain in `client/public/`.

## Weekly events and offseason

Weekly events are deterministic per mode, season, and game number, using separate Player and Manager event pools. Player events affect cash, followers, energy, form, and overall momentum; Manager events affect chemistry, morale, defense, and scouting. Each event is resolved through a dedicated choice screen and its event ID is appended to the persisted event history.

After Game 82, the post-game box score leads to an Offseason screen instead of the next week. Player offseason choices reset the schedule and record, restore energy, and grant different form, overall, or cash gains. Manager offseason choices reset the team record and improve selected front-office metrics. Advancing increments the season, clears the event history, and returns to the selected dedicated mode.
