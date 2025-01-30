import React from 'react'
import '../../HomeContent.css'
import sachin from'../../assests/homepage/sachin-01.png'
import actor from'../../assests/homepage/raj-01.png'
import sweep from'../../assests/homepage/sweep.png'
const HomeText = ({data}) => {
  return (
    <div className='container' id='outerDiv'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <img src={sweep} className='img-fluid' alt="" />
            <h4>
              Systematic Voters’ Education and Electoral Participation
              </h4>
            <hr />
            Systematic Voters’ Education and Electoral Participation program, better known as SVEEP, is the flagship program of the Election Commission of India for voter education, spreading voter awareness and promoting voter literacy in India. Since 2009, we have been working towards preparing India’s electors and equipping them with basic knowledge related to the electoral process.
            <br />  
            <br />
          </div>
          <div className='col-12 col-lg-6'>
              <div className="row">
                <div className="col-6">
                    <img src={sachin} className='img-fluid' alt="sachin" />
                </div>
                <div className="col-6">
                <img src={actor} className='img-fluid' alt="raj" />
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default HomeText
