import axios from "axios";

const URL = 'https://cors-anywhere.herokuapp.com/https://currate.ru/api/'
const REQUEST_TIMEOUT = 50000;

export const createAPI = () => {
    const api = axios.create({
        headers: {
        },
        baseURL: URL,
        timeout: REQUEST_TIMEOUT,
        responseType: "json"
    });

    const onSuccess = (response) => response;

    const onFail = (err) => {
        throw err;
    };

    api.interceptors.response.use(onSuccess, onFail);

    return api;
}