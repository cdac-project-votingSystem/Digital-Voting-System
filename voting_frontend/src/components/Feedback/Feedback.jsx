import React from 'react'

function Feedback() {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{height:"100vh"}}>
            <br /><br />
            <div className='mt-5' style={{width:"500px", padding:"50px", height:"500px" , border:"4px solid #30acd9"}}>
                <h3 className='text-center'>Feedback Form</h3>
                <div>
                    <form>
                        <div class="form-group my-2">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
                        </div>
                        <div class="form-group my-2">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                        </div>
                        <div class="form-group my-2">
                            <label for="exampleFormControlInput1">Subject</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Subject" />
                        </div>
                        <div class="form-group my-2">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <center>
                            <button className='btn btn-info mt-3'>
                                Submit
                            </button>

                        </center>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Feedback