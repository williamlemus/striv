json.routes do
  @routes.each do |route|
    json.set! route.id do
      json.partial!('api/routes/route', route: route)
    end
  end
end

json.users do
  @routes.each do |route|
    json.set! route.user.id do
      json.extract!(route.user, :id, :first_name, :last_name)
      json.image_url asset_path(route.user.image.url)
    end
  end
end
