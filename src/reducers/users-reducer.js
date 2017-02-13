export default (state=[], action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return action.payload.data.email
    default:
      return state
  }
}
