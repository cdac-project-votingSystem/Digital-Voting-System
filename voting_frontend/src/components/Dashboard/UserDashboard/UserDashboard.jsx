import React from 'react';
import UserNavbar from './UserNavbar';
import UserInfo from './UserInfo';
import VotingPage from './VotingPage';
import UpcomingElections from './UpcomingElections';

const UserDashboard = () => {
  return (
    <div className='container-fluid'>
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
        <div className="col-12 col-md-7 container" style={{ textAlign: "justify" }}>
          <UserInfo />
          <VotingPage />
          <UpcomingElections />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
