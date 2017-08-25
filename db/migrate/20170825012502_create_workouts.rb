class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.string :title, null: false
      t.float :distance, null: false
      t.string :exercise, null: false
      t.integer :workout_time, null: false
      t.datetime :start_time, null: false
      t.text :polyline, null: false
      t.text :description

      t.timestamps
    end

    add_index(:workouts, :title)

  end
end
