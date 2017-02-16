import { combineReducers } from 'redux'

import usersReducer from './users-reducer'
import starsReducer from './starsReducer'
import constellationReducer from './constellationReducer'
import myConstellationsReducer from './myConstellationsReducer'


const rootReducer = combineReducers({
  user: usersReducer,
  stars: starsReducer,
  constellation: constellationReducer,
  myConstellations: myConstellationsReducer
})


export default rootReducer
