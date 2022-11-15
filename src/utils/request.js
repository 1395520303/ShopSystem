import axios from "axios";

const request = axios.create({
  baseURL:'',
//   withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000, // request timeout
});
request.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
// axios.defaults.baseURL = "https://api.example.com";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 响应拦截器
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request
