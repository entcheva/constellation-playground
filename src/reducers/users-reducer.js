export default (state={}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.payload.data
    case 'FETCH_USERNAME':
      return {username: action.payload.data.username}
    case 'LOG_OUT':
      return {username: null}
    case 'DISPLAY_USER':
      return {displayUser: action.payload}
    default:
      return state
  }
}
