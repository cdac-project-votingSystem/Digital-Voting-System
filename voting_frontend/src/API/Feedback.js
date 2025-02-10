import axios from "axios";
import { createUrl } from "../utils";

export async function submitFeedback(body){
    const path = createUrl("feedback");
    try{
        const response = await axios.post(path,body);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }

}

export async function getUnreadFeedback(){
    const path  = createUrl("feedback/allUnread")
    try{
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

export async function setRead(id){
    const path  = createUrl (`feedback/${id}`)
    try{
        const response = await axios.patch(path);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}

export async function setDelete(id){
    const path  = createUrl (`feedback/${id}`)
    try{
        const response = await axios.delete(path);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}