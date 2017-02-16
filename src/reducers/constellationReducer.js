export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_CONSTELLATION':
      return [...state, action.payload]
    case 'REMOVE_FROM_CONSTELLATION':
      return state.filter((star) => star.id !== action.payload.id)
    case 'SAVE_CONSTELLATION':
      return []
    default:
      return state
  }
}
