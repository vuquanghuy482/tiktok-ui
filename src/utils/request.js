import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, opition = {}) => {
    const response = await request.get(path, opition)
    
    return response.data
}

export default request;
