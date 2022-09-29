import axios from "axios";
import { login, refresh } from "./token"

export const apiConfig = axios.create({
    baseURL: "https://localhost:7008",
});

let Retries = 0;
apiConfig.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
    
        const acess_token = localStorage.getItem("token");
        Retries++;
        if (acess_token === null && Retries <3) {
            const response = await login();          
            return response;
        }
        if (error.response.status === 401 && Retries <3) {
            const response = await refresh();
            return response;
        }
        return Promise.reject(error);
    }
);




