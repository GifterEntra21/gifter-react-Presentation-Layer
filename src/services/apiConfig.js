import axios from "axios";
// import {login} from "./token"
//let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiTWFuYWdlciIsImV4cCI6MTY2Mzg5MTg4NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzAwOCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEifQ.H11VaAubKusxH02GD7X0yQlhFfSfvnd2QJfJlVAQgIE'

export const apiConfig = axios.create({
    baseURL: "https://localhost:7008",
});

//apiConfig.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }

// apiConfig.interceptors.response.use(function (config) {
//     login()
    
//     return config;

    
// })