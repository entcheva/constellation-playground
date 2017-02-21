import { combineReducers } from 'redux'

import usersReducer from './users-reducer'
import starsReducer from './starsReducer'
import constellationReducer from './constellationReducer'
import myConstellationsReducer from './myConstellationsReducer'
import linesReducer from './linesReducer'
import highlightedReducer from './highlightedReducer'


const rootReducer = combineReducers({
  2: usersReducer,
  stars: starsReducer,
  constellation: constellationReducer,
  myConstellations: myConstellationsReducer,
  lines: linesReducer,
  highlighted: highlightedReducer
})


export default rootReducer
