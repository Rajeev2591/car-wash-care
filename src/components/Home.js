import React from 'react';
import { Link } from 'react-router-dom';
import About from './About'; // Import the About component
import '../styles.css';

function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="home-content">
          <h2>Welcome to Car Care</h2>
          <p>Your one-stop solution for all car care services.</p>
          <Link to="/booknow" className="signup-button">Sign up for Free Trial</Link>
        </div>
      </section>
      <About /> {/* Embed About component */}
    </>
  );
}

export default Home;
