class AddPictureUrlUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :picture_url, :string
  end
end
