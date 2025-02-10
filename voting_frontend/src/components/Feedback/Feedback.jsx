import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { submitFeedback } from '../../API/Feedback';

function Feedback() {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        title: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await submitFeedback(formData);
            if(res.status == 201){
                toast.success("Thank you for your Feedback")
                setFormData({
                    email: '',
                    fullName: '',
                    title: '',
                    description: ''
                });
                navigate("/");
            }  
            else    
            toast.error("try again ")
        }
        catch(ex){
            toast.error("try again ")
        }
       
    };

    return (
        <div>
            <br /><br />
        
        <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
            <div className='mt-5 card' style={{ width: "600px", padding: "50px", height: "650px" }}>
                <h3 className='text-center text-primary p-2 rounded mb-1 font fw-bold'>FEEDBACK FORM</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group my-2">
                        <label htmlFor="fullName" className='mb-2'>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="fullName" 
                            name="fullName"
                            value={formData.fullName} 
                            onChange={handleChange} 
                            placeholder="Enter Name" 
                            required
                        />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="email" className='mb-2'>Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Enter Email" 
                            required
                        />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="title" className='mb-2'>Subject</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            name="title"
                            value={formData.title} 
                            onChange={handleChange} 
                            placeholder="Enter Title" 
                            required
                        />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="description" className='mb-2'>Message</label>
                        <textarea 
                            className="form-control" 
                            id="description" 
                            name="description"
                            rows="5"
                            value={formData.description} 
                            onChange={handleChange} 
                            placeholder="Description"
                            required
                        ></textarea>
                    </div>
                    <center>
                        <button type="submit" className='btn btn-primary mt-3'>
                            Submit
                        </button>
                    </center>
                </form>
            </div>
        </div>
            </div>
    );
}

export default Feedback;
