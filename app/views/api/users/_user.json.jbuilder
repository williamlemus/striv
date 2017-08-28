json.extract!(user, :id, :username, :first_name, :last_name, :location, :weight, :bio )
json.image_url asset_path(user.image.url)
