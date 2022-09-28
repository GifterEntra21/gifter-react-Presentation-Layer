import { apiConfig } from "./apiConfig";

export const login = async () =>
  apiConfig
    .post("/api/Auth/login", {
      username: "string",
      password: "string",
    })
    .then(async (res) => {
      localStorage.clear();

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      return "Logado";
    })
    .catch((error) => {
      return error.data;
    });

export const refresh = async () =>
  apiConfig
    .post("/api/Token/refresh", {
      accessToken: localStorage.getItem("token"),
      refreshToken: localStorage.getItem("refreshToken"),
    })
    .then(async (res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      return "Atualizado";
    })
    .catch((error) => {
      return localStorage.clear();
    });


export const GetUser = async () => {

  try {
    const token = localStorage.getItem("token")

    const myConfig = {
      headers: {
        Authorization: `Bearer ${token}`
      },

      timeout: 150
    }
      try {
        const req = await apiConfig.get('/Users', myConfig);
        if (req.status < 201) {
          console.log(req.data);
        } else {
          console.log('tudo certo');
          GetUser()
        }
      } catch (error) {
        console.log('tudo mais que certo');
      }
  }
  catch (e) {
    console.log(e);
  }

  


}