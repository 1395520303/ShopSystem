import request from "../utils/request";

export const getPhoneList = () => request({ url: "/list/phone", method: "get" });
export const getPhoneType = () => request({ url: "/type/phone", method: "get" });
