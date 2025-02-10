import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { candidateValid } from '../../../API/Candidate';

const Verification = () => {

    const [val,setVal] = useState(null);
    const uid = jwtDecode(localStorage['token']).user_id;
    const onLoad = async() =>{
        try{
            const res = await candidateValid(uid);
            console.log(res)
            if(res.status ==200)
                setVal(res.data);

            else    
                toast.error("try again")
        }
        catch(ex){
            toast.error("try again")
        }
    }
    useEffect(()=>{
        onLoad()
    },[])

  return (
    <div>
      {val == null ? <h2> fetching data from server</h2>:
        val == 0 ?<h2 > If you have registered as a candidate, kindly wait for admin verification. </h2>:
        val == 1?<h2 style={{color:"Green"}}>Congratulations! You have been validated by the admin to run in the upcoming election.</h2>:
        <h2 style={{color:"#d4610f"}}>Your validation has been rejected by the admin. Please contact support for further details.</h2>
      }
    </div>
  )
}

export default Verification
