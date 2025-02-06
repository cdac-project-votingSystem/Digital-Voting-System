import React, { useState } from 'react';
import ResultPiechart from './ResultPiechart';
import ResultBarchart from './ResultBarchart';
import ResultTable from './ResultTable';

function Result() {
  // State to store selected constituency
  const [selectedConstituency, setSelectedConstituency] = useState("");

  // Sample constituencies (replace with your actual data)
  const constituencies = [
    { id: 1, name: "Constituency 1" },
    { id: 2, name: "Constituency 2" },
    { id: 3, name: "Constituency 3" },
  ];

  // Handle change in constituency selection
  const handleConstituencyChange = (event) => {
    setSelectedConstituency(event.target.value);
  };

  return (
    <div className='container mt-5' id='result-container'>
      <br />
      <br />

      
      {/* Dropdown to select constituency */}
      <div className="mb-3">
        <label htmlFor="constituencySelect" className="form-label">
          Select Constituency
        </label>
        <select
          id="constituencySelect"
          className="form-select"
          value={selectedConstituency}
          onChange={handleConstituencyChange}
        >
          <option value="">--Select Constituency--</option>
          {constituencies.map((constituency) => (
            <option key={constituency.id} value={constituency.name}>
              {constituency.name}
            </option>
          ))}
        </select>
      </div>


      <center>
        <div style={{ width: "1000px", border: "1px solid gray" }}>
          <center>
            <h3 style={{ backgroundColor: "lightblue" }}>Result</h3>
            <p>Candidate 2 won by 2000 votes</p>
          </center>
        </div>
      </center>
      <br />

      <center>
        <h3 className='mt-5 mb-3'>STATUS</h3>
      </center>
      <ResultTable />
      <center>
        <h3 className='mt-5 mb-3'>GRAPHS</h3>
      </center>
      <div className='flex'>
        <ResultPiechart />
        <ResultBarchart />
      </div>
    </div>
  );
}

export default Result;
