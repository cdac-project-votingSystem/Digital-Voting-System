import React from 'react'
import AdminNavbarDashboard from './AdminNavbarDashboard';
import Verfication from './PoliticalPartyVerfication';
import { createBrowserRouter } from 'react-router-dom';

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
        <div className="col-12 col-md-7 container  lh-sm" style={{textAlign:"justify"}}>
        <Verfication/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashBoardHome
