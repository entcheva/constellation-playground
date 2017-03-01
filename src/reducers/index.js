import { combineReducers } from 'redux'

import usersReducer from './users-reducer'
import starsReducer from './starsReducer'
import constellationReducer from './constellationReducer'
import myConstellationsReducer from './myConstellationsReducer'
import linesReducer from './linesReducer'
import highlightedReducer from './highlightedReducer'
import showConstellationReducer from './showConstellationReducer'
import listUsersReducer from './listUsersReducer'


const rootReducer = combineReducers({
  user: usersReducer,
  stars: starsReducer,
  constellation: constellationReducer,
  myConstellations: myConstellationsReducer,
  showConstellation: showConstellationReducer,
  lines: linesReducer,
  highlighted: highlightedReducer,
  listUsers: listUsersReducer
})


export default rootReducer
