import axios from 'axios';

let API = axios.create({baseURL : "https://task-manager-web-backend.herokuapp.com/"});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}` ;
    }

    return req;
});

export default API;