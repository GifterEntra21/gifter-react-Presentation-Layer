import { apiConfig } from "./apiConfig";

export const login = async () => apiConfig.post('/api/Auth/login', {
    "username": "string",
    "password": "string"
}).then(res => { 
    
   // JSON.parse(localStorage.getItem("r")).token
    localStorage.clear()
    localStorage.clear()
    
    localStorage.setItem("token",res.data.token)
    localStorage.setItem("refreshToken",res.data.refreshToken)

    return ("Logado")
}).catch(error => { return (error.data) })



export const refresh = async() => apiConfig.post('/api/Token/refresh',{

    "accessToken": localStorage.getItem("token"),
    "refreshToken": localStorage.getItem("refreshToken")
    

}).then(res =>{   

    localStorage.setItem("token",res.data.token)
    localStorage.setItem("refreshToken",res.data.refreshToken)
    return ("OK")
}).catch(error => {return (error.data)})

// export const GetGifts = async() => apiConfig.get('/GetGifts',{headers:{

    
// }})

export const GetUser = async() => apiConfig.get('/Users',{
    headers:{'Authorization': `bearer ${localStorage.getItem("token")}`}    
}).then(resp => {return(resp.data)}).catch(error => {return(error.data)})