export default (state=[], action) => {
  switch (action.type) {
    case 'CREATE_LINE':
      return [...state, action.payload]
    default:
      return state
  }
}
