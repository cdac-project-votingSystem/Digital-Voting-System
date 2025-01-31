import React, { useState } from "react";
import Header from "../Header";

const RegisterNewParty = () => {
  const [formData, setFormData] = useState({
    logo: null, 
    partyName: "",
    slogan: "",
    abbreviation: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "logo") {
      setFormData({
        ...formData,
        [name]: files[0], 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("logo", formData.logo);
    data.append("partyName", formData.partyName);
    data.append("slogan", formData.slogan);
    data.append("abbreviation", formData.abbreviation);
    data.append("about", formData.about);

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mt-5">
      <Header />
      <br /><br />
      <h1 className="text-center mb-4">Register New Party</h1>
      <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="logo" className="form-label">
            Logo:
          </label>
          <input
            type="file"
            id="logo"
            name="logo"
            accept="image/*"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="partyName" className="form-label">
            Party Name:
          </label>
          <input
            type="text"
            id="partyName"
            name="partyName"
            value={formData.partyName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="slogan" className="form-label">
            Slogan:
          </label>
          <input
            type="text"
            id="slogan"
            name="slogan"
            value={formData.slogan}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="abbreviation" className="form-label">
            Abbreviation:
          </label>
          <input
            type="text"
            id="abbreviation"
            name="abbreviation"
            value={formData.abbreviation}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="about" className="form-label">
            About:
          </label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="form-control"
            rows="4"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register Party
        </button>
      </form>
    </div>
  );
};

export default RegisterNewParty;
