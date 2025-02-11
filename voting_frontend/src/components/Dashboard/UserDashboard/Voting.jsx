import React, { useEffect, useRef, useState } from "react";
import { getAllCandiateContituencyWise, getAllValidCandidate } from "../../../API/Candidate";
import { toast } from "react-toastify";
import { isVotedFxn, voteClick } from "../../../API/Vote";
import { jwtDecode } from "jwt-decode";
import { getUpcomingElection } from "../../../API/Election";

function Voting() {
  const [candidateList, setCandidateList] = useState([]);
  const [isVoted, setIsVoted] = useState(false);
  const [electionDate ,setElectionDate ] = useState("");
  // const [currTime,setCurrTime] = useState("")
  const refId = useRef(null) 
  const onLoad = async () => {
    try {
      const token = localStorage["token"];
      const obj = jwtDecode(token);
      const vid = obj.user_id;
      const res = await getAllCandiateContituencyWise(vid);
      const res2 = await isVotedFxn(vid);
      const res3 = await getUpcomingElection(vid)
      if (res.status === 200) {
        // console.log(res)
        setCandidateList(res.data);
      }

      if (res2.status == 200) {
        // console.log(res2);
          setIsVoted(res2.data.hasVoted)
      }
      if (res3.status == 200) {
        // console.log(res3.data.electionEndTime);
        console.log(res3.data)
          setElectionDate(res3.data)
      }
    } catch (ex) {
      toast.error("Try again");
    }
  };

  const onVote = async (cid) => {
    try {
      const token = localStorage["token"];
      const obj = jwtDecode(token);
      const vid = obj.user_id;
      const res = await voteClick(vid, cid);

      if (res.status === 200) {
        toast.success("Voted successfully!");
        onLoad();
      } else {
        toast.error("Try again");
      }
    } catch (error) {
      toast.error("An error occurred while voting.");
    }
  };


  function getISTDateTime() {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 330); // Convert UTC to IST (+5:30)
    return date.toISOString().slice(0, 19).replace("T", "T");
}

// const setTime = ()=>{
//   setCurrTime(getISTDateTime())
// }
// console.log(getISTDateTime());

  useEffect(() => {
    onLoad();
    return ()=>{
      handleClearInterval()
    }
  }, []);

if(refId.current == null){

   refId.current = setInterval(()=>{
    onLoad();
 
  },5000)
 
};
const handleClearInterval = () => {
  if (refId.current !== null) {
      clearInterval(refId.current);
      refId.current = null;
  }

}
  return (
    <div className="container">
      <br />
      <br />
      <h2 className="text-center p-3">Voting Page</h2>
      <div> 
{console.log("electionDate.electionEndTime:"  ,electionDate.electionEndTime,"now:",getISTDateTime())}
            {electionDate.electionEndTime >= getISTDateTime()&& 
          electionDate.electionStartTime <= getISTDateTime() ?
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Candidate Image</th>
              <th scope="col">Candidate Name</th>
              <th scope="col">Party Name</th>
              <th scope="col">Party Logo</th>
              <th scope="col">Vote</th>
            </tr>
          </thead>
          <tbody>
          {console.log(electionDate.electionEndTime)}
          {console.log(new Date().toISOString().slice(0, 19))}
            
            {
            isVoted ? (
              <tr>
                <td colSpan="5">
                  <h2>Already Voted</h2>
                </td>
              </tr>
            ) : candidateList.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <h2>No Candidate Available</h2>
                </td>
              </tr>
            ) : (
              candidateList.map((candidate) => (
                <tr className="align-middle" key={candidate.id}>
                  <td>
                    <img
                      src={candidate.image}
                      alt="Candidate"
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>
                    {candidate.name}
                  </td>
                  <td>
                    {candidate.partyName}
                  </td>
                  <td>
                    <img
                      src={candidate.logo}
                      alt="Party Logo"
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => onVote(candidate.id)}
                      className="btn btn-success"
                    >
                      Vote
                    </button>
                  </td>
                </tr>
              ))
            ) }
          </tbody>
        </table>
    :
     <h2>
  { refId.current !== null ? handleClearInterval() : ""}

      No Election For your Constituency at current time</h2> }
      </div>
    </div>
  );
}

export default Voting;

