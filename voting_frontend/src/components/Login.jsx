import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import Header from "./Header";
import "./Login.css";
import { userLogin } from "../API/Login";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res= await userLogin(formData);
      console.log(res);
      
      if (res?.data?.token) {
        localStorage.setItem("token", res.data.token); 
      }

      const user = jwtDecode(res.data.token);
        if(user.authorities == "ROLE_VOTER"){
            navigate("/user-dashboard");
        }else if(user.authorities  == "ROLE_ADMIN"){
            navigate("/admin");
        }
    }
    catch(ex){
      toast.error("try again")
    }
  };

  return (
    <div className="login-page">
      {/* <Header /> */}
      <div className="login-container">
        <div className="login-header">
          <h1>Digital Voting System</h1>
          <h2>Login to Your Account</h2>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {/* Forgot Password Link Below Login Button */}
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
