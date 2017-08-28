class UpdateRoutesColumns < ActiveRecord::Migration[5.1]
  def change
    change_column :routes, :polyline, :text, null: false
    change_column :routes, :user_id, :integer,  null: false
    change_column :routes, :title, :string, null: false
  end
end
