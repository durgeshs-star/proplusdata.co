import React from 'react';
import { useEffect } from 'react';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';

function ThankYouVmware() {
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
        
        <h1>"AWS For VMware"</h1>
        <h5>Migrate and modernize your VMware-based workloads to AWS</h5>
        <p>Your download has started. Please check your browser's downloads section.</p>
      </div>
    </section>
    </main>
    <Footer/>
    </div>
  );
}

export default ThankYouVmware;
