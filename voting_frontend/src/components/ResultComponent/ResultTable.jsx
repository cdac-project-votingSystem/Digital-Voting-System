import React from 'react';

function ResultTable({data}) {
 

  return (
    <div>
      {/* {console.log(data)} */}
      <table className="table table-striped" style={{ tableLayout: "fixed", width: "100%" }}>
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
              <th scope="row">{index+1}</th>
              <td>{candidate.candidateName}</td>
              <td><img className="img-fluid" src={candidate.image} alt="" style={{width:"18%",height:"18%"}} /></td>
              <td>{candidate.partyName}</td>
              <td> <img className="img-fluid"  src={candidate.logo}alt="" style={{width:"18%",height:"18%"}}/> </td>
              <td>{candidate.voteGain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
