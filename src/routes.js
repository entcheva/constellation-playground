import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import User from './components/User'
import SkySVG from './components/SkySVG'
import UserIndex from './components/UserIndex'
import UserShow from './components/UserShow'

export default (
  <Route path="/sky" component={App}>
    <IndexRoute component={SkySVG} />
    <Route path="/signup" component={User}></Route>
    <Route path="/users" component={UserIndex} />
    <Route path="/show" component={UserShow} />
  </Route>
)
