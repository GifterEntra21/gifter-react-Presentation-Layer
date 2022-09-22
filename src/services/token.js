import { apiConfig } from "./apiConfig";

export const login = async () => apiConfig.post('/api/Auth/login', {
    "username": "string",
    "password": "string"
}).then(res => { return res.data })
    .catch(error => { return (error.data) })