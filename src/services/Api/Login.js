import mem from "mem";

import { apiConfig } from "./apiConfig";

const LoginFn = async () => {

    try {
  
      const response = await apiConfig.post("/api/Auth/login",  {
          username: "string",
          password: "string",
        });
      const session2 = response.data;
  
      if (!session2?.accessToken) {
        localStorage.removeItem("session");
  
      }
  
      localStorage.setItem("session", JSON.stringify(session2));
  
      return session2;
    } catch (error) {
      localStorage.removeItem("session");
  
      console.log(error)
    }
  };
  
  const maxAge = 59000;
  
  export const memoizedLogin = mem(LoginFn, {
    maxAge,
  });