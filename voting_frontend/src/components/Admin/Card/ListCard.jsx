import React from 'react';

import { candidateToInValidate, candidateToValidate} from '../../../API/Admin';
import { toast } from 'react-toastify';





function ListCard({ data,refreshPage }) {
    const { partyName, name, constituencyName, partyAbb,image,id } = data;

    console.log(image)
    const validateCandidate = async()=>{
        const res  = await candidateToValidate(id);
        if(res.status== 200){
            toast.success("validated");
            refreshPage();
        }
        else{
            toast.error("try again")
        }
    }  
    
    const inValidateCandidate = async()=>{
        const res  = await candidateToInValidate(id);
        if(res.status== 200){
            toast.warning("IN validated");
            refreshPage();
        }
        else{
            toast.error("try again")
        }
    }  


    return (
        <div>
            <div className="card mb-2 ms-2" style={{ width: '18rem' }}>
                <img src={  `data:image/png;base64,${data.image}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{partyName } | { partyAbb }</p>
                    <p className="card-text">{constituencyName}</p>
                    <div className='row'>
                        <div className="col-6">
                        <button onClick={validateCandidate} className="btn btn-success" style={{width:"100%"}}>Accept</button>
                        </div>
                        <div className="col-6">
                    <button onClick = {inValidateCandidate}className="btn btn-danger" style={{width:"100%"}}>Reject</button>
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
 
