import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import User from './components/User'
import SkySVG from './components/SkySVG'
import UserView from './components/UserView'

export default (
  <Route path="/sky" component={App}>
    <IndexRoute component={SkySVG} />
    <Route path="/signup" component={User}></Route>
    <Route path="/users" component={UserView} />
  </Route>
)
