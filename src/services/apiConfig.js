import axios from "axios";
import { login, refresh } from "./token"

//let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiTWFuYWdlciIsImV4cCI6MTY2Mzg5MTg4NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzAwOCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEifQ.H11VaAubKusxH02GD7X0yQlhFfSfvnd2QJfJlVAQgIE'

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




