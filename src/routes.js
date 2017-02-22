import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import User from './components/User'
import SkySVG from './components/SkySVG'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SkySVG} />
    <Route path="/signup" component={User}></Route>
  </Route>
)
