import React from "react";
import { NavLink } from 'react-router-dom';

const AdminNavbarDashboard = () => {
  return (
    <div className="container vh-100">
      <br />
      <ul className="nav nav-tabs flex-column text-align">
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/users">
            Political Party Validation
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/he">
            Candidate Validation
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/as">
            Add New Constituency
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/admin-dashboard">
            Schedule Election
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/admin">
            Publish Result
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbarDashboard;
