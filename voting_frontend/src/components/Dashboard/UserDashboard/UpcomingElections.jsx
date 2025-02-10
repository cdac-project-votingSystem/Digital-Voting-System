import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUpcomingElection } from "../../../API/Election";

const UpcomingElections = () => {
  const [result, SetResult] = useState({
    electionStartTime: null,
    electionEndTime: null,
    cname: "Loading..."
  });

  const onLoad = async () => {
    const uid = jwtDecode(localStorage["token"]).user_id;
    console.log(uid);
    try {
      const res = await getUpcomingElection(uid);
      console.log(res);
      if (res.status === 200) {
        // SetResult(prevResult => ({
        //   ...prevResult,
        //   electionStartTime: res.data.message.electionStartTime,
        //   electionEndTime: res.data.message.electionEndTime,
        //   cname: res.data.message.cname
        // }));
        SetResult(res.data.message);
      } else {
        toast.error("Try again");
      }
    } catch (ex) {
      toast.error("Try again");
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="card mt-3">
      <div className="card-header">
        <h2>Upcoming Elections</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <h2>{result.cname}</h2>
            <h2>Start - {result.electionStartTime ? new Date(result.electionStartTime).toLocaleString() : "TBD"}</h2>
            <h2>End - {result.electionEndTime ? new Date(result.electionEndTime).toLocaleString() : "TBD"}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpcomingElections;

