import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
       name: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Login Form Data Submitted:", formData);
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <br /><br /><br />
      <div className="text-center my-4">
        <h1 className="display-4 mb-4">Login</h1>{" "}
      </div>
      <div className="container mt-3">
        {" "}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="card p-4 shadow">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br /><br />
    </div>
  );
};

export default Login;
