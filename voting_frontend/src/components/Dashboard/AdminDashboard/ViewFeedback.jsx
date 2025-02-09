import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUnreadFeedback, setDelete, setRead } from '../../../API/Feedback';

// Sample feedback data


const ViewFeedback = () => {
  const [feedback, setFeedback] = useState([]);


  const onLoad = async()=>{
    try{
      const res =  await getUnreadFeedback();
      console.log(res.data)
      if(res.status == 200)
        setFeedback(res.data); 
    }
    catch(ex){
      toast.error("try again")
    }
  }

  useEffect(()=>{
    onLoad();
  },[])

  const onReviewed = async(id)=>{
    try{

      const res = await setRead(id);
      if(res.status  == 200){
        toast.success("marked as read")
        onLoad();
        
      }
      else{
        toast.error("try again")
      }
      
    }
    catch(ex){
      toast.error("try again")
    }

  }
  const onDelete = async (id)=>{
    try{
      const res = await setDelete(id);
      if(res.status  == 200){
        toast.warning("deleted")
        onLoad();
      }
      else{
        toast.error("try again")
      }
      
    }
    catch(ex){
      toast.error("try again")
    }
  }


  return (
    <div className='container mt-4'>
      <h3 className='text-center mb-4'>Feedback from Users</h3>
      <div className="row">
        {feedback.map((feed) => (
          <div key={feed.id} className="col-12 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{feed.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{feed.fullName} ({feed.email})</h6>
                <p className="card-text">{feed.description}</p>
                <button onClick={()=>{onReviewed(feed.id)}} className="btn btn-warning btn-sm">Mark as Read</button>
                <button onClick={()=>{onDelete(feed.id)}} className="btn btn-danger btn-sm ms-2">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewFeedback;
