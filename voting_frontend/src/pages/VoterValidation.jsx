import React from 'react'

import CandidateCard from '../components/card/CandidateCard'
import VoterCard from '../components/card/VoterCard'

function VoterValidation() {
    let arr = [1,2,3,4,5,6]
  return (
    <div>
        {
            arr.map(e => (<VoterCard/>))
        }
    </div>
  )
}

export default VoterValidation