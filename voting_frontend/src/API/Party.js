import axios from "axios";
import { createUrl } from "../utils"
import axiosInstance from "./AxiosInstance";

export async function getAllParty () {
    try{
        const path = createUrl("politicalParty/viewAllValid");
        const response = await axios.get(path);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}