import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          India's Most Trusted
          <br />
          Payment App
        </h1>

        <p className="hero-subtitle">
          Recharge, pay bills, book tickets, transfer money & much more
        </p>

        <div className="hero-buttons">

          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=net.one97.paytm"
            target="_blank"
            rel="noreferrer"
            className="hero-btn google"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get on Google Play"
            />
          </a>

          {/* Apple Store Button */}
          <a
            href="https://apps.apple.com/in/app/paytm/id473894658"
            target="_blank"
            rel="noreferrer"
            className="hero-btn apple"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on App Store"
            />
          </a>

        </div>
      </div>

      <div className="hero-image-wrap">
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/749613/1655706866764.png"
          alt="Paytm App"
          className="hero-phone-img"
        />
      </div>
    </section>
  );
};

export default HeroSection;