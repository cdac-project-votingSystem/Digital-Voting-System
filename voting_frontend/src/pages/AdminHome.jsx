import React from 'react'
import LinkCard from '../components/card/LinkCard';

function AdminHome() {
  return (
    <div className='d-flex justify-content-center align-item-center' style={{marginTop:"100px"}}>
        <LinkCard color="#c3dbe3" text="Validation" path="/validation"/>
        <LinkCard color="#e3d8de" text="Election Stats" path="/stats"/>
    </div>
  )
}

export default AdminHome