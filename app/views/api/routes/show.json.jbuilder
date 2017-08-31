json.route do
  json.partial!('api/routes/route', route: @route)
end
json.user do
  json.extract!(@route.user, :id, :first_name, :last_name)
  json.image_url asset_path(@route.user.image.url)
end
