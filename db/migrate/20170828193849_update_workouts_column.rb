class UpdateWorkoutsColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :workouts, :polyline
    add_column :workouts, :route_id, :integer, null: false
  end
end
