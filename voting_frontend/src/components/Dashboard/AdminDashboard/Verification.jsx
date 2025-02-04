import React from 'react'

const Verification = ({children}) => {
  return (

    <div>
      
        <div class="card">
        <h2>
          <div class="card-header">//ABB</div>
        </h2>
        <div class="card-body">
          <div className="row">
            <div className="col-2">
                //img
            </div>
            <div className="col-7">
                {children}
            </div>
            <div className="col-3">
                <div className="d-flex gap-2 ">
                <a href="#" class="btn btn-success" style={{width:"50%"}}>
              Accept
            </a>
            <a href="#" class="btn btn-danger" style={{width:"50%"}}>

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
