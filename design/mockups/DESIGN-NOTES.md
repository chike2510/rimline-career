# RIMLINE redesign notes

## The direction: COURTSIDE / AFTER DARK

Treat RIMLINE like a broadcast-grade career command center, not a generic dashboard. The core device is a near-black arena at tip-off: deep ink surfaces, smoked steel dividers, sharp court-lime for the user's active path, and a single hot-orange signal for urgency or opponent pressure. Put a player's season story in the visual foreground, then let compact data tiles unfold into richer cards. Use editorial sports language, box-score numerals, scoreboard structures, and controlled glow rather than generic SaaS widgets.

Palette: arena ink `#080D14`, raised slate `#111923`, second surface `#151F2B`, divider `#26313D`, primary type `#F1F5F7`, secondary `#8995A3`, court-lime `#C7FF45`, alert orange `#FF7448`, assist blue `#70A7FF`. Lime marks user-controlled, improving, or selected states. Orange marks time-sensitive or pressure states. Blue is reserved for opposing or secondary performance data.

Type and hierarchy: system sans for readable UI and compressed, heavy, close-tracked headlines; monospace numerals for OVR, records, seeds, times, and tables. Micro-labels are uppercase and letter-spaced, never used as the only way to identify a function. Keep normal data labels around 9-11 px in the mobile concept, key figures 19-34 px, hero name 32-36 px. Preserve contrast and avoid turning all detail into tiny text.

Data display: rank, season record, trend, and context should sit together. Use short form bars, narrow sparklines, simple single-series line charts with a shaded trend area, attribute/chemistry meters, and standings with explicit playoff/play-in bands. Comparisons use aligned team columns and score-like numerals. Use trend arrows only where the direction has a displayed baseline.

Cards and composition: one cinematic hero per screen, then tight modular cards that map to a real decision: next game, a player season card, a front-office decision, rotation snapshot, or standings. Differentiate the modes by content and action, not by introducing a second unrelated brand palette. Persistent compact bottom navigation stays readable. On a real build, cards can expand into detail views; the files here are static concept frames.

Motion cues for a future implementation: quick 140-220 ms press/release and selection feedback, quiet 250-350 ms card reveal, a brief lime sweep for an OVR change or milestone, and restrained orange pulse only for a genuinely time-sensitive issue. Keep charts and list positions stable; avoid ambient loops and casino-like odds movement. Motion is an interaction proposal, not represented in the static files.

## Reference notes

- Football Manager 26 official UI overview: https://www.footballmanager.com/fm26/features/fm26s-reimagined-user-interface. Their published redesign describes a Portal combining key happenings, fixtures, news and decisions, plus glanceable tiles that open into deeper cards, bookmarks, faster navigation and improved accessibility. RIMLINE adapts the portal and glance-to-depth pattern for game week, player progression and front-office decisions.
- Football Manager 26 Mobile features showcase: https://www.footballmanager.com/fm26/features/football-manager-26-mobile-new-features-showcase. Mobile-specific reference to keep navigation and information density appropriate to the smaller screen rather than scaling a desktop manager UI down.
- NBA 2K HQ official companion page: https://nba.2k.com/nba-2k-hq/. Current 2K companion framing highlights player-build creation, crew/roster management, daily rewards and rank tracking. The old MyNBA2K app was sunset per the same official source, so these notes use NBA 2K HQ as the current reference rather than treating MyNBA2K as active.
- NBA.com official stats leaders: https://www.nba.com/stats/leaders. Useful reference for high-density season leader data, categories and tabular comparison.
- ESPN iOS stats flow documentation: https://pageflows.com/post/ios/analytics/espn/. Captures a path across scores, event details, stats, filtered results, performance reports and player details; supports keeping sport context and drill-down connected.
- Dark sports-betting UI concept (Behance): https://www.behance.net/gallery/254991539/Live-Sports-Betting-Web-Mobile-App-Interface-Design. Use only high-contrast, live-state readability and compact matchup-card cues. RIMLINE is a career sim, not a wagering product: no betslip, odds ladder, or gambling calls to action.

The four files are illustrative static mockups with invented season data to make the hierarchy legible. They are not assertions about a saved career or live NBA standings. No source files in the cloned RIMLINE repository were modified.
