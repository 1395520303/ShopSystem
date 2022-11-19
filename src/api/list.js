import request from "../utils/request";

export const getBannerList = () => request({ url: "/list/banner", method: "get" });