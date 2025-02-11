import React, { useEffect, useState } from "react";
import ResultPiechart from "./ResultPiechart";
import ResultBarchart from "./ResultBarchart";
import ResultTable from "./ResultTable";
import { toast } from "react-toastify";
import { getAllConstituency } from "../../API/Constituency";
import { resultFxn } from "../../API/Result";

function Result() {
  // State to store selected constituency
  const [constituencyList, setConstituencyList] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState(null);
  const [data, setData] = useState([]);

  // const onFind = () => {};
  const onLoadForm = async () => {
    try {
      const result = await getAllConstituency();
      if (result.status == "error") {
        toast.error(result.error);
      } else {
        setConstituencyList(result.data);
        // console.log(result.data);
      }
    } catch (error) {
      toast.error("try again");
      console.error("Error fetching constituencies:", error);
    }
  };

  const viewResult = async (cid) => {
    try {
      const res = await resultFxn(cid);
      setData(res.data);
      console.log(res.data);
    } catch (ex) {
      toast.error("try again");
    }
  };

  useEffect(() => {
    onLoadForm();
  }, []);

  // Handle change in constituency selection
  const handleConstituencyChange = (event) => {
    setSelectedConstituency(event.target.value);
  };

  return (
    
    <div className="container mt-5" id="result-container">
      <br />
      <br />

      {/* Dropdown to select constituency */}
      <div className="row">
        <div className="col-8">
          <div className="mb-3 ">
            <label htmlFor="constituencyId" className="form-label">
              Select Constituency
            </label>
            <select
              id="constituencyId"
              className="form-select"
              name="constituencyId"
              value={selectedConstituency}
              onChange={handleConstituencyChange}
            >
              <option value="">--Select Constituency--</option>
              {constituencyList.map((constituency) => (
                <option key={constituency.id} value={constituency.id}>
                  {constituency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-4 mt-3 ">
          <button
            className="btn ms-5 btn-success w-75"
            onClick={() => viewResult(selectedConstituency)}
          >
            View Result
          </button>
        </div>
      </div>

      <center>
        <div style={{ width: "80%", border: "1px solid gray" }}>
          <center>
            <h3 style={{ backgroundColor: "black", color: "white" }}>Result</h3>
            <h2
              style={{
           
                color: "black",
                padding: "10px",
              }}
            >
              <span style={{ color: "Blue" }}>
                {data.length > 0 ? data[0].candidateName: ""}
              </span>
              {data.length > 0
                ? " won the election with total votes " + data[0].voteGain
                : ""}
            </h2>
          </center>
        </div>
      </center>
      <br />

      <div>
        <div>
          <div className="card">
            <div className="card-header">Total Voter Stats</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <h3>
                  Total Voter Turnout:{" "}
                  {data.length > 0
                    ? (
                        (data[0].totalVoteCast /
                          data[0].constituencyTotalVotes) *
                        100
                      ).toFixed(2)
                    : 0}
                  %
                </h3>
                <h4>
                  Votes Cast: {data.length > 0 ? data[0].totalVoteCast : "N/A"}
                </h4>
                <h4>
                  Total Voters:{" "}
                  {data.length > 0 ? data[0].constituencyTotalVotes : "N/A"}
                </h4>
              </blockquote>
            </div>
          </div>
        </div>
      
      </div>
                      <br />
      <center> 
                      
          <h3 className="mt-5 mb-3">STATUS</h3>
      <ResultTable data={data} />
                      <br />
          <h3 className="mt-5 mb-3">GRAPHS</h3>
      <ResultPiechart Pdata={data}/>
      <ResultBarchart Pdata={data} />
        </center>
        <div className="flex">
        </div> 
          <br />
        <br />
        <br />
    </div>
  );
}

export default Result;
