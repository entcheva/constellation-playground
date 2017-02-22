export default (state={mouseX: 0}, action) => {
  switch (action.type) {
    case 'SHOW_CONSTELLATION_NAME':
      return action.payload
    case 'HIDE_CONSTELLATION_NAME':
      return {mouseX: 0}
    default:
      return state
  }
}
