export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_MY_CONSTELLATIONS':
      return action.payload.data
    default:
      return state
  }
}
