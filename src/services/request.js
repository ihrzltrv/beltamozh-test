import axios from 'axios';

const baseURL = 'https://retoolapi.dev/D6xLg4/data';

const request = axios.create({
    baseURL,
});
export default request;