import React from "react";
import { toast } from "react-toastify";
import { partyToValidate } from "../../../API/Admin";

const Verification = ({ children, image, refreshData, id }) => {
  const validateParty = async (id) => {
    try {
      const res = await partyToValidate(id);
      console.log(res);
      if (res.status === 200) {
        toast.success("Validated");
        refreshData();
      } else {
        toast.error("Try again");
      }
    } catch (error) {
      toast.error("Error in validation");
    }
  };

  const invalidateParty = async (id) => {
    try {
      const res = await partyToValidate(id);
      if (res.status === 200) {
        toast.warning("Invalidated");
        refreshData();
      } else {
        toast.error("Try again");
      }
    } catch (error) {
      toast.error("Error in invalidation");
    }
  };

  return (
    <div>
      <div className="card my-3">
        <div className="card-body">
          <div className="row d-flex align-items-center">
            <div className="col-2">
              <img
                src={image}
                alt="Party Logo"
                className="img-fluid rounded"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <div className="col-6">{children}</div>
            <div className="col-4">
              <div className="d-flex gap-2">
                <button
                  onClick={() => validateParty(id)}
                  className="btn btn-success"
                  style={{ width: "50%" }}
                >
                  Accept
                </button>
                <button
                  onClick={() => invalidateParty(id)}
                  className="btn btn-danger"
                  style={{ width: "50%" }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
