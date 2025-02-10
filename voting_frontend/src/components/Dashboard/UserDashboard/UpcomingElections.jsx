import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUpcomingElection } from "../../../API/Election";

const UpcomingElections = () => {
  const [result, SetResult] = useState({
    electionStartTime: null,
    electionEndTime: null,
    cname: "Loading...",
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
        SetResult(res.data);
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
        <table className="table table-bordered text-center">
          <tbody>
            <tr>
              <th>Constituency</th>
              <td>{result.cname}</td>
            </tr>
            <tr>
              <th>Start</th>
              <td>
                {result.electionStartTime
                  ? new Date(result.electionStartTime).toLocaleString()
                  : "TBD"}
              </td>
            </tr>
            <tr>
              <th>End</th>
              <td>
                {result.electionEndTime
                  ? new Date(result.electionEndTime).toLocaleString()
                  : "TBD"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingElections;
