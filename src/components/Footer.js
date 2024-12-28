import React from 'react';
import '../styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p><i className="fas fa-phone-alt"></i> +91 7800044091</p>
          <p><i className="fas fa-envelope"></i> contact@carecar.com</p>
          <p><i className="fas fa-map-marker-alt"></i> Bela, Pratapgarh, 230001</p>
          <p><i className="fab fa-whatsapp"></i> <a href="https://wa.me/917800044091" className="whatsapp-link">WhatsApp</a></p>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Car Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
