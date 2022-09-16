import axios from "axios";
api.defaults.headers.authorization = `Bearer ${token}`;

const api = axios.create({
  baseURL: "https://localhost:7008",
});

api.interceptors.request.use(async config => {
    const token = `Bearer ${token}`;
  
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  
    return config;
});

export default api;