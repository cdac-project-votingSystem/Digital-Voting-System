import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addElectionDate} from "../../../API/Admin"; // Make sure this function exists
import { getAllConstituency } from "../../../API/Constituency";

const ScheduleElection = () => {
  // State to hold form data
  const [electionData, setElectionData] = useState({
    constituencyId: "",
    electionStartTime: "",
    electionEndTime: "",
  });

  const [constituencyList, setConstituencyList] = useState([]);

  // Load Constituencies
  useEffect(() => {
    const onLoad = async () => {
      try {
        const result = await getAllConstituency();
        setConstituencyList(result.data);
      } catch (error) {
        toast.error("Failed to load constituencies");
      }
    };

    onLoad();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setElectionData({ ...electionData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(electionData)
    try {
      const res = await addElectionDate(electionData);
      if (res.status === 201) {
        toast.success(res.data.message);
      } else {
        toast.info(res.data.message);
      }
    } catch (ex) {
      toast.error("Try again");
    }

    // Reset form after submission
    setElectionData({
      constituencyId: "",
      electionStartTime: "",
      electionEndTime: "",
    });
  };

  return (
    <div className="container">
      <h3 className="text-center my-4">Schedule an Election</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="constituencyId" className="form-label">
            Select Constituency
          </label>
          <select
            className="form-select"
            id="constituencyId"
            name="constituencyId"
            value={electionData.constituencyId}
            onChange={handleChange}
            required
          >
            <option value="">Select Constituency</option>
            {constituencyList.map((constituency, index) => (
              <option key={index} value={constituency.id}>
                {constituency.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="electionStartTime" className="form-label">
            Start Date & Time
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="electionStartTime"
            name="electionStartTime"
            value={electionData.electionStartTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="electionEndTime" className="form-label">
            End Date & Time
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="electionEndTime"
            name="electionEndTime"
            value={electionData.electionEndTime}
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
