export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (errors) => {
  return ({type: RECEIVE_ERRORS,
  errors});
}
