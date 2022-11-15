import request from "../utils/request";

export const getData = () => request({ url: "/conditionList", method: "get" });
