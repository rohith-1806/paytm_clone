import React from 'react';
import './PaymentBanner.css';

const banners = [
  {
    title: 'Send Money Instantly',
    desc: 'UPI transfers to any bank account, 24x7',
    bg: 'linear-gradient(135deg, #667eea, #764ba2)',
    icon: '💸',
  },
  {
    title: 'Paytm Wallet',
    desc: 'Add money once, pay everywhere instantly',
    bg: 'linear-gradient(135deg, #f093fb, #f5576c)',
    icon: '👛',
  },
  {
    title: 'Scan & Pay',
    desc: 'Pay any QR code in seconds',
    bg: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    icon: '📷',
  },
];

const PaymentBanner = () => {
  return (
    <section className="banner-section">
      <div className="banner-grid">
        {banners.map((b, i) => (
          <div
            className="banner-card"
            key={i}
            style={{ background: b.bg }}
          >
            <div className="banner-icon">{b.icon}</div>
            <div className="banner-text">
              <h3 className="banner-title">{b.title}</h3>
              <p className="banner-desc">{b.desc}</p>
            </div>
            <button className="banner-btn">Try Now →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentBanner;