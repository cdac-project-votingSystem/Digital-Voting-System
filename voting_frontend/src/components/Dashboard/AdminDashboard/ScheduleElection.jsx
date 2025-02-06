import React, { useState } from "react";

const ScheduleElection = () => {
  // State to hold form data
  const [electionData, setElectionData] = useState({
    constituency: "",
    startDate: "",
    endDate: "",
  });

  // Sample data for constituencies
  const constituencies = [
    "Constituency 1",
    "Constituency 2",
    "Constituency 3",
    "Constituency 4",
    "Constituency 5",
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setElectionData({ ...electionData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the data to an API or save it in your database
    console.log("Election Scheduled:", electionData);

    // Reset form after submission
    setElectionData({
      constituency: "",
      startDate: "",
      endDate: "",
    });

    // Optionally, you could show a success message here
    alert("Election Scheduled Successfully!");
  };

  return (
    <div className="container">
      <h3 className="text-center my-4">Schedule an Election</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="constituency" className="form-label">
            Select Constituency
          </label>
          <select
            className="form-select"
            id="constituency"
            name="constituency"
            value={electionData.constituency}
            onChange={handleChange}
            required
          >
            <option value="">Select Constituency</option>
            {constituencies.map((constituency, index) => (
              <option key={index} value={constituency}>
                {constituency}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">
            Start Date & Time
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="startDate"
            name="startDate"
            value={electionData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">
            End Date & Time
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="endDate"
            name="endDate"
            value={electionData.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Schedule Election
        </button>
      </form>
    </div>
  );
};

export default ScheduleElection;
