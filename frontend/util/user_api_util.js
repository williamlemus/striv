export const getUser = userid => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userid}`
  });
};


export const updateUser = (formData, userid) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userid}`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  })
}
