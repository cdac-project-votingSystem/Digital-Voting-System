import React from 'react';

function Result_table({data}) {
 

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Candidate</th>
            <th scope="col">Candidata Image</th>
            <th scope="col">Party Name</th>
            <th scope="col">Party Logo</th>
            <th scope="col">Votes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((candidate,index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{candidate.candidateName}</td>
              <td><img src={candidate.image} alt="" /></td>
              <td>{candidate.partyName}</td>
              <td>{candidate.logo}</td>
              <td>{candidate.voteGain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Result_table;
