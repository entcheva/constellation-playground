export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_MY_CONSTELLATIONS':
      return action.payload.data
    case 'ADD_NEW_CONSTELLATION':
      return [...state, action.payload]
    default:
      return state
  }
}
