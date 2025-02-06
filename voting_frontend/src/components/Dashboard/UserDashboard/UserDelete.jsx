import React from "react";

const UserDelete = () => {
  const handleDelete = () => {
    alert("Are you sure you want to delete your account?");
  };

  return (
    <button className="btn btn-danger mt-2" onClick={handleDelete}>
      Delete Account
    </button>
  );
};

export default UserDelete;
