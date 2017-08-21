```js
{
  entities: {
    workouts: {
      "1": {
        id: 1,
        title: 'Morning Ride',
        description: "Ride through the mountains",
        workout_time: 100,
        start_datetime: '2017-08-01 09:54:20',
        distance 45,
        workout_type: 'bike',
        map_id: 10 
      },
      "12": {
        id: 12,
        workout_time: 30,
        description: "Ride through the hills",
        start_datetime: '2017-08-04 19:54:20',
        distance 5,
        workout_type: 'bike'
        map_id: 15 
      },
    },
    stats: {
      totalDistance: 75,
      totalTime: 130,
      totalWorkouts: 4
    },
    UserInfo: {
      workouts: [1,12]
    },
    Comments: {
      "20": {
        body: "Great ride!",
        user_id: 1,
        workout_id: 16        
      }

    },
    maps: {
      map_id: 16,
      polyline: "polylines"
    }
  },
  errors: {
    login: ["Inccorrect Credentials"],
    workoutForm: ["Workout must have name"],
  },
  session: {
    id: 1,
    username: 'User',
    profile_pic_url: 'www.tbd.com/img.jpg'
  }
	
}

```
