import React, { useState, useEffect } from "react";
import Partylogo from "../../src/assests/partyLogo/bjp.jpeg";
import ProfilePhoto from "../../src/assests/adminpage/profile.jpg";
import { AdvanceSearchFxn } from "../API/AdvanceSearch";
import { toast } from "react-toastify";
import { getAllConstituency } from "../API/Constituency";
import { getAllParty } from "../API/Party";

const AdvanceSearch = () => {
  
  const [advanceSearch,setAdvanceSearch] = useState([]);
  const [constituencyList, setConstituencyList] = useState([]);
  const [partyList,setPartyList] = useState([]);

  const onLoad = async()=>{
    try{
      const res1 = await getAllConstituency();
      if(res1.status == 200)
        setConstituencyList(res1.data);
      else
          toast.error("try again");
      const res2 = await getAllParty();
      if(res2.status ==  200)
          setPartyList(res2.data)
      else
          toast.error("try again");
    }
    catch(ex){
      toast.error("try again")
    }
  }
  const onSearch = async(pid,cid)=>{
    try{
      const res = await AdvanceSearchFxn(pid,cid);
      if(res.status == 200)
        setAdvanceSearch(res.data);
      else
      toast.error("try again")
    }
    catch(ex){
      toast.error("try again")

    }
  }

  useEffect(()=>{
    onLoad();
  },[])

  const [temp ,setTemp] = useState({
    pid:null,
    cid:null
  });

  const handleChange = (e) => {
   setTemp( {
    ...temp,
    [e.target.name] : e.target.value 
  })
  };


  return (
    <div className="container">
      <br /><br /><br /><br />
      <h1 className="text-center text-primary">Advance Search</h1>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }} className="justify-content-center">
          <label style={{ fontWeight: "bold" }}>Constituency:</label>
          <select
            name="cid"
            value={temp.cid}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="">Select Constituency</option>
            <option key={0} value={0}>Select All</option>
            {constituencyList.map((constituency) => (
              <option key={constituency.id} value={constituency.id}>{constituency.name}</option>
            ))}
          </select>

          <label style={{ fontWeight: "bold" }}>Political Party:</label>
          <select
            name="pid"
            value={temp.pid}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="">Select Party</option>
            <option key={0} value={0}>Select All</option>
            {partyList.map((party) => (
              <option key={party.partyId} value={party.partyId}>{party.partyName} | {party.abbreviation}</option>
            ))}
          </select>

          <button
            onClick={() => {onSearch(temp.pid,temp.cid)}}
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
        <table className="table table-striped table-bordered table-hover">
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
            { advanceSearch.length == 0? <><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </>: 
            
            advanceSearch.map((res) => (
              <tr >
                <td>{res.partyName}</td>
                <td>{res.abbreviation}</td>
                <td className="text-center">
                  <img src={res.partyLogo} alt="Party Logo" width="50" />
                </td>
                <td>{res.constituencyName}</td>
                <td>{res.firstName} {res.lastName}</td>
                <td className="text-center">
                  <img src={res.candidateImage} alt="Candidate" width="100" />
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
