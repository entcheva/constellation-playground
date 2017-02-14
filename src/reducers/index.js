import { combineReducers } from 'redux'

import usersReducer from './users-reducer'


const rootReducer = combineReducers({
  user: usersReducer

  // usersReducer === {username: "stardude"}

  // This sets the global state to => {user: {username: "stardude"}}
})


export default rootReducer
