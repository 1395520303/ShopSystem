import request from "../utils/request";

export const logIn = (data) =>
  request({ url: "/login", method: "post", data });
export const register = (data) =>
  request({ url: "/register", method: "post", data });
