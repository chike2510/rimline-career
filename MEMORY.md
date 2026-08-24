# RIMLINE Development Memory

The original implementation joined Player Mode and Manager Mode behind one shared navigation rail. The current flow is mode-first: a fresh install opens `Choose Your Career`, then routes to either `Create Player` or `Create Manager`. After confirmation, each career has its own dedicated navigation and screens. Player careers use Home, Training, League, Life, and Stats. Manager careers use Front Office, Roster Room, and League.

A completed game now creates a `BoxScore` state with separate home and away rosters. `BoxScoreScreen` renders both teams and all player lines before `Continue to Next Week` returns to the selected career. Query screens `?screen=start`, `?screen=create-player`, `?screen=create-manager`, and `?screen=boxscore` exist for deterministic visual verification.

The app remains client-only and offline-first. Career data and manager data are stored locally; the PWA manifest and service worker remain in `client/public/`.
