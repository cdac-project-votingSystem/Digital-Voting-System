import React, { useState } from 'react';

function Feedback() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data Submitted:", formData);
        
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div>
            <br /><br />
        
        <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
            <div className='mt-5 card' style={{ width: "600px", padding: "50px", height: "650px" }}>
                <h3 className='text-center text-primary p-2 rounded mb-1 font fw-bold'>FEEDBACK FORM</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group my-2">
                        <label htmlFor="name" className='mb-2'>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name"
                            value={formData.name} 
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
                        <label htmlFor="subject" className='mb-2'>Subject</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="subject" 
                            name="subject"
                            value={formData.subject} 
                            onChange={handleChange} 
                            placeholder="Enter Subject" 
                            required
                        />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="message" className='mb-2'>Message</label>
                        <textarea 
                            className="form-control" 
                            id="message" 
                            name="message"
                            rows="5"
                            value={formData.message} 
                            onChange={handleChange} 
                            placeholder="Enter your message"
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
