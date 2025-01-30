import React from 'react'

function LinkCard(props) {
  return (
    <div className='mt-5 d-flex align-items-center justify-content-center' style={{backgroundColor:props.color, width:"300px", height:"200px", borderRadius:"20px"}}>
      <button className='btn' style={{width:"150px", height:"50px", backgroundColor: "#30acd9" , color:"white"}}>{props.text}</button>

    </div>
  )
}

export default LinkCard