import axios from 'axios'

const getDjangoAPI = axios.create({
    baseURL: 'https://curacaodevicemgmt-test.azurewebsites.net',
    timeout: 10000
})

export { getDjangoAPI }