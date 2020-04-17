import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-build-your-burger.firebaseio.com/'
})

export default instance