import React from "react";
import "../../HomeContent.css";
import { Link } from "react-router-dom";
const NewCandidateRegister = () => {
  return (
    <div className="container " id="outerDiv" style={{ backgroundColor: "#e6b160",color: 'black',textAlign: 'center' }}>
        <br />
        <br />
      <div className="row">
        <div className="col-6">
          Want to register <b>AS CANDIDATE </b>? Click Here
        </div>
        <div className="col-6">
          <Link to='/candidate-register'>
            <button className="btn btn-success">Register Candidate</button>
          </Link>
          <br />
          <br />  
        </div>
      </div>
    </div>
  );
};

export default NewCandidateRegister;