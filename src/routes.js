import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import UserSignUp from './components/user-sign-up'

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={UserSignUp}></Route>
    {/* <Route path="welcome" component={welcome}></Route> */}
  </Route>
)
