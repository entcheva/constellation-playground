export default (state=[], action) => {
  switch (action.type) {
    case 'DRAW_LINE':
      return [...state, action.payload]
    default:
      return state
  }
}
