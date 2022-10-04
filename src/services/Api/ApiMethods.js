import { apiConfig } from "./apiConfig";

export const GetUser = async () => {
  try {
    const req = await apiConfig.get('/Users');
    if (req.status < 201) {
      return JSON.stringify(req.data)
    } else {
      console.log("tentando novamente")
      return GetUser()
    }
  } catch (error) {
    console.log("Error");
  }
}