import React from 'react';
import '../styles.css';

function Testimonials() {
  return (
    <section className="testimonials py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center mb-4 text-success">Testimonials</h2>
        <h3 className="text-center mb-5 text-dark">What Our Clients Say</h3>
        <div className="testimonial-row d-flex justify-content-center">
          <div className="testimonial-card text-center mx-2">
            <div className="card-body">
              <div className="stars mb-3">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
              <h5 className="card-title text-success">Rajeev Chaurasia</h5>
              <h6 className="card-subtitle mb-2 text-muted">Customer</h6>
              <p className="card-text">I don't have to run after my society's Security Guard for cleaning my Cars anymore. Wash My Car's Daily Doorstep Wash is a Great Initiative.</p>
            </div>
          </div>
          <div className="testimonial-card text-center mx-2">
            <div className="card-body">
              <div className="stars mb-3">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
              <h5 className="card-title text-success">John Doe</h5>
              <h6 className="card-subtitle mb-2 text-muted">Customer</h6>
              <p className="card-text">The team was professional and thorough. Very satisfied with the results.</p>
            </div>
          </div>
          <div className="testimonial-card text-center mx-2">
            <div className="card-body">
              <div className="stars mb-3">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
              <h5 className="card-title text-success">Suraj Singh</h5>
              <h6 className="card-subtitle mb-2 text-muted">Customer</h6>
              <p className="card-text">Great value for money. My car looks brand new after their service!</p>
            </div>
          </div>
        </div>
        <div className="statistics-row d-flex justify-content-center mt-5">
          <div className="stat-card text-center mx-3">
            <div className="card-body">
              <h4 className="stat-number">386+</h4>
              <p className="stat-text">Cars Washed</p>
            </div>
          </div>
          <div className="stat-card text-center mx-3">
            <div className="card-body">
              <h4 className="stat-number">97%</h4>
              <p className="stat-text">Trusted Clients</p>
            </div>
          </div>
          <div className="stat-card text-center mx-3">
            <div className="card-body">
              <h4 className="stat-number">75+</h4>
              <p className="stat-text">Trained Staff</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
