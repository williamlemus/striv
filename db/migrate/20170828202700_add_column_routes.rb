class AddColumnRoutes < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :distance, :float
  end
end
