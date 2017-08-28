export const getUser = userid => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userid}`
  });
};
