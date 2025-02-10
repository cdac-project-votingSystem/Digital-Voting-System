import React from "react";
import { NavLink } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div className="container vh-100">
      <br />
      <ul className="nav nav-tabs flex-column">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
            to="/user-dashboard/voterInfo"
          >
            User Information
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
            to="/user-dashboard/voting"
          >
            Voting Page
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
            to="/user-dashboard/upcoming-elections"
          >
            Upcoming Elections
          </NavLink>
        </li>
        <br />
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
            to="/user-dashboard/candidateStatus"
          >
            candidate verification Status
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserNavbar;
