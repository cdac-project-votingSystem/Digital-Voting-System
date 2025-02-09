import React, { useEffect, useState } from 'react'
import ListCard from '../../Admin/Card/ListCard';
import profilepic from '../../../assests/adminpage/profile.jpg'
import { getAllCandidateToValidate } from '../../../API/Admin';
import { toast } from 'react-toastify';

function CandidateValidation() {
  
  const [candiateListToValdiate,setCandidateListToValidate]=useState([]);
  

  const onLoad = async ()=>{
    const res = await getAllCandidateToValidate();
    if(res.status == 200){
      setCandidateListToValidate(res.data);
    }
    else{
      toast.error("try again")
    }
  }

  useEffect(()=>{
    onLoad();
  },[])

  return (
    <div>
      <br /><br />
      <div className="">
      <h2>Candidate Validation</h2>
      </div>

    <div className='container d-flex flex-wrap'>
    
        {
          candiateListToValdiate.length == 0 ? <h2> No candidate to Validate </h2>:  
          candiateListToValdiate.map(candiate => (<ListCard data={candiate} refreshPage = {onLoad}/>))
      
        }
        
        
       
    </div>
    </div>
  )
}

export default CandidateValidation