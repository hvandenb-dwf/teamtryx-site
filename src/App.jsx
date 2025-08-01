import React from 'react';
import './App.css';
import logo from './assets/Logo_TeamTryx_BlackText.png';
import heroImage from './assets/hero-illustration.png'; // Zorg dat deze afbeelding bestaat of pas het pad aan

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img src={logo} alt="Team Tryx Logo" className="logo" />
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero full-width">
        <div className="hero-content">
          <div className="hero-left">
            <h1>Your Expert AI Work Companion</h1>
            <p>TeamTryx helps professionals succeed at their job by providing specialized, always up-to-date digital experts.</p>
            <div className="cta-buttons">
              <a href="#get-started" className="btn-primary">Get Started</a>
              <a href="#learn-more" className="btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroImage} alt="Illustration" className="hero-image" />
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} TeamTryx. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
