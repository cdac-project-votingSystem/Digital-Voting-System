import axios from "axios";
import { createUrl } from "../utils";

export async function AdvanceSearchFxn(pid,cid){
    const path = createUrl("advanceSearch/"+pid+"/"+cid);
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