import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ffd6f5feab4395361eb86c92e4370cc3ec24680de4cdeae8a939a65625a82c69'
    }
})