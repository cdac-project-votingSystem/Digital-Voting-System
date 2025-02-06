import React from 'react'
import AdminNavbarDashboard from './AdminNavbarDashboard';
import Verfication from './PoliticalPartyVerfication';
import { Outlet } from 'react-router-dom';
import HomePage from '../../HomePageContainer/HomePage';
import PoliticalPartyVerfication from './PoliticalPartyVerfication';

const AdminDashBoardHome = () => {

  
  return (
    <div className='container-fluid'>
      <br />
      <br />
      <br />
      <center>
      <h1> Admin Dash Board</h1>
      <hr />
      </center>
      <div className="row">
        <div className="col-12 col-md-3 ms-2 bg-dark " >
               <AdminNavbarDashboard/>
        </div>
        <div className="col-12 col-md-8 container  lh-sm" style={{textAlign:"justify"}}>
        {/* <Verfication/> */}

          <Outlet />

        </div>
      </div>
    </div>
  )
}

export default AdminDashBoardHome
