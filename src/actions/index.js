import axios from 'axios'

const URL = "http://localhost:3000/api/v1/"




export const createUser = (user) => {
  const response = axios.post(URL + 'signup', user)

  return {
    type: 'CREATE_USER',
    payload: response
  }
}
