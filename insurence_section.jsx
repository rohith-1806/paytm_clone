import React from 'react';
import './InsuranceSection.css';

const insuranceData = [
  {
    title: 'Term Life Insurance',
    desc: 'Protect your family\'s future at just ₹490/month',
    icon: '🛡️',
    tag: 'Most Popular',
    color: '#e8f4fd',
    accent: '#00b9f1',
  },
  {
    title: 'Health Insurance',
    desc: 'Comprehensive coverage starting ₹299/month',
    icon: '🏥',
    tag: 'Best Value',
    color: '#e8fdf0',
    accent: '#00b894',
  },
  {
    title: 'Car Insurance',
    desc: 'Instant renewal & cashless claims',
    icon: '🚗',
    tag: 'Instant',
    color: '#fff8e1',
    accent: '#f4a020',
  },
  {
    title: '2-Wheeler Insurance',
    desc: 'Secure your bike starting ₹714/year',
    icon: '🏍️',
    tag: 'Quick',
    color: '#fce8f3',
    accent: '#e84393',
  },
];

const InsuranceSection = () => {
  return (
    <section className="insurance-section">
      <div className="section-header">
        <h2 className="section-title">Insurance for Everyone</h2>
        <p className="section-sub">Trusted by 5 Crore+ Indians</p>
      </div>
      <div className="insurance-grid">
        {insuranceData.map((item, i) => (
          <div
            className="insurance-card"
            key={i}
            style={{ '--card-bg': item.color, '--card-accent': item.accent }}
          >
            <div className="insurance-tag" style={{ background: item.accent }}>
              {item.tag}
            </div>
            <div className="insurance-icon">{item.icon}</div>
            <h3 className="insurance-title">{item.title}</h3>
            <p className="insurance-desc">{item.desc}</p>
            <button
              className="insurance-btn"
              style={{ background: item.accent }}
            >
              Get Quote →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceSection;