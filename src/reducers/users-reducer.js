export default (state=[], action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return action.payload.data.email
    default:
      return state
  }
}
