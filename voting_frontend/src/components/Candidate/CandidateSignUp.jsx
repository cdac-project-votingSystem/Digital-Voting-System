import React, { useEffect, useState } from "react";
import { registerCandidate } from "../../API/Candidate";
import { getAllParty } from "../../API/Party";
import { getAllConstituency } from "../../API/Constituency";
import { toast } from "react-toastify";

const CandidateSignUp = () => {
  const [form, setForm] = useState({
    adhaarNumber: "",
    politicalPartyId: null,
    constituencyId: null,
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name == "image")
      setForm({ ...form, image: e.target.files[0] });
    else setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [partyList, setPartyList] = useState([]);
  const [constituencyList, setConstituencyList] = useState([]);

  const onLoad = async () => {
    const response = await getAllParty();
    setPartyList(response.data);

    const result = await getAllConstituency();
    setConstituencyList(result.data);
  };

  useEffect(() => {
    onLoad();
  }, []);

    const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const res = await registerCandidate(form);
        if(res.status == 201)
            toast.success("Candidate registered successfully! Wait for Admin Validation ");
        else
        toast.error("try again")
        setForm({ partyName: "", abbreviation: "", partyDescription: "", partyLogo: null });
    } catch (error) {
      toast.error("Failed to register candidate. Please check the backend.");
    }
    }   



  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
      
        <br />
        <br />
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

          <div className="mb-3">
            <label className="form-label">Political Party</label>

            <select
              name="politicalPartyId"
              value={form.politicalPartyId}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Select Political Party </option>
              {partyList.map((ele) => (
                <option key={ele.partyId} value={ele.partyId}>
                  {ele.partyName + " | " + ele.abbreviation}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Constituency Party</label>

            <select
              name="constituencyId"
              value={form.constituencyId}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Select constituency Party </option>
              {constituencyList.map((ele) => (
                <option key={ele.id} value={ele.id}>
                  {ele.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Candidate Image</label>
            <input
              type="file"
              className="form-control"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-25">
              Register Party
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateSignUp;
