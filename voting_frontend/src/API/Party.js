import axios from "axios";
import { createUrl } from "../utils"
import axiosInstance from "./AxiosInstance";

export async function getAllParty () {
    try{
        const path = "politicalParty/viewAllValid"
        const response = await axiosInstance(path);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}