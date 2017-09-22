# strīv [![Build Status](https://travis-ci.org/williamlemus/striv.svg?branch=master)](http://travis-ci.org/williamlemus/striv)


[strīv live](https://striv.herokuapp.com)

strīv is a full-stack web application inspired by Strava. It utilizes Ruby on Rails on the backend, a PosgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features and Implementation
### Rendering and creating routes

On the database side, maps are stored as encoded polylines which are then displayed when requested. The Google Maps API is used to render the route as the user selects points in real-time. The user can look at their own routes and edit the descriptions or delete them.

![New Route Sample](https://github.com/williamlemus/striv/blob/master/docs/images/NewRoute.gif "New Route Sample")

### Workouts
A user can generate as many workouts from any of their routes. In the backend this is stored as a one to many(one route can have many workouts) relationship. As the user navigates their or anyone's profile, stats are displayed. The Google static image API is used to display completed workouts.

![Workout Feed Sample](https://github.com/williamlemus/striv/blob/master/docs/images/ActivityFeed.png "Workout Feed Sample")

## Future Directions for the project

### Friends
Having friends is one of the most important features after being able to log workouts. The workout feed will include only workouts from friends, and users will be able to interact with friends through comments.

### Ride statistics
I plan to leverage the Google Visualization API to increase visualizations of workout statistics such as elevation, average speed, and user trends over time.
