import axios from 'axios'
import { browserHistory } from 'react-router'

axios.defaults.baseURL = "http://localhost:3000/api/v1"
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const createUser = (user) => {  // call on Rails API to hit the Create action
  const response = axios.post('/signup', user)  // user is object with form data
    .then( (userData) => {  // userData includes jwt token and other Rails info
      sessionStorage.setItem('jwt', userData.data.jwt) // send jwt token to session storage
      browserHistory.push("/sky") // alters the URL in browser
      return userData // sets the response to equal username
    })
  return {
    type: 'LOG_IN',
    payload: response // sending username as payload to the reducer
  }
}

export const logInUser = (user) => {  // call on Rails API to match and decode token
  const response = axios.post('/login', user)
    .then( (userData) => {
      sessionStorage.setItem('jwt', userData.data.jwt)
      browserHistory.push("/sky")
      return userData
    })
  return {
    type: 'LOG_IN',
    payload: response
  }
}

export const logOutUser = () => {
  sessionStorage.clear()
  browserHistory.push("/")
  return {
    type: 'LOG_OUT'
  }
}

export const fetchUsername = () => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const response = axios.get('/active')
  return {
    type: 'FETCH_USERNAME',
    payload: response
  }
}

export const fetchStars = () => {
  const response = axios.get('/stars')
  return {
    type: 'FETCH_STARS',
    payload: response
  }
}

export const addToConstellation = (star) => {
  return {
    type: 'ADD_TO_CONSTELLATION',
    payload: star
  }
}

export const removeFromConstellation = (star) => {
  return {
    type: 'REMOVE_FROM_CONSTELLATION',
    payload: star
  }
}

export const saveConstellation = (array) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const starIDArray = array.map( star => star.id )
  axios.get('/active_id')
    .then( (userData) => {
      const userID = userData.data.user_id
      const data = {
        stars_array: starIDArray,
        user_id: userID
      }
      axios.post('/constellations', data)
    })
  return {
    type: 'SAVE_CONSTELLATION'
  }
}

export const fetchMyConstellations = () => {
  const response = axios.get('/my_constellations')
    .then( () => {
      // Create lines based on existing constellations
      // use the drawLines method here!
    })
  return {
    type: 'FETCH_MY_CONSTELLATIONS',
    payload: response
  }
}

export const addNewConstellation = (array) => {
  const starsArray = array.map( (star) => star.id )
  return {
    type: 'ADD_NEW_CONSTELLATION',
    payload: {
      name: 'New constellation',
      stars_array: starsArray}
    }
}

export const drawLines  = (starsArray) => {
  const line = {
    star1x: starsArray[starsArray.length - 1].x,
    star1y: starsArray[starsArray.length - 1].y,
    star2x: starsArray[starsArray.length - 2].x,
    star2y: starsArray[starsArray.length - 2].y
  }
  return {
    type: 'DRAW_LINE',
    payload: line
  }
}
