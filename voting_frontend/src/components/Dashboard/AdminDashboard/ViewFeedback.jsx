import React from 'react';

// Sample feedback data
const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    subject: "Website Issue",
    message: "There seems to be a problem with the contact form. It doesn't submit properly.",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    subject: "Suggestion",
    message: "Great website, but it would be nice to have a dark mode option.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    email: "sam.wilson@example.com",
    subject: "Feedback on Features",
    message: "The navigation is a bit confusing. Consider adding tooltips for first-time users.",
  },
];

const ViewFeedback = () => {
  return (
    <div className='container mt-4'>
      <h3 className='text-center mb-4'>Feedback from Users</h3>
      <div className="row">
        {feedbackData.map((feedback) => (
          <div key={feedback.id} className="col-12 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{feedback.subject}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{feedback.name} ({feedback.email})</h6>
                <p className="card-text">{feedback.message}</p>
                <button className="btn btn-warning btn-sm">Mark as Read</button>
                <button className="btn btn-danger btn-sm ms-2">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewFeedback;
