import axios from "axios";
import { createUrl } from "../utils";

export async function voteClick(vid,cid){
    const path  = createUrl("voters/"+vid+"/"+cid);
    try{
         const response = await axios.patch(path,{},{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
         return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        
}
    }   
}

export async function isVotedFxn(vid){
    const path  = createUrl("voters/hasVoted"+vid);
    try{
         const response = await axios.get(path,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
         return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        
}
    } 
}