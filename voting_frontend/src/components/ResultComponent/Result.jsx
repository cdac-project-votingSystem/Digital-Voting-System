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
    const [data,setData] = useState([]);
    const onLoadForm = async () => {
      try {
        const result = await getAllConstituency();
        if (result.status == "error") {
          toast.error(result.error);
        } else {
          setConstituencyList(result.data);
        }
      } catch (error) {
        toast.error("try again");
        console.error("Error fetching constituencies:", error);
      }
    };

    const viewResult = async (cid)=>{
      try{
        const res = await resultFxn(cid);
        setData(res.data)

      }catch(ex){
        toast.error("try again")
      }
    }

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
        <div className="mb-3">
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
          <button className="btn btn-primary" onClick={() => viewResult(selectedConstituency)}>
            View Result
            </button>

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

        <div>
          <div>
            <div className="card">
              <div className="card-header">Total Voter Stats</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <h3>
                    Total Voter Turnout:{" "}
                    {constituencyList.length > 0 &&
                    constituencyList[0].totalVoters > 0
                      ? (
                          (constituencyList[0].votesCast /
                            constituencyList[0].totalVoters) *
                          100
                        ).toFixed(2)
                      : 0}
                    %
                  </h3>
                  <h4>
                    Votes Cast:{" "}
                    {constituencyList.length > 0
                      ? constituencyList[0].votesCast
                      : "N/A"}
                  </h4>
                  <h4>
                    Total Voters:{" "}
                    {constituencyList.length > 0
                      ? constituencyList[0].totalVoters
                      : "N/A"}
                  </h4>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <center>
          <h3 className="mt-5 mb-3">STATUS</h3>
        </center>
        <ResultTable data={data} />
        <center>
          <h3 className="mt-5 mb-3">GRAPHS</h3>
        </center>
        <div className="flex">
          <ResultPiechart Pdata={data}/>
          <ResultBarchart Pdata={data} />
        </div>
      </div>
    );
  }

  export default Result;
