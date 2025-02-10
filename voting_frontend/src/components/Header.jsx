import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"; 
import logo from "../assests/header/eci-logo.svg";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); 
  };

  const handleLogout = () => {
    setDropdownOpen(false);
  };

  const navigate = useNavigate();

  const invalidate = ()=>{ 
    delete localStorage['token']
    navigate('/')
   }

   const navigateDashboard = ()=>{
    const auth = jwtDecode(localStorage['token']).authorities;
    if(auth == "ROLE_ADMIN")
        navigate('/admin')
    else
      navigate('/user-dashboard')
   }

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
              {
            localStorage['token'] == undefined ? "":
                <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                  >
                  Hi, {jwtDecode(localStorage['token']).user_name}
                </span>
                {isDropdownOpen && (
                  <ul className="dropdown-menu show" aria-labelledby="navbarDropdown">
                    {/* <li>
                      <Link className="dropdown-item" to="/update-profile">
                        Update Profile
                      </Link>
                    </li> */}
                    <li className="text-center">
                      <button className="dropdown-item" onClick={handleLogout}>
                       <button className="btn btn-info " onClick={navigateDashboard} > Dashbaord </button>
                       
                      </button>
                    </li>
                    <li className="text-center">
                      <button className="dropdown-item" onClick={handleLogout}>
                       <button className="btn btn-danger " onClick={invalidate} > Logout</button>
                       
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              }
              <li className="nav-item">
               {
                localStorage['token']!= undefined ? "":
                <Link 
                  className={`nav-link ${isActive('/login') ? 'd-none' : ''}`} 
                  to="/login"
                >
                  Login
                </Link>
               } 
              </li>
                {
                localStorage['token']!= undefined ? "":
                <li className="nav-item">
                  <Link 
                  className={`nav-link ${isActive('/signup') ? 'd-none' : ''}`} 
                  to="/signup"
                  >
                  Signup
                </Link>
              </li>
              }
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
                  to="/advance-search"
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
