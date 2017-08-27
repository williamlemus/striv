export const allWorkouts = state => {
  return Object.keys(state.entities.workouts).map((key) => {
    return state.entities.workouts[key]
  }
  );
};
