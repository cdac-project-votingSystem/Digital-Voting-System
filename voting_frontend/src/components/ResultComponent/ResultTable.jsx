import React from 'react';

function Result_table() {
  // Data for candidates and their votes
  const candidates = [
    { id: 1, name: "Candidate A", votes: 3000 },
    { id: 2, name: "Candidate B", votes: 4000 },
    { id: 3, name: "Candidate C", votes: 2500 },
    { id: 4, name: "Candidate D", votes: 3500 },
  ];

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Candidate</th>
            <th scope="col">Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <th scope="row">{candidate.id}</th>
              <td>{candidate.name}</td>
              <td>{candidate.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Result_table;
