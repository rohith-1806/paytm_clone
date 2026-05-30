import React from 'react';
import './CreditCardSection.css';

const cards = [
  {
    name: 'Paytm SBI Credit Card',
    bank: 'SBI Bank',
    cashback: '5% unlimited cashback',
    fee: 'Zero annual fee*',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/200px-SBI-logo.svg.png',
  },
  {
    name: 'Paytm HDFC Bank Card',
    bank: 'HDFC Bank',
    cashback: '3% cashback on all spends',
    fee: '₹500/year (waived on ₹1L spend)',
    gradient: 'linear-gradient(135deg, #004c97 0%, #0062b9 100%)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/200px-HDFC_Bank_Logo.svg.png',
  },
  {
    name: 'Paytm Citibank Card',
    bank: 'Citibank',
    cashback: '7% cashback on Paytm',
    fee: 'Lifetime free for select users',
    gradient: 'linear-gradient(135deg, #d4a017 0%, #b8860b 100%)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citi.svg/200px-Citi.svg.png',
  },
];

const CreditCardSection = () => {
  return (
    <section className="cc-section">
      <div className="section-header">
        <h2 className="section-title">Credit Cards with Maximum Benefits</h2>
        <p className="section-sub">Earn rewards on every purchase</p>
      </div>
      <div className="cc-cards-wrap">
        {cards.map((card, i) => (
          <div className="cc-card" key={i}>
            <div className="cc-visual" style={{ background: card.gradient }}>
              <div className="cc-chip">▬</div>
              <div className="cc-number">•••• •••• •••• 4242</div>
              <div className="cc-bottom-row">
                <span className="cc-name">{card.name}</span>
                <img src={card.logo} alt={card.bank} className="cc-bank-logo" />
              </div>
            </div>
            <div className="cc-info">
              <p className="cc-cashback">💰 {card.cashback}</p>
              <p className="cc-fee">📋 {card.fee}</p>
              <button className="cc-apply-btn">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreditCardSection;