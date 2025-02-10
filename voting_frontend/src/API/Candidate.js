import axios from "axios";
import axiosInstance from "./AxiosInstance";
import { createUrl } from "../utils";

export async function registerCandidate(form) {
  const formData = new FormData();
  formData.append("adhaarNumber", form.adhaarNumber);
  formData.append("politicalPartyId", form.politicalPartyId);
  formData.append("constituencyId", form.constituencyId);
  formData.append("image", form.image);

  try {
    const response = await axios.post(createUrl("candidates/add"), formData, {
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    });

    if (response) console.log("Candidate Registered:", response);
    
    return response;
  } catch (ex) {
    console.error("Error in registerCandidate:", ex);
    return {
      status: "error",
      error: ex,
    };
  }
}


export async function getAllValidCandidate(){
  try{
          const url = createUrl("candidates/getAllValidCandidate") 
          const response = await axios.get(url);
          return response;
  }
  catch(ex){
      return {
          status: 'error',
          error :ex
      }
  }
}

export async function getAllCandiateContituencyWise(uid){
  try{
    const url = createUrl("voters/vote/"+uid) 
    const response = await axios.get(url,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
}
catch(ex){
return {
    status: 'error',
    error :ex
}
}
}