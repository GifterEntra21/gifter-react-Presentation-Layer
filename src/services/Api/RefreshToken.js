import mem from "mem";

import { apiConfig } from "./apiConfig";

const refreshTokenFn = async () => {
  const session = JSON.parse(localStorage.getItem("session"));
  try {
    const response = await apiConfig.post("/api/Token/refresh", {
      refreshToken: session?.refreshToken,
      accessToken: session?.accessToken
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

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});


