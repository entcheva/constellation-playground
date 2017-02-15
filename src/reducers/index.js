import { combineReducers } from 'redux'

import usersReducer from './users-reducer'
import starsReducer from './starsReducer'


const rootReducer = combineReducers({
  user: usersReducer,
  stars: starsReducer

  // usersReducer === {username: "stardude"}

  // This sets the global state to => {user: {username: "stardude"}}
})


export default rootReducer
