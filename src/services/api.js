import axios from 'axios';

const api = axios.create({ 
    baseURL: 'https://api-avocado.herokuapp.com/',
    headers: {
        'Content-Type':'application/json'
    }
});

export default api;