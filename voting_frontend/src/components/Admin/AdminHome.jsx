import React from 'react'
import OptionsTemplate from './Card/OptionsTemplate'
function AdminHome() {
  return (
    <div className='d-flex justify-content-center align-item-center' style={{marginTop:"100px"}}>
        <OptionsTemplate color="#c3dbe3" text="Candidate Validation" path="/validation"/>
        <OptionsTemplate color="#e3d8de" text="Election Stats" path="/stats"/>
        <br />  
    </div>
  )
}

export default AdminHome