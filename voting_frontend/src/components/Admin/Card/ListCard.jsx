import React from 'react';
import { Link } from 'react-router-dom';

function ListCard({ data }) {
    const { img, name, constituency, politicalParty } = data;
    return (
        <div>
            <div className="card mb-2 ms-2" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{politicalParty}</p>
                    <p className="card-text">{constituency}</p>
                    <div className='row'>
                        <div className="col-6">
                        <Link to="#" className="btn btn-success" style={{width:"100%"}}>Accept</Link>
                        </div>
                        <div className="col-6">
                    <Link to="#" className="btn btn-danger" style={{width:"100%"}}>Reject</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ListCard;



        {/* // <div className="row"> */}
    {/* <div className='d-flex flex-column align-items-center' style={{ border:"1px solid gray", backgroundColor:"#bde7fc"}}>
        <br />
        <br />
        <br />
        <br />
        <div className="col-3 ">
        <img className='img-fluid' src={img} alt={name} width={"200px"}/>
        </div>
        <div className='col-5'>
                <div>
                <div className="row">
                    <div className="col">
                        <b> {name}</b>
                    </div>
                </div>
                <div className="col-6">
                        {politicalParty}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        {constituency}
                    </div>
                    
            </div>
        </div>
        <div className='col-4'>
            <div className="row">
                <div className="col-12">
                        <button className='btn btn-success'>Validate</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                        <button className='btn btn-danger'>Reject</button>
                </div>
            </div>
        </div>
        </div> */}
    {/* // </div> */}
 
