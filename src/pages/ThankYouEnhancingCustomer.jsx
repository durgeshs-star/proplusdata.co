import React from 'react';
import { useEffect } from 'react';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';

function ThankYouEnhancingCustomer() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when page loads
      }, []);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Header1/>
    <main style={{ flex: 1 }}>
    <section className="thank-you-section" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <div className="container">
        <h3>Thanks for your interest in our eBook titled:</h3>
        
        <h1>"Enhancing customer experience with AI-powered solutions"</h1>
        <p>Your download has started. Please check your browser's downloads section.</p>
      </div>
    </section>
    </main>
    <Footer/>
    </div>
  );
}

export default ThankYouEnhancingCustomer;
