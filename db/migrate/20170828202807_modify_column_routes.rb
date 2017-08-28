class ModifyColumnRoutes < ActiveRecord::Migration[5.1]
  def change
    change_column :routes, :distance, :float, null: false
  end
end
