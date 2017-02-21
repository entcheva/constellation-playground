import axios from 'axios'
import { browserHistory } from 'react-router'

// axios.defaults.baseURL = "http://localhost:3000/api/v1"
axios.defaults.baseURL = "https://constellations-api.herokuapp.com/api/v1"
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

if (sessionStorage.length === 0) {
  browserHistory.push("/signup")
}

export const createUser = (user) => {  // call on Rails API to hit the Create action
  const response = axios.post('/signup', user)  // user is object with form data
    .then( (userData) => {  // userData includes jwt token and other Rails info
      sessionStorage.setItem('jwt', userData.data.jwt) // send jwt token to session storage
      browserHistory.push("/") // alters the URL in browser
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
      if (userData.status === 200){
        browserHistory.push("/")
      }
      return userData
    })
    debugger
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

// export const removeFromConstellation = (star) => {
//   return {
//     type: 'REMOVE_FROM_CONSTELLATION',
//     payload: star
//   }
// }

export const undo = () => {
  return {
    type: 'REMOVE_LAST_STAR'
  }
}

export const saveConstellation = (array, constellationName) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  const starIDArray = array.map( star => star.id )
  axios.get('/active_id')
    .then( (userData) => {
      const userID = userData.data.user_id
      debugger
      const data = {
        name: constellationName,
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
    // .then( (constellationData) => {
    //   return axios.get('/stars')
    //   .then ( (stars) => {
    //
    //     // Create lines based on existing constellations
    //     // use the drawLines method here!
    //
    //     const constellations = constellationData.data
    //     let constellationsArray = []
    //
    //     constellationsArray = constellations.map ( (constellation) => {
    //       return constellation.stars_array.map( (starID) => {
    //         return stars.data.find ( (star) => star.id == starID )
    //       } )
    //     } )
    //     debugger
    //     return constellationsArray
    //   })
    // })
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
      stars_array: starsArray
    }
  }
}

//export const createLine  = (starsArray) => {
//  const line = {
//    star1x: starsArray[starsArray.length - 1].x,
//    star1y: starsArray[starsArray.length - 1].y,
//    star2x: starsArray[starsArray.length - 2].x,
//    star2y: starsArray[starsArray.length - 2].y
//  }
//  return {
//    type: 'CREATE_LINE',
//    payload: line
//  }

//}

export const highlightConstellation = (conID) => {
  return {
    type: 'HIGHLIGHT_CONSTELLATION',
    payload: conID
  }
}
export const removeHighlight = () => {
  return {
    type: 'REMOVE_HIGHLIGHT'
  }
}
