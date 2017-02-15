export default (state={}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {username: action.payload}  // sending username to store
    case 'LOG_OUT':
      return {username: null}
    default:
      return state
  }
}
