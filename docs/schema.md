# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## workouts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
description     | text      |
map_id          | integer   | not null, foreign key (references maps), indexed
user_id         | integer   | not null, foreign key (references users), indexed
workout_type    | string    | not null
start_datetime  | string    | not null
workout_time    | string    | not null

## maps
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
polyline        | text      | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
workout_id      | integer   | not null, foreign key (references workouts), indexed
