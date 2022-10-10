import { apiConfig } from "./apiConfig";

export const GetAllGifts = async () => {
  try {
    const req = await apiConfig.get('/AllGifts');
    if (req.status < 201) {
      return JSON.stringify(req.data)
    } else {
      console.log("tentando novamente")
      return GetAllGifts()
    }
  } catch (error) {
    console.log("Error");
  }
}
export const GetGifts = async (profile) => {
  try {
    const req = await apiConfig.get('/Recommendation/RecommendGifts',{params:{request : profile}});
    if (req.status < 201) {
      return JSON.stringify(req.data)
    } else {
      console.log("tentando novamente")
      return GetAllGifts()
    }
  } catch (error) {
    console.log("Error");
  }

  
}