import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const popularPlans = [
    { id: 1, price: 199, validity: '24 days', data: '1.5GB/day', calls: 'Unlimited', sms: '100/day', tag: 'Popular' },
    { id: 2, price: 299, validity: '28 days', data: '2GB/day', calls: 'Unlimited', sms: '100/day', tag: 'Best Seller' },
    { id: 3, price: 479, validity: '56 days', data: '1.5GB/day', calls: 'Unlimited', sms: '100/day', tag: 'Value Pack' },
    { id: 4, price: 719, validity: '84 days', data: '2GB/day', calls: 'Unlimited', sms: '100/day', tag: 'Super Saver' },
    { id: 5, price: 999, validity: '84 days', data: '3GB/day', calls: 'Unlimited', sms: '100/day', tag: 'Premium' },
    { id: 6, price: 2999, validity: '365 days', data: '2.5GB/day', calls: 'Unlimited', sms: '100/day', tag: 'Annual Plan' },
  ];

  const handleRecharge = () => {
    if (mobileNumber && selectedPlan) {
      alert(`Initiating recharge of ₹${selectedPlan.price} for ${mobileNumber}`);
    }
  };

  return (
    <div className="app">
      <Navbar />
      
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        <main className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h1>Fast & Secure <span className="highlight">Mobile Recharge</span></h1>
              <p>Recharge your Airtel prepaid mobile in seconds. Get exclusive offers and cashback on every recharge!</p>
              
              <div className="recharge-form">
                <div className="input-group">
                  <span className="input-prefix">+91</span>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    maxLength="10"
                    className="mobile-input"
                  />
                </div>
                <button 
                  className="btn-browse-plans"
                  onClick={() => document.getElementById('plans').scrollIntoView({ behavior: 'smooth' })}
                >
                  Browse Plans
                </button>
              </div>

              <div className="hero-features">
                <div className="feature">
                  <span className="feature-icon">⚡</span>
                  <span>Instant Recharge</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔒</span>
                  <span>100% Secure</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💰</span>
                  <span>Best Cashback</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="airtel-brand">airtel</div>
                  <div className="balance-card">
                    <span className="balance-label">Main Balance</span>
                    <span className="balance-amount">₹ 299.00</span>
                    <span className="validity">Valid till: 28 Dec 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Plans Section */}
          <section id="plans" className="plans-section">
            <div className="section-header">
              <h2>Popular Recharge Plans</h2>
              <p>Choose from our best-selling plans with unlimited benefits</p>
            </div>

            <div className="plans-filters">
              <button className="filter-btn active">All Plans</button>
              <button className="filter-btn">Data Packs</button>
              <button className="filter-btn">Unlimited</button>
              <button className="filter-btn">Talktime</button>
              <button className="filter-btn">Validity</button>
            </div>

            <div className="plans-grid">
              {popularPlans.map((plan) => (
                <div 
                  key={plan.id} 
                  className={`plan-card ${selectedPlan?.id === plan.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  {plan.tag && <span className="plan-tag">{plan.tag}</span>}
                  <div className="plan-price">₹{plan.price}</div>
                  <div className="plan-validity">{plan.validity}</div>
                  <ul className="plan-features">
                    <li><span className="icon">📊</span> {plan.data}</li>
                    <li><span className="icon">📞</span> {plan.calls} Calls</li>
                    <li><span className="icon">💬</span> {plan.sms} SMS</li>
                  </ul>
                  <button className="btn-select">
                    {selectedPlan?.id === plan.id ? '✓ Selected' : 'Select Plan'}
                  </button>
                </div>
              ))}
            </div>

            {selectedPlan && mobileNumber.length === 10 && (
              <div className="recharge-summary">
                <div className="summary-details">
                  <span>Mobile: +91 {mobileNumber}</span>
                  <span>Plan: ₹{selectedPlan.price} | {selectedPlan.validity}</span>
                </div>
                <button className="btn-recharge" onClick={handleRecharge}>
                  Proceed to Pay ₹{selectedPlan.price}
                </button>
              </div>
            )}
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h2>Why Choose Airtel Recharge?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-large">🚀</div>
                <h3>Instant Recharge</h3>
                <p>Get your recharge done in less than 10 seconds with our lightning-fast system.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-large">🎁</div>
                <h3>Exclusive Offers</h3>
                <p>Access special deals and cashback offers available only on our platform.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-large">🔐</div>
                <h3>Secure Payments</h3>
                <p>Your transactions are protected with bank-grade 256-bit SSL encryption.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-large">📱</div>
                <h3>All Services</h3>
                <p>Prepaid, Postpaid, DTH, Broadband - all your Airtel services in one place.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
