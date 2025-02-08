import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Signup.css";
import { getAllConstituency } from "../API/Constituency";
import { toast } from "react-toastify";
// import { toast } from 'react-toastify'
import { Label } from "./../../node_modules/recharts/es6/component/Label";
import { submitForm } from "../API/FromSubmission";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "", //OK
    lastName: "", //OK
    email: "", // ok
    password: "", //ok
    dob: "", //ok
    contactNumber: "", //ok
    constituencyId: null,
    adhaarNumber: "", //ok
  });
  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [constituencyList, setConstituencyList] = useState([]);


  const onLoadForm = async () => {
    try {
      const result = await getAllConstituency();
      
      if (result.status === "error") {
        toast.error(result.error);
      } else {
        setConstituencyList(result.data); 
      }
    } catch (error) {
      console.error("Error fetching constituencies:", error);
      toast.error("Failed to load constituencies");
    }
  };
  

  useEffect(() => {
    onLoadForm();
  }, []);

  const validateForm =() =>{
    if(confirmPassword == formData.password)
        return true;
    else 
        return false;

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log("Signup Form Data Submitted:", formData);
      const res = await submitForm(formData);
      console.log(res)
      if(res.status == 'error')
      {
          console.log("from 400")
          Object.values(res.error.response.data).forEach((value)=>{
          toast.error(value);
        })
      }
      else{
       toast.success(res.data.message) ;
       setTimeout(() => {
        navigate("/login"); 
      }, 4000);
      }
      //logic after backend code
    } else {
      toast.error("password and confirm password doesnot match")
    }
  };

  return (
    <div className="signup-page">
      <br />
      <br />
      <br />
      <br />
      <Header />
      <div className="signup-container">
        <div className="signup-header">
          <h1>Digital Voting System</h1>
          <h2>Voter Registration</h2>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
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

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              className="form-control"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="form-group">
          <label htmlFor="Constituency">Contituency</label>

            <select
              id="Constituency"
              name="constituencyId"
              value={formData.constituencyId}
              onChange={handleChange}
               className="form-control"
            >
              <option value="">Select Constituency</option>
              {constituencyList.map((ele) => (
                <option key={ele.id} value={ele.id}>
                  {ele.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Contact Number</label>
            <input
              type="value"
              id="phoneNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your Contact Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="adhaarNumber">Aadhaar Number</label>
            <input
              type="text"
              id="adhaarNumber"
              name="adhaarNumber"
              value={formData.adhaarNumber}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your Aadhaar number"
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
