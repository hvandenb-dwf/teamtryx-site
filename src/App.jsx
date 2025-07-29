import React from 'react';
import './App.css';
import logo from './assets/Logo_TeamTryx_BlackText.png';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Team Tryx Logo" className="logo" />
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <h1>Your Expert AI Work Companion</h1>
        <p>TeamTryx helps professionals succeed at their job by providing specialized, always up-to-date digital experts.</p>
        <div className="cta-buttons">
          <a href="#get-started" className="btn-primary">Get Started</a>
          <a href="#learn-more" className="btn-secondary">Learn More</a>
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} TeamTryx. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

/* App.css */

body {
  margin: 0;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fc;
  color: #1f2937;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 44px;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: #1f2937;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: #3b82f6;
}

.hero {
  flex: 1;
  padding: 6rem 2rem 5rem;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
}

.hero p {
  font-size: 1.25rem;
  max-width: 640px;
  margin: 0 auto 2.5rem;
  color: #4b5563;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #3b82f6;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-secondary {
  background-color: #e5e7eb;
  color: #111827;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover {
  background-color: #d1d5db;
}

.footer {
  text-align: center;
  padding: 1.25rem;
  background-color: #f3f4f6;
  font-size: 0.9rem;
  color: #6b7280;
}
