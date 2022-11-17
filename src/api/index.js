import request from "../utils/request";

export const getPhoneType = () => request({ url: "/type/phone", method: "get" });
export const getsideBarList = () => request({ url: "/list/sideBar", method: "get" });
