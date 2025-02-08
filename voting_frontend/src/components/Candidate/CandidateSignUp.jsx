import React, { useState } from 'react'

const CandidateSignUp = () => {

    const[form,setForm] = useState({
        adhaarNumber:"",
        politicalPartyId: null,
        constituencyId: null,
        image:null
    });

    const handleChange =(e)=>{
        if(e.target.name == 'image')
            setForm({...form,image: e.target.files[0]})
        else
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    let partyList;
    

  return (
    <div className="container mt-5">
    <div className="card shadow-lg p-4">
      <br /><br /><br /><br />
      <h2 className="text-center mb-4">Candidate Sign Up</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Party Name */}
        <div className="mb-3">
          <label className="form-label">Adhaar Number</label>
          <input
            type="text"
            className="form-control"
            name="adhaarNumber"
            placeholder="Enter Adhaar Number"
            value={form.adhaarNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Abbreviation */}
        <div className="mb-3">
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            name="abbreviation"
            placeholder="Enter Abbreviation"
            value={form.abbreviation}
            onChange={handleChange}
            required
          />
        </div>

        {/* Party Description */}
        <div className="mb-3">
          <label className="form-label">Party Description</label>
          <textarea
            className="form-control"
            name="partyDescription"
            rows="3"
            placeholder="Enter Party Description"
            value={form.partyDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label className="form-label">Party Logo</label>
          <input
            type="file"
            className="form-control"
            name="partyLogo"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-100">
            Register Party
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default CandidateSignUp
