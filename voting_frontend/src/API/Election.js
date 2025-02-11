import axios from "axios";
import { createUrl } from "../utils";

export async function getUpcomingElection(cid) {
    try{
    const response = await axios.get(createUrl("election/election/"+cid),  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response)
      return response;
    } catch (ex) {
      return { status: "error", error: ex };
    }
}
