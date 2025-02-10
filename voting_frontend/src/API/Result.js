import axios from "axios";
import { createUrl } from "../utils";

export async function resultFxn(cid){
    const path =  createUrl("result/"+cid);
    try {
        const response = await axios.get(path, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        return response;
      } catch (ex) {
        return { status: "error", error: ex };
      }
}