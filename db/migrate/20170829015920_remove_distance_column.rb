class RemoveDistanceColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :workouts, :distance
  end
end
