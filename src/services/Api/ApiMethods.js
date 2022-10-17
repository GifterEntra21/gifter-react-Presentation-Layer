import { apiConfig } from "./apiConfig";

export const GetAllGifts = async () => {
  try {
    const req = await apiConfig.get('/Product/AllProducts');
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
    const req = await apiConfig.get('/Recommendation/RecommendGifts',{params:{request :profile}});
    if (req.status < 201) {
      return JSON.stringify(req.data)
    } else {
      console.log("tentando novamente")
      return GetGifts()
    }
  } catch (error) {console.log(error);}

  
}

export const SetClicks = async (productID) => {
  try {
    const req = await apiConfig.post('/Product/ClickPlus',{productID});
    if (req.status < 201) {
      console.log(JSON.stringify(req.data))
      return JSON.stringify(req.data)
    } else {
      console.log("tentando novamente")
      return SetClicks(productID)
    }
  } catch (error) {console.log(error);}

  
}