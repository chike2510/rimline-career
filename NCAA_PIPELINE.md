# RIMLINE NCAA and Draft Pipeline

RIMLINE Player Mode now begins with an entry-route decision after player creation.

## College Route

The player enters a simulated NCAA career at Duke, with conference affiliation, season record, games played, points per game, tournament context, and draft-stock tracking. Each college game changes the record, energy, form, and draft stock. The player becomes eligible to declare after twelve college games.

## Draft Route

After declaring, the draft room calculates a combine score from college stock and player overall. The draft board assigns a pick and selecting NBA franchise automatically. Drafted players do not choose their destination; pick order determines the club. If the player falls outside the first round, the career moves into an undrafted market fallback.

## Direct Pro Route

Players who skip college enter a market screen with multiple real NBA team interest offers. Each offer has a role, contract length, annual value, fit score, and promise. The player selects the club, and that decision becomes the first NBA team and contract context.

## Data and persistence

Route, NCAA state, draft state, offers, player team, and player route are persisted through the existing IndexedDB career file and local recovery fallback. Existing careers default safely to Direct Pro when no route metadata exists.

RIMLINE is an unofficial simulation. NBA team and player names are used as real-data references; team marks and player imagery require separately licensed or user-supplied assets.
