import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import User from './components/User'
import Sky from './components/Sky'
import Canvas from './components/Canvas'
import SVG from './components/svg'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Sky} />
    <Route path="/signup" component={User}></Route>
    <Route path="/canvas" component={Canvas}></Route>
    <Route path="/svg" component={SVG}></Route>
  </Route>
)
