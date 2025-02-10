import React, { useEffect, useState } from "react";
import { getAllValidCandidate } from "../../../API/Candidate";
import { toast } from "react-toastify";
import { isVotedFxn, voteClick } from "../../../API/Vote";
import { jwtDecode } from "jwt-decode";

function Voting() {
  const [candidateList, setCandidateList] = useState([]);
  const [isVoted, setIsVoted] = useState(false);

  const onLoad = async () => {
    try {
      const res = await getAllValidCandidate();
      const token = localStorage["token"];
      const obj = jwtDecode(token);
      const vid = obj.user_id;
      const res2 = await isVotedFxn(vid);

      if (res.status === 200) {
        setCandidateList(res.data);
      }

      if (res2?.data?.message?.hasVoted) {
        setIsVoted(true);
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

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="container">
      <br />
      <br />
      <h2 className="text-center p-3">Voting Page</h2>
      <div>
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
            {isVoted ? (
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
                      src={candidate.candidateImage}
                      alt="Candidate"
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>
                    {candidate.firstName} {candidate.lastName}
                  </td>
                  <td>
                    {candidate.partyName} ({candidate.abbreviation})
                  </td>
                  <td>
                    <img
                      src={candidate.partyLogo}
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
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Voting;

