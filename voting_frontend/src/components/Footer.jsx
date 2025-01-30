import React from 'react'
import logo from '../assests/Footer/eci-logo-white.svg'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=' container-fluid align-bottom'  >
      <hr style={{ width : '100%',border: '2px solid black' }} />

    <div className="row "style={{backgroundColor: '#013359',color:'white'}} >
      {/* main content */}
      <div className="col-6 mt-3">
      <center> <b> Election Commission of India </b>  </center> 
      <hr />
        <div>
          <div className="row">
            <div className="col-12 col-md-3" >
              <img src={logo} alt=""style={{width:"80%",height:"80%"}}/>
            </div>
            <div className="col-12 col-md-9" style={{textAlign:'justify'}}>
            The Election Commission of India is an autonomous constitutional 
            authority responsible for administering election processes in India. 
            The body administers elections to the Lok Sabha, Rajya Sabha, State 
            Legislative Assemblies in India, and the offices of the President and
             Vice President in the country.
            </div>
          </div>
        </div>
      </div>
      {/* links to connect */}
      <div className="col-3 mt-3 d-flex justify-content-center align-items-center">
        <div className='d'>
    
        links///


        </div>
      </div>
      {/* feedback */}
      <div className="col-3 mt-3 d-flex justify-content-center ">
        <div >
        Your feedback is valuable to us! Please click the button below to share your thoughts.
        <br />
        <br />

    
        <center>
        <Link to="/feedback">
          <button className="btn btn-info">Feedback</button>
       </Link>
      </center>

        </div>
        
      </div>
    </div>
    <div className='row d-flex justify-content-center'style={{backgroundColor: '#01233d',color:'white'}}>
          <hr />
        © Copyright Election Commission of India 2025 
        </div>
    </div>
  )
}

export default Footer
