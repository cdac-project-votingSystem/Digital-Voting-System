import React, { useState, useEffect } from "react";
import Partylogo from "../../src/assests/partyLogo/bjp.jpeg";
import ProfilePhoto from "../../src/assests/adminpage/profile.jpg";

const AdvanceSearch = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchParams, setSearchParams] = useState({
    constituency: "",
    politicalParty: "",
  });

  useEffect(() => {
    const candidateData = [
      {
        id: 1,
        partyName: "Party A",
        abbreviation: "PA",
        partyLogo: "https://via.placeholder.com/50",
        constituencyName: "Mumbai South",
        firstName: "John",
        lastName: "Doe",
        candidateImage: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        partyName: "Party B",
        abbreviation: "PB",
        partyLogo: "https://via.placeholder.com/50",
        constituencyName: "Delhi Central",
        firstName: "Jane",
        lastName: "Smith",
        candidateImage: "https://via.placeholder.com/100",
      },
    ];
    setCandidates(candidateData);
  }, []);

  const constituencies = [...new Set(candidates.map((c) => c.constituencyName))];
  const parties = [...new Set(candidates.map((c) => c.partyName))];

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log("Search criteria:", searchParams);
  };

  return (
    <div className="container">
      <br /><br /><br /><br />
      <h1 className="text-center text-primary">Advance Search</h1>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }} className="justify-content-center">
          <label style={{ fontWeight: "bold" }}>Constituency:</label>
          <select
            name="constituency"
            value={searchParams.constituency}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="">Select Constituency</option>
            {constituencies.map((constituency, index) => (
              <option key={index} value={constituency}>{constituency}</option>
            ))}
          </select>

          <label style={{ fontWeight: "bold" }}>Political Party:</label>
          <select
            name="politicalParty"
            value={searchParams.politicalParty}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="">Select Party</option>
            {parties.map((party, index) => (
              <option key={index} value={party}>{party}</option>
            ))}
          </select>

          <button
            onClick={handleSearch}
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Party Name</th>
              <th>Abbreviation</th>
              <th>Party Logo</th>
              <th>Constituency</th>
              <th>Candidate</th>
              <th>Candidate Image</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.partyName}</td>
                <td>{candidate.abbreviation}</td>
                <td className="text-center">
                  <img src={Partylogo} alt="Party Logo" width="50" />
                </td>
                <td>{candidate.constituencyName}</td>
                <td>{candidate.firstName} {candidate.lastName}</td>
                <td className="text-center">
                  <img src={ProfilePhoto} alt="Candidate" width="100" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvanceSearch;
