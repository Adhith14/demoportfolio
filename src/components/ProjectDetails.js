import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  return (
    <div className="project-details-container">
      <div className="row h-100">
        <div className="col-md-8">
          <div className="glassmorphic-box project-name-box mb-4">
            <h2 className="mb-3">Airlink</h2>
            <p>
            The Airline Ticket Reservation System is a comprehensive solution designed to streamline the process of booking flights. 
            This system allows users to search for available flights, compare prices, and reserve tickets online.
            It provides real-time updates on flight availability and pricing, ensuring that travelers can make informed decisions.
            Additionally, the system supports various payment methods, offers ticket cancellation and modification options, and sends 
            automated notifications for booking confirmations and flight changes. With an intuitive interface and robust backend support,
            the Airline Ticket Reservation System enhances the efficiency and convenience of air travel for both passengers and
            airline operators.
            </p>
          </div>
          <div className="glassmorphic-box feedback-box">
            <h3 className="mb-3">Feedback</h3>
            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Enter your feedback here..."
            ></textarea>
            <button className="btn btn-secondary"><Link to={'/login'}  style={{textDecoration:'none',color:'black'}}>Send</Link></button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-image-container">
            <img src="Screenshot-homepage.png" alt="Header Img"/>
          </div>
          <div className="btn-group-vertical w-100 mt-3">
            <button className="btn btn-light mb-2">Github</button>
            <button className="btn btn-light">Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;