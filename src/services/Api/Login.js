import mem from "mem";

import { apiConfig } from "./apiConfig";

const LoginFn = async () => {

    try {
  
      const response = await apiConfig.post("/Auth/Login",  {
          username: "root2",
          password: "Y^#c8gxX#22g7Nh!@@qGM#44c",
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