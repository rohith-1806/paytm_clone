import React, { useState } from 'react';
import './Footer.css';

const footerLinks = {
  'About Us': ['About Paytm', 'Careers', 'Press', 'Blog', 'Investors'],
  'Products': ['Paytm Wallet', 'Paytm Payments Bank', 'FASTag', 'Paytm Gold', 'Paytm Money'],
  'Help & Support': ['Help Center', 'Privacy Policy', 'Terms of Use', 'Grievance Redressal', 'Responsible Disclosure'],
  'More': ['Merchant Payments', 'Paytm for Business', 'Paytm Ads', 'Sitemap'],
};

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (key) => {
    setExpandedSection(expandedSection === key ? null : key);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/200px-Paytm_Logo_%28standalone%29.svg.png"
            alt="Paytm"
            className="footer-logo"
          />
          <p className="footer-tagline">
            India's leading digital payments & financial services company
          </p>
          <div className="footer-socials">
            {[
              { name: '𝕏', url: 'https://twitter.com/Paytm' },
              { name: 'f', url: 'https://facebook.com/paytm' },
              { name: 'in', url: 'https://linkedin.com/company/paytm' },
              { name: '▶', url: 'https://youtube.com/paytm' },
            ].map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="social-icon">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links-grid">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div className="footer-col" key={section}>
              <button
                className="footer-col-title"
                onClick={() => toggleSection(section)}
              >
                {section}
                <span className="footer-arrow">
                  {expandedSection === section ? '▲' : '▼'}
                </span>
              </button>
              <ul className={`footer-list ${expandedSection === section ? 'open' : ''}`}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Investor Relations Strip */}
      <div className="investor-strip">
        <div className="investor-inner">
          <span className="investor-label">🏦 Investor Relations:</span>
          <a href="#" className="investor-link">Annual Reports</a>
          <a href="#" className="investor-link">Financial Results</a>
          <a href="#" className="investor-link">Corporate Governance</a>
          <a href="#" className="investor-link">Shareholding Pattern</a>
          <a href="#" className="investor-link">Stock Exchange Filings</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} One97 Communications Ltd. All rights reserved.
        </p>
        <div className="footer-badges">
          <span className="badge">🔒 PCI DSS Compliant</span>
          <span className="badge">✅ RBI Regulated</span>
          <span className="badge">🏅 ISO 27001 Certified</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;