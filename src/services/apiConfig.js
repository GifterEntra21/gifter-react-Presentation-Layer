import axios from "axios";
import { login, refresh } from "./token"

export const apiConfig = axios.create({
    baseURL: "https://localhost:7008",
});


apiConfig.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const acess_token = localStorage.getItem("token");

        if (acess_token === null) {
            const response = await login();          
            return response;
        }
        if (error.response.status === 401) {
            const response = await refresh();
            return response;
        }
        return Promise.reject(error);
    }
);




