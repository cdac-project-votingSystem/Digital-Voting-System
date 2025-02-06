import React from "react";
import { NavLink } from 'react-router-dom';
import Feedback from './../../Feedback/Feedback';

const AdminNavbarDashboard = () => {
  return (
    <div className="container vh-100">
      <br />
      <ul className="nav nav-tabs flex-column text-align">

        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/admin/party_validation">
            Political Party Validation
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/admin/candidate_validation">
            Candidate Validation
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/admin/add_consitituency">
            Add New Constituency
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/admin/schedule_elections">
            Schedule Election
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/admin/view_feedback">
            View Feedback
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbarDashboard;
