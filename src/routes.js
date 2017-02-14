import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import UserSignUp from './components/user-sign-up'
import Sky from './components/Sky'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Sky} />
    <Route path="/signup" component={UserSignUp}></Route>
  </Route>
)
