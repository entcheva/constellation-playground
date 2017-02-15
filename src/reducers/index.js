import { combineReducers } from 'redux'

import usersReducer from './users-reducer'
import starsReducer from './starsReducer'
import constellationReducer from './constellationReducer'


const rootReducer = combineReducers({
  user: usersReducer,
  stars: starsReducer,
  constellation: constellationReducer

  // usersReducer === {username: "stardude"}

  // This sets the global state to => {user: {username: "stardude"}}
})


export default rootReducer
