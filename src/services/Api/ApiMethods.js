// import {useNavigate} from "react-router-dom";
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
    const req = await apiConfig.get('/Recommendation/RecommendGifts',{params:{request:profile}});
    if (req.status < 201) {
      return JSON.stringify(req)
    } else {      
      console.log("tentando novamente")      
      return GetGifts()
    }
  } catch (error) {
    console.log("cacth gifts");
  }

  
}

export const SetClicks = async (productID) => {
  try {
    const id = productID;
    const req = await apiConfig.post('/Product/ClickPlus',{request:id});
    if (req.status < 201) {
      return JSON.stringify(req.data)
    } else {
      console.log("tentando novamente")
      return SetClicks(productID)
    }
  } catch (error) {console.log(error);}

  
}
