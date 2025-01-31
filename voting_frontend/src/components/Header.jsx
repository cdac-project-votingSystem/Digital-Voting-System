import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; 
import logo from "../assests/header/eci-logo.svg";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: '#004274', color: 'white' }}>
        <div className="container" style={{ fontSize: 18 }}>
          <Link className="nav-link" to="/" onClick={() => {}}>
            <img src={logo} alt="eci-logo" className="img-fluid" style={{ height: '50px', width: "auto" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/login') ? 'd-none' : ''}`} 
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/signup') ? 'd-none' : ''}`} 
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/result') ? 'd-none' : ''}`} 
                  to="/result"
                >
                  Result
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link 
                  className={`nav-link ${isActive('/search') ? 'd-none' : ''}`} 
                  to="/search"
                >
                  Advance Search 🔎
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
