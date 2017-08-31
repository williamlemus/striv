export const newRoute = (route) => {
  return $.ajax({
    method: 'POST',
    url: 'api/routes',
    data: route
  })
};

export const getRoute = (routeid) => {
  return $.ajax({
    method: 'GET',
    url: `api/routes/${routeid}`
  })
};


export const deleteRoute = (routeid) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/routes/${routeid}`
  });
};

//user can only get own routes
export const getRoutes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/routes'
  });
};


export const updateRoute = route => {
  return $.ajax({
    method: 'PATCH',
    dataType: 'json',
    url: `api/routes/${route.route.id}`,
    data: route
  });
};
