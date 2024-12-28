import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles.css';
import logo from '../assets/logo.png'; // Ensure the correct path to your logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" />
        <Link to="/" className="nav-link">Car Care</Link>
      </div>
      <ul className="nav-links-center">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
      </ul>
      <div className="navbar-contact">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i> +91 7800044091
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i> contact@carecar.com
        </div>
        <div className="contact-item address">
          <i className="fas fa-map-marker-alt"></i> Bela, Pratapgarh, 230001
        </div>
        <div className="contact-item">
          <FaWhatsapp /> <a href="https://wa.me/917800044091" className="whatsapp-link">WhatsApp</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
