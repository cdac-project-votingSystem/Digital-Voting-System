import React from "react";
import UserNavbar from "./UserNavbar";
import { Outlet , useLocation} from 'react-router-dom';
import UserInfo from "./UserInfo";
import VotingPage from "./Voting";
import UpcomingElections from "./UpcomingElections";

const UserDashboard = () => {

  const location = useLocation(); 
  return (
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <center>
        <h1>User Dashboard</h1>
        <hr />
      </center>
      <div className="row">
        <div className="col-12 col-md-3 bg-dark">
          <UserNavbar />
        </div>
        <div
          className="col-12 col-md-7 container"
          style={{ textAlign: "justify" }}
        >
          {/* <UserInfo />
          <VotingPage />
          <UpcomingElections /> */}
           {location.pathname === "/user-dashboard" ? <DefaultContent /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

const DefaultContent = () => {
  return (
    <div className="p-4 text-center">
      <h2>Welcome to the user Dashboard</h2>
      <p>Select an option from the sidebar to see user information , voting page and upcomming elections.</p>
    </div>
  );
};

export default UserDashboard;
