import React from "react";
import "../../HomeContent.css";
import { Link } from "react-router-dom";
const NewPartyRegisterBtn = () => {
  return (
    <div className="container " id="outerDiv" style={{ backgroundColor: "pink",color: 'black',textAlign: 'center' }}>
        <br />
        <br />
      <div className="row">
        <div className="col-6">
          Want to register <b>YOUR POLITICAL PARTY</b>? Click Here
        </div>
        <div className="col-6">
          <Link to='/registerPoliticalParty'>
            <button className="btn btn-success">Register Political Party</button>
          </Link>
          <br />
          <br />  
        </div>
      </div>
    </div>
  );
};

export default NewPartyRegisterBtn;
