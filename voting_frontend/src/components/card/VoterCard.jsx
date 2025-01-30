import React from 'react'
import myImage from "../../assests/profile.jpg";

function VoterCard(props) {
  return (
    <div className='d-flex p-3 gap-3 align-items-center border justify-content-around' style={{width:"700px", border:"1px solid gray", backgroundColor:"#bde7fc"}}>
        <img src={myImage} alt="" width={"200px"}/>
        <div>
            <p>Voter name</p>
            <p>Constituencies name</p>
            <p></p>
        </div>
        <div>
            <button className='btn btn-primary m-2'>Yes/No</button>
            <button className='btn btn-primary'>Details</button>
        </div>
    </div>
  )
}

export default VoterCard;