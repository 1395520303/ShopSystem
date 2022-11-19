import request from "../utils/request";

export const getsideBarList = () => request({ url: "/list/sideBar", method: "get" });
