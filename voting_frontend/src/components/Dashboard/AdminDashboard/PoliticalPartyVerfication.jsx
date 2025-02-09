import React, { useState, useEffect } from "react";
import Verification from "./Verification";
import { toast } from "react-toastify";
import { getValidParty } from "../../../API/Admin"; 

const PoliticalPartyVerification = () => {
  const [partyListToValidate, setPartyListToValidate] = useState([]);
 


  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      const res = await getValidParty();
      if (res.status === 200) {
        setPartyListToValidate(res.data); // Correctly update the state
      } else {
        toast.error("Failed to load parties.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching parties.");
    }
  };

  return (
    <div>
        
       <h3>Political Party Verification</h3>

      {partyListToValidate.length === 0 ? (
        <h2>No party to validate</h2>
      ) : (
        partyListToValidate.map((party) => (
          <Verification key={party.partyId} image={party.partyLogo} refreshData = {onLoad} id={party.partyId}
          > 
            <h5 className="card-title">{party.partyName} | {party.abbreviation}</h5>
            <p className="card-text">{party.partyDescription}</p>
          </Verification>
        ))
      )}
    </div>
  );
};

export default PoliticalPartyVerification;
