import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = "http://localhost:3000/api/v1/"

export const createUser = (user) => {
  // call on Rails API to hit the Create action
  const response = axios.post(URL + 'signup', user).then((userData) => {
    // user is object with form data
    // userData includes jwt token and other Rails info
    sessionStorage.setItem('jwt', userData.data.jwt) // send jwt token to session storage
    browserHistory.push(`/user/${user.username}`) // alters the URL in browser
    return user.username // sets the response to equal username
  })

  return {
    type: 'SIGN_UP',
    payload: response // sending username as payload to the reducer
  }
}
