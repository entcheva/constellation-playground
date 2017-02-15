import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import User from './components/User'
import Sky from './components/Sky'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Sky} />
    <Route path="/signup" component={User}></Route>
  </Route>
)
