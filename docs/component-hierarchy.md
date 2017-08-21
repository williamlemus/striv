## Component Hierachy
**AuthFormContainer**
 - AuthFrom

**WorkoutIndexContainer**
 - WorkoutListItem

**Stats**

**NavigationContainer**
 - Header
 - Footer

**CreateRouteContainer**
 - Map
 - CreateRouteForm


**WorkoutFeedContainer**
 - WorkoutIndexContainer
 - StatTotals

**Workout**
 - WorkoutDetails
 - Map
 - WorkoutStats

**Profile**
 - WorkoutListContainer
 - UserInfo
 - Stats
  + WeeklyStats
  + StatsDetail


## Routes
|Path  | Component|
|------|----------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/profile" | "Profile" |
| "/new-route" | "CreateRouteContainer" |
| "/feed" | "WorkoutFeedContainer" |
| "/workouts/:workoutid" | "WorkoutContainer" |
