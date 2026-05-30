import React, { useState } from 'react';
import './FlightBooking.css';

const tabs = ['Flights', 'Hotels', 'Trains', 'Bus', 'Cab'];

const FlightBooking = () => {
  const [activeTab, setActiveTab] = useState('Flights');
  const [tripType, setTripType] = useState('oneway');

  return (
    <section className="flight-section">
      <div className="flight-container">
        <h2 className="flight-heading">Book Travel</h2>
        <div className="flight-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flight-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flight-form">
          {activeTab === 'Flights' && (
            <>
              <div className="trip-type">
                {['oneway', 'roundtrip', 'multicity'].map((t) => (
                  <label key={t} className="radio-label">
                    <input
                      type="radio"
                      name="triptype"
                      value={t}
                      checked={tripType === t}
                      onChange={() => setTripType(t)}
                    />
                    {t === 'oneway' ? 'One Way' : t === 'roundtrip' ? 'Round Trip' : 'Multi City'}
                  </label>
                ))}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>From</label>
                  <input type="text" placeholder="Delhi (DEL)" />
                </div>
                <button className="swap-btn">⇄</button>
                <div className="form-group">
                  <label>To</label>
                  <input type="text" placeholder="Mumbai (BOM)" />
                </div>
                <div className="form-group">
                  <label>Departure</label>
                  <input type="date" />
                </div>
                {tripType === 'roundtrip' && (
                  <div className="form-group">
                    <label>Return</label>
                    <input type="date" />
                  </div>
                )}
                <div className="form-group">
                  <label>Travellers & Class</label>
                  <input type="text" placeholder="1 Adult, Economy" readOnly />
                </div>
                <button className="search-btn">Search Flights</button>
              </div>
            </>
          )}

          {activeTab === 'Hotels' && (
            <div className="form-row">
              <div className="form-group">
                <label>City / Area / Hotel Name</label>
                <input type="text" placeholder="e.g. Delhi" />
              </div>
              <div className="form-group">
                <label>Check-in</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Check-out</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Rooms & Guests</label>
                <input type="text" placeholder="1 Room, 2 Adults" readOnly />
              </div>
              <button className="search-btn">Search Hotels</button>
            </div>
          )}

          {(activeTab === 'Trains' || activeTab === 'Bus' || activeTab === 'Cab') && (
            <div className="form-row">
              <div className="form-group">
                <label>From</label>
                <input type="text" placeholder="Enter origin" />
              </div>
              <div className="form-group">
                <label>To</label>
                <input type="text" placeholder="Enter destination" />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" />
              </div>
              <button className="search-btn">Search {activeTab}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FlightBooking;