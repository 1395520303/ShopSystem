import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000",
  //   withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000,
});
request.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
const token = window.localStorage.getItem("token");
request.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    config.transformRequest = [
      function (data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      },
    ];
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
