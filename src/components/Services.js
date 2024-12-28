import React from 'react';
import '../styles.css';


function Services() {
  return (
    <section className="services py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <p className="text-center mb-5">We offer a variety of services to keep your car in top condition.</p>
        <div className="service-card-container">
          {/* Service 1 */}
          <div className="service-card bg-info text-white">
            <div className="icon mb-3">
              <i className="fas fa-car fa-3x"></i>
            </div>
            <h5 className="service-title">Hassle-free Car Cleaning</h5>
            <p className="service-description">Experience a thorough and efficient cleaning for your car, without any hassle.</p>
          </div>
          {/* Service 2 */}
          <div className="service-card bg-success text-white">
            <div className="icon mb-3">
              <i className="fas fa-mat fa-3x"></i>
            </div>
            <h5 className="service-title">Rubber Mats Cleaning</h5>
            <p className="service-description">Keep your car's rubber mats clean and fresh with our specialized cleaning service.</p>
          </div>
          {/* Service 3 */}
          <div className="service-card bg-warning text-white">
            <div className="icon mb-3">
              <i className="fas fa-tools fa-3x"></i>
            </div>
            <h5 className="service-title">Tyre Puncture Assistance</h5>
            <p className="service-description">Quick and reliable assistance for any tyre puncture issues you may face.</p>
          </div>
          {/* Service 4 */}
          <div className="service-card bg-primary text-white">
            <div className="icon mb-3">
              <i className="fas fa-paint-brush fa-3x"></i>
            </div>
            <h5 className="service-title">Tyre Dressing</h5>
            <p className="service-description">Enhance the appearance of your tyres with our high-quality tyre dressing service.</p>
          </div>
          {/* Service 5 */}
          <div className="service-card bg-danger text-white">
            <div className="icon mb-3">
              <i className="fas fa-user fa-3x"></i>
            </div>
            <h5 className="service-title">Skilled Workforce</h5>
            <p className="service-description">Our team consists of skilled professionals dedicated to providing top-notch service.</p>
          </div>
          {/* Service 6 */}
          <div className="service-card bg-secondary text-white">
            <div className="icon mb-3">
              <i className="fas fa-tag fa-3x"></i>
            </div>
            <h5 className="service-title">Reasonable Subscription Packages</h5>
            <p className="service-description">We offer subscription packages that provide excellent value for money.</p>
          </div>
          {/* Service 7 */}
          <div className="service-card bg-dark text-white">
            <div className="icon mb-3">
              <i className="fas fa-smile fa-3x"></i>
            </div>
            <h5 className="service-title">100% Customer Satisfaction</h5>
            <p className="service-description">We strive to achieve complete satisfaction for all our customers.</p>
          </div>
          {/* Service 8 */}
          <div className="service-card bg-light text-dark">
            <div className="icon mb-3">
              <i className="fas fa-sun fa-3x"></i>
            </div>
            <h5 className="service-title">Liquid Wax for UV Protection</h5>
            <p className="service-description">Protect your car's paint from harmful UV rays with our liquid wax service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;