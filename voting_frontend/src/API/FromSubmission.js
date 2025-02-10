import axios from "axios";
import { createUrl } from "../utils";
import axiosInstance from "./AxiosInstance";

export async function submitForm(formdata){
        const url = createUrl("signup")
        try{
            const response = await axios.post(url,formdata);
            return response;
        }
        catch(ex){
            return {
                status: 'error',
                error :ex
            }
        } 
}