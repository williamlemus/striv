export const allWorkouts = state => {
  return Object.keys(state.entities.workouts).map((key) => {
    return state.entities.workouts[key]
  }
  );
};


export const allRoutes = state => {
  return Object.keys(state.entities.routes).map((key) => {
    return state.entities.routes[key]
  }
  );
};
