import React from 'react'
import ListCard from '../../Admin/Card/ListCard';
import profilepic from '../../../assests/adminpage/profile.jpg'

function CandidateValidation() {
    const arr = [
      {
          img:profilepic,
          name: "arvind",
          constituency: "Delhi",
          politicalParty: "AAP"
      },
      {
          img:profilepic,
          name: "Mahesh",
          constituency: "Raipur",
          politicalParty: "BJP"
      },
      {
          img:profilepic,
          name: "Pankaj",
          constituency: "Pune",
          politicalParty: "ABC"
      },    {
          img:profilepic,
          name: "arvind",
          constituency: "Delhi",
          politicalParty: "AAP"
      },
      {
          img:profilepic,
          name: "Mahesh",
          constituency: "Raipur",
          politicalParty: "BJP"
      },
      {
          img:profilepic,
          name: "Pankaj",
          constituency: "Pune",
          politicalParty: "ABC"
      }
    ]
  return (
    <div>
      <br /><br />
      <div className="">
      <h2>Candidate Validation</h2>
      </div>

    <div className='container d-flex flex-wrap'>
    
        {
          arr.map(e => (<ListCard data={e}/>))
      }
       
    </div>
    </div>
  )
}

export default CandidateValidation