import React from 'react'
import ListCard from './Card/ListCard';
import profilepic from '../../assests/adminpage/profile.jpg'

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
      <div className="text-center my-5">
      <h2 className='display-4 me-2'>Candidate Validation</h2>
      </div>

    <div className='container d-flex flex-wrap justify-content-center mt-5'>
    
        {
          arr.map(e => (<ListCard data={e}/>))
      }
       
    </div>
    </div>
  )
}

export default CandidateValidation