import { apiConfig } from "./apiConfig";

export const login = async () => apiConfig.post('/api/Auth/login', {
    "username": "string",
    "password": "string"
}).then(async (res) => {

    localStorage.clear()


    localStorage.setItem("token", res.data.token)
    localStorage.setItem("refreshToken", res.data.refreshToken)

    return ("Logado")
}).catch(error => { return (error.data) })



export const refresh = async () => apiConfig.post('/api/Token/refresh', {

    "accessToken": localStorage.getItem("token"),
    "refreshToken": localStorage.getItem("refreshToken")


}).then(async (res) => {

    localStorage.setItem("token", res.data.token)
    localStorage.setItem("refreshToken", res.data.refreshToken)
    return ("OK")
}).catch(error => { return (localStorage.clear()) })



export const GetUser = async () => apiConfig.get('/Users', {
    headers: { 'Authorization': `bearer ${localStorage.getItem("token")}` }
}).then(resp => {

    return (resp.data)
}
).catch( function (error) {
    return (JSON.stringify(error));

})