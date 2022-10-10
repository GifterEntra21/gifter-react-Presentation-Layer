import axios from "axios";

import { memoizedRefreshToken } from "../Api/RefreshToken";
import { memoizedLogin } from "../Api/Login";

export const apiConfig = axios.create({
  baseURL: "https://localhost:7008/api",
});

apiConfig.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem("session"));

    if (session?.accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${session?.accessToken}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiConfig.interceptors.response.use(
  (response) => response,
  async (error) => {


    const config = error?.config;
    const session = JSON.parse(localStorage.getItem("session"))
    //console.log(session)
    if (error?.response?.status === 401 && !config?.sent && session === null) {
      config.sent = true;
      const result = await memoizedLogin();
      if (result?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.accessToken}`,
        };
      }


      return axios(config);
    }
    else if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      const result = await memoizedRefreshToken();
      if (result?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.accessToken}`,
        };
      }


      return axios(config);
    }


    return Promise.reject(error);
  }
);

export const axiosPrivate = axios;