export default (state={}, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {username: action.payload}  // sending username to store
    case 'LOG_IN':
      return {username: action.payload}  
    default:
      return state
  }
}
