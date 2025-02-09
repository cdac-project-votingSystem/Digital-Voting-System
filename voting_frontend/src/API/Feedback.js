import axios from "axios";
import { createUrl } from "../utils";
import axiosInstance from "./AxiosInstance";

export async function submitFeedback(body){
    const path = "feedback"
    try{
        const response = await axiosInstance.post(path,body);
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
    const path  = "feedback/allUnread"
    try{
        const response = await axiosInstance.get(path);
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
    const path  = `feedback/"+${id}`
    try{
        const response = await axiosInstance.patch(path);
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
    const path  = `feedback/"+${id}`
    try{
        const response = await axiosInstance.delete(path);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}