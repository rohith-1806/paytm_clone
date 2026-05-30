import React, { useState } from 'react';
import './DownloadApp.css';

const DownloadApp = () => {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (phone.length === 10) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setPhone('');
    }
  };

  return (
    <section className="download-section">
      <div className="download-container">
        <div className="download-left">
          <span className="download-badge">📱 Get the App</span>
          <h2 className="download-title">Experience the Fastest<br />Payments in India</h2>
          <p className="download-desc">
            Join 33 Crore+ users who trust Paytm for secure, instant payments, investments & more.
          </p>
          <div className="sms-box">
            <div className="phone-input-wrap">
              <span className="country-code">+91</span>
              <input
                type="tel"
                maxLength={10}
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                className="phone-input"
              />
            </div>
            <button
              className={`sms-btn ${sent ? 'sent' : ''}`}
              onClick={handleSend}
            >
              {sent ? '✓ Sent!' : 'Send Link'}
            </button>
          </div>
          <div className="store-badges">
            <a href="https://play.google.com/store/apps/details?id=net.one97.paytm" target="_blank" rel="noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </a>
            <a href="https://apps.apple.com/in/app/paytm/id473894658" target="_blank" rel="noreferrer">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
            </a>
          </div>
        </div>
        <div className="download-right">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/749613/1655706866764.png"
            alt="Paytm App Preview"
            className="download-phone"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;