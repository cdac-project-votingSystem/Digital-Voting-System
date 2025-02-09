import axios from "axios";
import { createUrl } from "../utils";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export async function userLogin(body){

    try{
        const path = createUrl("login");
        const response = await axios.post(path,body);
        console.log(response)
        return response;

        
        
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}