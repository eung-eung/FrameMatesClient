import axios from "axios";
import UseToken from "./UseToken";

const UseHttpClient = () => {
    const baseApiUrl = "http://theclique.fptu.meu-solutions.com/api/";
    console.log(baseApiUrl);

    const { getToken } = UseToken();
    const httpClient = axios.create({
        baseURL: baseApiUrl,
    });
    // Add a request interceptor to add the token to the headers
    httpClient.interceptors.request.use((config) => {
        const token = getToken();
        config.headers["Content-Type"] = "application/json";
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    const get = (url, params) => httpClient.get(url, { params });

    const post = (url, params) => httpClient.post(url, params);

    const put = (url, params) => httpClient.put(url, params);

    const del = (url) => httpClient.delete(url);
    return { get, post, put, del, httpClient };
};

export default UseHttpClient;
