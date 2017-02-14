export default (state={}, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {username: action.payload}  // sending username to store
    default:
      return state
  }
}
