import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5000/api',
})

export const setToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem('gapzero_token', token)
  } else {
    delete api.defaults.headers.common['Authorization']
    localStorage.removeItem('gapzero_token')
  }
}
