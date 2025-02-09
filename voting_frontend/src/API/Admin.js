import axios from "axios";
import { createUrl } from "../utils"

export async function addNewConstituency(data){

    const path = createUrl("admin/addConstituency");
    try{
    const response = await axios.post(path, data);
    return response;
    
    }catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }

}

export async function addElectionDate(data){

    const path = createUrl("admin/setElection");
    try{
        const response = await axios.post(path,data);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}


export async function getValidParty(){
    const path = createUrl("politicalParty/tovalidate");

    try{
        const response  = await axios.get(path);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}

export async function partyToValidate(id){
    const path  = createUrl("admin/validatePoliticalParty/valid/"+ id);

    try{
        const response = await axios.patch(path);   
        
        return response;
    } catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}

export async function partyToInvalidate(id){
    const path  = createUrl("admin/validatePoliticalParty/invalid/"+ id);

    try{
        const response = await axios.patch(path);   
        return response;
    } catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}

export async function candidateToValidate(id){
    const path  = createUrl("admin/validateCandidate/valid/"+ id);

    try{
        const response = await axios.patch(path);   
        return response;
    } catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}

export async function candidateToInValidate(id){
    const path  = createUrl("admin/invalidateCandidate/invalid/"+ id);

    try{
        const response = await axios.patch(path);   
        return response;
    } catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}

export async function getAllCandidateToValidate(){
    const path = createUrl("candidates/toValidate");
    
    try{
        const response  = await axios.get(path);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}