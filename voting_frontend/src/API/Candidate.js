import axios from "axios";
import { createUrl } from "../utils";

export async function registerCandidate(form){
    const formData = new FormData();
    formData.append("adhaarNumber",form.adhaarNumber);
    formData.append("politicalPartyId",form.politicalPartyId);
    formData.append("constituencyId",form.constituencyId);
    formData.append("image",form.image);

    const path = createUrl("candidates/add");
 try{
    const response = await axios.post(path, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });


    console.log(response);

    return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
    
}