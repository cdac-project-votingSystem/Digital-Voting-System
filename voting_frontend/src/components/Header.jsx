import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import logo from "../assests/header/eci-logo.svg";

const Header = () => {
  const [activeLink,setActiveLink] = useState("Home");
  
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg " data-bs-theme="dark" style={{backgroundColor: '#004274',color:'white'}}>
        <div className="container" style={{fontSize : 18}} >
          <Link className= {`nav-link`} 
                onClick={()=>{
                    setActiveLink('Home')
                }} to="/">
            <img src={logo} alt="eci-logo" className="img-fluid" style={{ height:   '50px' , width: "auto" }} />
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
            <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
                <Link className= {`nav-link ${activeLink == 'Login' ?'d-none': '' }`} 
                onClick={()=>{
                    setActiveLink('Login')
                }}
      
                to="/login">
                Login
                {/* <span className="ms-2">|</span> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link className= {`nav-link ${activeLink == 'Signup' ?'d-none': ""}`} 
                onClick={()=>{
                    setActiveLink('Signup')
                }}
                to="/signup">
               Signup
               {/* <span className="ms-2">|</span> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link className= {`nav-link ${activeLink == 'Translate' ?'d-none': '' }`} 
                onClick={()=>{
                    setActiveLink('Translate')
                }} to="/">
               Translate
                {/* <span className="ms-2">|</span> */}
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className= {`nav-link ${activeLink == 'AdvanceSearch' ?'d-none': '' }`} 
                onClick={()=>{
                    setActiveLink('AdvanceSearch')
                }}
                to="/search">
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
