const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    recharge: [
      { name: 'Prepaid Recharge', href: '#prepaid' },
      { name: 'Postpaid Bill Pay', href: '#postpaid' },
      { name: 'DTH Recharge', href: '#dth' },
      { name: 'Broadband Bill', href: '#broadband' },
      { name: 'Landline Bill', href: '#landline' },
    ],
    quickLinks: [
      { name: 'My Account', href: '#account' },
      { name: 'Recharge History', href: '#history' },
      { name: 'Offers & Coupons', href: '#offers' },
      { name: 'Refer & Earn', href: '#refer' },
      { name: 'Help & Support', href: '#support' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press & Media', href: '#press' },
      { name: 'Investor Relations', href: '#investor' },
      { name: 'Blog', href: '#blog' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Refund Policy', href: '#refund' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Disclaimer', href: '#disclaimer' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' },
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'YouTube', icon: 'youtube', href: '#' },
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
  ];

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <h3>Get Exclusive Offers & Updates</h3>
          <p>Subscribe to receive the latest deals and recharge offers directly to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="airtel-logo">airtel</span>
              <span className="logo-tagline">Recharge</span>
            </div>
            <p className="footer-description">
              India's most trusted recharge platform. Fast, secure, and reliable 
              mobile recharge services with exclusive offers and cashback rewards.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className={`social-icon ${social.icon}`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-links-section">
            <h4>Recharge</h4>
            <ul className="footer-links">
              {footerLinks.recharge.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h4>Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="footer-payments">
        <div className="footer-container">
          <span className="payment-label">Secure Payment Options:</span>
          <div className="payment-methods">
            <span className="payment-icon visa">Visa</span>
            <span className="payment-icon mastercard">MasterCard</span>
            <span className="payment-icon upi">UPI</span>
            <span className="payment-icon paytm">Paytm</span>
            <span className="payment-icon gpay">GPay</span>
            <span className="payment-icon phonepe">PhonePe</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            © {currentYear} Airtel Recharge. All rights reserved. | Made with ❤️ in India
          </p>
          <div className="footer-certifications">
            <span className="cert-badge">🔒 SSL Secured</span>
            <span className="cert-badge">✓ PCI DSS Compliant</span>
            <span className="cert-badge">⭐ 4.8/5 Rating</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
