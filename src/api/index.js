import request from "../utils/request";

export const getsideBarList = () => request({ url: "/list/sideBar", method: "get" });
export const getPhoneType = () => request({ url: "/list/type/phone", method: "get" });
