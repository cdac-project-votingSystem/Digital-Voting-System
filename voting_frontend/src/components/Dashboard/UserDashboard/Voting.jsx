import React from "react";
// import bjplogo from "../../assests/partyLogo/"
// import logo from "../assests/partyLogo/ncp.jpg";
import logo from "../../../assests/partyLogo/ncp.jpg";

function Voting() {
  const candidates = [
    {
      candidateName: "Narendra Modi",
      party: "Bharatiya Janata Party",
      partyLogo: "/images/bjp.png",
    },
    {
      candidateName: "Rahul Gandhi",
      party: "Indian National Congress",
      partyLogo: "/images/congress.png",
    },
    {
      candidateName: "Arvind Kejriwal",
      party: "Aam Aadmi Party",
      partyLogo: "/images/aap.png",
    },
    {
      candidateName: "Mamata Banerjee",
      party: "All India Trinamool Congress",
      partyLogo: "/images/aitc.png",
    },
    {
      candidateName: "Akhilesh Yadav",
      party: "Samajwadi Party",
      partyLogo: "/images/sp.png",
    },
    {
      candidateName: "Mayawati",
      party: "Bahujan Samaj Party",
      partyLogo: "/images/bsp.png",
    },
  ];
  return (
    <div className="container">
      <br />
      <br />

      <h2 className="text-center p-3">Voting Page</h2>
      <div>
        <table class="table table-bordered text-center ">
          <thead>
            <tr>
              <th scope="col">Election Symbol</th>
              <th scope="col">Party</th>
              <th scope="col">Candidate Name</th>
              <th scope="col">Vote</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr className="align-middle">
                <td>
                  {" "}
                  <img src={logo} alt="" style={{ width: "100px" }} />
                </td>
                <td>{candidate.party}</td>
                <td>{candidate.candidateName}</td>
                <td>
                  <button className="btn btn-success">Vote</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Voting;
