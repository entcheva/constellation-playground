import axios from 'axios'
import { browserHistory } from 'react-router'
// import userAdapter from '..adapters/userAdapter'

axios.defaults.baseURL = "http://localhost:3000/api/v1"
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const createUser = (user) => {
  // call on Rails API to hit the Create action
  const response = axios.post('/signup', user).then( (userData) => {
    // user is object with form data
    // userData includes jwt token and other Rails info
    sessionStorage.setItem('jwt', userData.data.jwt) // send jwt token to session storage
    browserHistory.push("/") // alters the URL in browser
    return user.username // sets the response to equal username
  })
  return {
    type: 'LOG_IN',
    payload: response // sending username as payload to the reducer
  }
}

export const logInUser = (user) => {
  // call on Rails API to match and decode token
  const response = axios.post('/login', user).then( (userData) => {
    sessionStorage.setItem('jwt', userData.data.jwt)
    browserHistory.push("/")
    debugger
    return user.username
  })
  return {
    type: 'LOG_IN',
    payload: response
  }
}

export const logOutUser = () => {
  sessionStorage.clear()
  browserHistory.push("/signup")
  return {
    type: 'LOG_OUT'
  }
}
