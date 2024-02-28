import axios from "axios";

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
});

const getPosts = () => instance.get('/posts');
const getDetails = (payload) => instance.get(`/posts/${payload}`);

const api = {
    getPosts,
    getDetails
};

export default api;