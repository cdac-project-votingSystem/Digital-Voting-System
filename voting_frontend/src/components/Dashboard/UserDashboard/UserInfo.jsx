import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../Signup.css'
import { toast } from "react-toastify";
import { getAllConstituency } from "../../../API/Constituency";
import { getVoterInfo, updateVoter } from "../../../API/Vote";
import { jwtDecode } from "jwt-decode";
const UserInfo = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [constituencyList, setConstituencyList] = useState([]);

  const uid = jwtDecode(localStorage['token']).user_id;

  const onLoadForm = async () => {
    try {
      const result = await getAllConstituency();
      const res = await getVoterInfo(uid)
      if (result.status === "error" || res.status =="error") {
        toast.error(result.error);
      } else {
        setConstituencyList(result.data); 
        setFormData(res.data)
      }
    } catch (error) {
      console.error("Error fetching constituencies:", error);
      toast.error("Failed to load constituencies");
    }
  };
  

  useEffect(() => {
    onLoadForm();
  }, []);

  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{

      const res = await updateVoter(uid,{
        firstName: formData.firstName,
        lastName: formData.lastName,
        contactNumber: formData.contactNumber,
        dob: formData.dob,
        constituencyId: formData.constituencyId,
        adhaarNumber: formData.adhaarNumber
      });
      if(res.status == 200){
        toast.success("Info Updated");
        onLoadForm()}
        else{
          toast.error("try again");
        }
      }
      catch{
        toast.error("try again");
      }
  }
  return (
    <div className="signup-page">

    <div className="signup-container">
      <div className="signup-header">
        <h2>Voter Information</h2>
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
            readOnly
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
            readOnly
          />
        </div>

            <center>

        <button type="submit" className="btn btn-warning w-50">
          Update
        </button>
            </center>
      </form>
    </div>
  </div>
);
};

export default UserInfo;
