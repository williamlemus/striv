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

export const getAllRoutes = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/routes'
  });
};
