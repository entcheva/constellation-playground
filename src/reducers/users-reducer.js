export default (state={}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {username: action.payload.data.username}  // sending username to store
    case 'FETCH_USERNAME':
      return {username: action.payload.data.username}
    case 'LOG_OUT':
      return {username: null}
    default:
      return state
  }
}
