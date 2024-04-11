import axios from 'axios'

const getDjangoAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 10000
})

export { getDjangoAPI }