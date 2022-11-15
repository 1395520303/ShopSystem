import request from "../utils/request";

export const loginIn = (data) =>
  request({ url: "/loginIn", method: "post", data });
export const register = (data) =>
  request({ url: "/register", method: "post", data });
