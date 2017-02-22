import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import User from './components/User'
import SkySVG from './components/SkySVG'
// import Sky from './components/Sky'

// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={SkySVG} />
//     <Route path="/signup" component={User}></Route>
//   </Route>
// )

render (
  <Route history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={User} />
      <Route path="/sky" component={SkySVG}></Route>
    </Route>
  </Route>,
  document.getElementById('root')
)
