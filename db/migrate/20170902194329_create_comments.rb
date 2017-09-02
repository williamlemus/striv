class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :workout_id
      t.integer :user_id
      t.text :body
      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :workout_id
  end
end
