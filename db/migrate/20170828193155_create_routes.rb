class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.text :polyline
      t.integer :user_id
      t.string :title
      t.timestamps
    end

    add_index :routes, :user_id
  end
end
