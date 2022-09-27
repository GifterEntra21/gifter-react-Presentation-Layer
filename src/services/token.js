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
var CanRetry;
export const GetUser = async () => {


  try {
    const token = localStorage.getItem("token")
    // amount of retries we're willing to do
    const myConfig = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      // we're willing to wait 50ms, servers still hate you
      timeout: 150
    }
      try {
        const req = await apiConfig.get('/Users', myConfig);
        if (req.status < 201) {
          console.log(req.data);
        } else {
          console.log('cannot fetch data');
          GetUser()
        }
      } catch (error) {
        console.log('cannot fetch data');
      }
  }
  catch (e) {
    console.log(e);
  }

  


}