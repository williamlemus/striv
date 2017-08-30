export const getUser = userid => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userid}`
  });
};


export const updateUser = user => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.user.id}`,
    data: user
  })
}
