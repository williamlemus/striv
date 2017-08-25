class AddUsersToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column(:workouts, :user_id, :integer)
  end
end
