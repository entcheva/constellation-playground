export default (state="", action) => {
  switch (action.type) {
    case 'HIGHLIGHT_CONSTELLATION':
    console.log(action.payload)
      return action.payload
    case 'REMOVE_HIGHLIGHT':
      return ""
    default:
      return state
  }
}
