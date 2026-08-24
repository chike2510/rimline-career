# RIMLINE Build Plan

## Product target
Build an offline-first mobile basketball career simulation PWA faithful to the approved RIMLINE mockups, with Player Mode and Manager Mode.

## Risk slices

- Core simulation state must remain deterministic enough to understand while retaining light match variance.
- Local persistence must survive refresh and preserve mode, career stats, energy, cash, fans, and manager metrics.
- Mobile layout must preserve the phone-like central rail, fixed bottom navigation, and clear next-decision CTA.
- Manager Mode must be reachable from both the top mode switch and bottom navigation, with distinct but cohesive team-management mechanics.

## Verification criteria

- `pnpm check` succeeds.
- `pnpm build` succeeds.
- Home screen visibly matches the RIMLINE mockup hierarchy at mobile width.
- Player Mode can simulate a game, update stats/resources, and persist after refresh.
- Training and Life actions update state and show feedback.
- League and Stats tabs render coherent data tables.
- Manager Mode renders a team record, focus selector, team metrics, and staff actions.
- `/manifest.json` is present and service worker registration is configured.
