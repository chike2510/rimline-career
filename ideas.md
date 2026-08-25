# RIMLINE Design Direction

## Approach 1 — Tactical Courtbook
A premium dark sports-management interface with monospaced display type, condensed labels, sharp orange accents, and a disciplined playbook grid. It makes every statistic feel like a scouting report and every decision feel consequential.

**Probability:** 0.06

## Approach 2 — Broadcast Control Room
A brighter editorial dashboard inspired by live game broadcasts, with scorebug geometry, broadcast red, warm white, and modular information strips. It feels immediate and media-driven, but risks reducing the career layer to a scoreboard.

**Probability:** 0.03

## Approach 3 — Locker Room Ledger
A warm, paper-and-leather inspired management interface with cream surfaces, forest green, brass details, and handwritten annotation motifs. It feels personal and collectible, but is less faithful to the supplied dark mobile mockups.

**Probability:** 0.08

## Chosen Approach: Tactical Courtbook

### Design Movement
Contemporary sports editorial fused with tactical playbook typography and premium mobile game UI.

### Core Principles
1. **Stats are story evidence.** Numbers should explain what happened and what decision comes next.
2. **Contrast creates urgency.** Midnight navy grounds the interface while ember orange marks action and warm gold marks value.
3. **Dense, not cluttered.** Information can be compact when grouping, hierarchy, and whitespace are intentional.
4. **Every screen has a next move.** Buttons and tabs should make the player’s next meaningful choice obvious.

### Color Philosophy
Midnight navy creates a quiet locker-room atmosphere and keeps long sessions comfortable. Ember orange is the owned action color for simulation, progression, and selected navigation. Warm gold indicates value, legacy, and player growth. Slate neutrals make tables readable without flattening the interface. Electric teal is reserved for life/social signals and secondary emphasis.

### Layout Paradigm
A vertical mobile command center: fixed bottom navigation, stacked evidence panels, strong left alignment, and occasional wide score strips. Desktop widths should retain a phone-like central rail rather than expanding into a generic dashboard.

### Signature Elements
- Orange hairline rules and section labels that feel like scouting annotations.
- Solid numbered circles for mechanics and staged progression.
- A persistent “next game” or “next decision” module near the end of each primary screen.

### Interaction Philosophy
Interactions should feel like decisions, not decoration. Tap states respond quickly; action buttons use clear verbs; tabs preserve context; and result panels reveal consequence before presenting the next choice.

### Animation
Use restrained 120–220ms transitions for presses, tabs, and panel reveals. Use one deliberate score reveal on game simulation, with reduced-motion support. Never animate core navigation in a way that delays access to information.

### Typography System
Use a condensed display face for headings and labels, paired with a readable system sans for body copy and tables. Headlines use all caps with tight tracking; body copy stays sentence case; numeric values are large, tabular, and high contrast.

### Brand Essence
RIMLINE is an offline basketball career simulator for players who want to build a distinct star identity through fast, consequential decisions. **Focused, relentless, personal.**

### Brand Voice
Headlines are direct and competitive. CTAs are active verbs. Microcopy explains consequence without over-narrating.

Example lines:
- “Your next season starts with one decision.”
- “Earn the minutes. Own the moment.”

### Wordmark & Logo
Use the RIMLINE mark: a rising basketball passing through a rim arc, with an integrated upward career arrow. The wordmark uses a custom angular athletic treatment with the “L” carrying the orange action color.

### Signature Brand Color
**Ember Orange — #FF6A00.** It is the owned signal for agency: the next game, the next upgrade, and the next move.

## Style Decisions
- Match the supplied RIMLINE mockups closely: dark navy shell, orange selected states, rounded-but-controlled panels, compact bottom navigation, and dense career data.
- Keep all team names and logos fictional; do not imitate real NBA marks.
- Manager Mode belongs in the same app shell as Player Mode, but should shift the primary decision from “How did I play?” to “How do I run this team?”
- The web app remains offline-first and installable as a PWA; no gameplay path should require a network request.

- Accepted review amendment: Ember Orange owns primary CTAs, selected navigation, and next-decision signals in both Player and Manager modes; teal remains Manager context and secondary information.
- Accepted review amendment: the start screen uses file identifiers and consequence-oriented evidence cues so mode selection reads as a tactical board, not a generic onboarding form.
- Accepted review amendment: production image failures resolve to CSS marks, initials, or silhouette fallbacks, keeping the RIMLINE motif visible when storage assets are unavailable.
- Real-data requirement retained: RIMLINE continues to use real NBA teams and players as requested by the product brief; the reviewer’s suggestion to make the league fictional is intentionally not applied because it conflicts with that requirement.
