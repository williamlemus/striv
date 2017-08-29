json.extract!(route, :id, :distance, :polyline, :title, :user_id, :created_at)
json.user do
  json.extract!(route.user, :id, :first_name, :last_name)
  json.image_url asset_path(route.user.image.url)
end
