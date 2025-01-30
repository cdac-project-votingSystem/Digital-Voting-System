import React from 'react'
import VoterCard from '../components/card/VoterCard'
import CandidateCard from '../components/card/CandidateCard'

function CandidateValidation() {
    let arr = [1,2,3,4]
  return (
    <div className='d-flex flex-wrap gap-3 justify-content-center mt-5'>
        {
            arr.map(e => (<CandidateCard/>))
        }
    </div>
  )
}

export default CandidateValidation