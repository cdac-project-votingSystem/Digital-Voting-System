import React from "react";

const UpcomingElections = () => {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h2>Upcoming Elections</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            Election 1 - Date: 20th March 2025
          </li>
          <li className="list-group-item">
            Election 2 - Date: 15th April 2025
          </li>
          <li className="list-group-item">Election 3 - Date: 10th May 2025</li>
        </ul>
      </div>
    </div>
  );
};

export default UpcomingElections;
