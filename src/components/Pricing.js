import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import Testimonials from './Testimonials';

function Pricing() {
  return (
    <section className="pricing py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center mb-4">Product Pricing</h2>
        <p className="text-center mb-5">Choose from Below Subscriptions Packages</p>
        <div className="pricing-card-container">
          {/* SUVs / 7 Seaters */}
          <div className="pricing-card bg-primary text-white">
            <div className="card-body text-center">
              <h5 className="card-title">SUVs / 7 Seaters</h5>
              <ul className="list-unstyled">
                <li>Tyre Cleaning</li>
                <li>Daily Car Wash</li>
                <li>Puncture Assistance</li>
                <li>Liquid Wax Coating</li>
                <li>Complimentary Gifts</li>
                <li>Rubber Mats Cleaning</li>
              </ul>
              <h4 className="card-price">₹490/Month</h4>
              <Link to="/register" className="btn btn-light mt-3">Book Now</Link>
            </div>
          </div>

          {/* Hatchback / Sedans */}
          <div className="pricing-card bg-success text-white">
            <div className="card-body text-center">
              <h5 className="card-title">Hatchback / Sedans</h5>
              <ul className="list-unstyled">
                <li>Tyre Cleaning</li>
                <li>Daily Car Wash</li>
                <li>Puncture Assistance</li>
                <li>Liquid Wax Coating</li>
                <li>Complimentary Gifts</li>
                <li>Rubber Mats Cleaning</li>
              </ul>
              <h4 className="card-price">₹390/Month</h4>
              <Link to="/register" className="btn btn-light mt-3">Book Now</Link>
            </div>
          </div>

          {/* Motorcycle/Scooter/2 Wheelers */}
          <div className="pricing-card bg-info text-white">
            <div className="card-body text-center">
              <h5 className="card-title">Motorcycle / Scooter / 2 Wheelers</h5>
              <ul className="list-unstyled">
                <li>Daily Bike Wash</li>
                <li>Puncture Assistance</li>
              </ul>
              <h4 className="card-price">₹250/Month</h4>
              <Link to="/register" className="btn btn-light mt-3">Book Now</Link>
            </div>
          </div>
        </div>
        <Testimonials /> {/* Embed Testimonials component */}

      </div>
    </section>
  );
}

export default Pricing;
