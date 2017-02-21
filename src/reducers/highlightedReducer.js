export default (state="", action) => {
  switch (action.type) {
    case 'HIGHLIGHT_CONSTELLATION':
      return action.payload
    case 'REMOVE_HIGHLIGHT':
      return ""
    default:
      return state
  }
}
