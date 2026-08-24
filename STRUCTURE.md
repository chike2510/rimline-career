# RIMLINE Front-end Structure

The app is a client-only React/Vite experience. `client/src/App.tsx` owns the dark theme and route shell. `client/src/pages/Home.tsx` contains the mobile career command center and the Player/Manager mode state machine. `client/src/index.css` contains the Tactical Courtbook design system and responsive layouts. `client/public/manifest.json` defines install metadata, while `client/public/sw.js` caches the shell for offline launch.

Gameplay is currently modeled as plain local component state persisted in `localStorage`, keeping the first version easy to play offline. The next refactor can move the state reducer into `client/src/game/` without changing the UI contract.
