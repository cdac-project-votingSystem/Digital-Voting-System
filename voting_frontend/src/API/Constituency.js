import axios from "axios"
import { createUrl } from "../utils"
import axiosInstance from "./AxiosInstance";

export async function getAllConstituency(){
    try{
            const url = createUrl("constituency/viewAll") 
            const response = await axios.get (url);
            // const response = await axiosInstance.get("constituency/viewAll")
         return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}