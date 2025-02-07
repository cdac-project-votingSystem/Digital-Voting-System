import React from 'react'
import AdminNavbarDashboard from './AdminNavbarDashboard';
import Verfication from './PoliticalPartyVerfication';
import { Outlet , useLocation} from 'react-router-dom';
import HomePage from '../../HomePageContainer/HomePage';
import PoliticalPartyVerfication from './PoliticalPartyVerfication';

const AdminDashBoardHome = () => {

  const location = useLocation(); 

  
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

        {location.pathname === "/admin" ? <DefaultContent /> : <Outlet />}
        </div>
      </div>
    </div>
  )
}


const DefaultContent = () => {
  return (
    <div className="p-4 text-center">
      <h2>Welcome to the Admin Dashboard</h2>
      <p>Select an option from the sidebar to manage elections, parties, and users.</p>
    </div>
  );
};

export default AdminDashBoardHome
