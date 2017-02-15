export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_STARS':
      return action.payload.data
    default:
      return state
  }
}
