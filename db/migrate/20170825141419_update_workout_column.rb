class UpdateWorkoutColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :workouts, :start_time, :start_datetime
  end
end
