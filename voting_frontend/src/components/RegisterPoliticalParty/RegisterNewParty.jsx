import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const RegisterPoliticalParty = () => {
  const [form, setForm] = useState({
    partyName: "",
    abbreviation: "",
    partyDescription: "",
    partyLogo: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "partyLogo") {
      setForm({ ...form, partyLogo: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append("partyName", form.partyName);
    formData.append("abbreviation", form.abbreviation);
    formData.append("partyDescription", form.partyDescription);
    formData.append("partyLogo", form.partyLogo);

    try {
      const response = await axios.post("http://localhost:8080/politicalParty/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(response);
      if(response.status == 201)
        toast.success("Political party registered successfully!");
      else
        toast.error("try again")
      setForm({ partyName: "", abbreviation: "", partyDescription: "", partyLogo: null });
    } catch (error) {
      toast.error("Failed to register party. Please check the backend.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <br /><br />
        <h2 className="text-center mb-4">Register Political Party</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Party Name */}
          <div className="mb-3">
            <label className="form-label">Party Name</label>
            <input
              type="text"
              className="form-control"
              name="partyName"
              placeholder="Enter Party Name"
              value={form.partyName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Abbreviation */}
          <div className="mb-3">
            <label className="form-label">Abbreviation</label>
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
          <div className="text-center ">
            <button type="submit" className="btn btn-primary w-25">
              Register Party
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPoliticalParty;





