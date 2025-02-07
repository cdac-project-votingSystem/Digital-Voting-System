import axios from "axios"
import { createUrl } from "../utils"

export async function getAllConstituency(){
    try{
        const url = createUrl("formHelper/constituency") 
         const response = await axios.get (url);
         return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}