import React from 'react'
import LinkCard from '../components/card/LinkCard';

function Validation() {
  return (
    <div className='d-flex justify-content-center align-item-center' style={{marginTop:"100px"}}>
        <LinkCard color="#c3dbe3" text="Candidate Validation" path="/candidateValidation"/>
        <LinkCard color="#e3d8de" text="Voter Validation" path="/voterValidation"/>
    </div>
  )
}

export default Validation