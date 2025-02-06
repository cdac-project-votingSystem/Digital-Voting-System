import React from "react";
import { NavLink } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div className="container vh-100">
      <br />
      <ul className="nav nav-tabs flex-column">
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/user-info">
            User Information
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/vote">
            Voting Page
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/upcoming-elections">
            Upcoming Elections
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserNavbar;
