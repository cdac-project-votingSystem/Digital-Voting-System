import React from 'react'

const Verification = ({ children, image }) => {
  return (

    <div>

      <div class="card my-3">
        <div class="card-body ">
          <div className="row d-flex align-items-center">
            <div className="col-2">
            <img
                src={image}
                alt="Party Logo"
                className="img-fluid rounded"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <div className="col-6">
              {children}
            </div>
            <div className="col-4 ">
    
              <div className=" d-flex  gap-2">
                <a href="#" class="btn btn-success" style={{ width: "50%" }}>
                  Accept
                </a>
                <a href="#" class="btn btn-danger" style={{ width: "50%" }}>

                  Reject
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Verification
