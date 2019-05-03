import axios from 'axios'
const API_URL = 'http://localhost:3000'

export class APIService {
  getFoodayAdvise () {
    const url = `${API_URL}/advise`
    return axios.get(url).then(response => response.data)
  }
  getFoodayList () {
    const url = `${API_URL}/recipes`
    return axios.get(url).then(response => response.data)
  }
}
