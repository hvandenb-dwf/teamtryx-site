import React from 'react';

const Home = () => {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <section>
        <h1>Empowering SMBs with Human-like AI Employees</h1>
        <p>Scalable, 24/7 digital experts that reduce costs, increase efficiency, and drive growth.</p>
        <button>Try It Now</button>
        <button style={{ marginLeft: '1rem' }}>Learn More</button>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h2>Why AI, Why Now?</h2>
        <p>
          AI is everywhere — but most small and medium-sized businesses (SMBs) don’t have the time or expertise to make it work for them.
          TeamTryx removes that barrier by offering a plug & play AI platform built for real-world results.
        </p>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h2>A Platform of Human-Like AI Employees</h2>
        <ul>
          <li><strong>🤖 Concierge Services:</strong> 24/7 digital assistants trained on your company values, audience types and goals. Communicate via web, chat, voice or mobile.</li>
          <li><strong>🧠 Expert Services:</strong> Always-on AI experts in legal, sales, support, HR, finance, etc. Fully trained on company data, policies and red flags.</li>
          <li><strong>📊 Live Dashboards:</strong> Each AI employee comes with a dashboard showing KPIs, trends, and actionable insights — always up to date.</li>
        </ul>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h2>AI That Integrates Deeply with Your Business</h2>
        <ul>
          <li>Trained per role and per company</li>
          <li>Fully integrated with internal systems (CRM, chat, e-mail, product data)</li>
          <li>GDPR-compliant</li>
          <li>Escalation to real humans when needed</li>
        </ul>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h2>Ready to Scale with Digital Intelligence?</h2>
        <button>Book a Demo</button>
        <button style={{ marginLeft: '1rem' }}>Enter Client Portal</button>
        <button style={{ marginLeft: '1rem' }}>Contact Us</button>
      </section>

      <footer style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#555' }}>
        <hr />
        <p>© 2025 TeamTryx — hello@teamtryx.com</p>
        <p>Privacy | Terms | LinkedIn</p>
      </footer>
    </main>
  );
};

export default Home;
