import React from "react";

const VotingPage = () => {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h2>Voting Page</h2>
      </div>
      <div className="card-body">
        <p>Select a candidate to vote:</p>
        <div className="d-flex gap-3">
          <button className="btn btn-success">Candidate A</button>
          <button className="btn btn-primary">Candidate B</button>
          <button className="btn btn-danger">Candidate C</button>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
