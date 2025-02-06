import React from "react";
import UserUpdate from "./UserUpdate";
import UserDelete from "./UserDelete";

const UserInfo = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>User Information</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            <img
              src="user-image.jpg"
              alt="User"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-9">
            <h5>Name: John Doe</h5>
            <p>Email: johndoe@example.com</p>
            <p>Age: 30</p>
            <UserUpdate />
            <UserDelete />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
