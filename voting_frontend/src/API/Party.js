import { createUrl } from "../utils"

export async function getAllParty () {
    try{
        const path = createUrl("politicalParty/viewAllValid")
        const response = await axios(path);
        return response;
    }
    catch(ex){
        return {
            status: 'error',
            error :ex
        }
    }
}