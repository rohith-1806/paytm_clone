<section className="recharge-container">

  <div className="recharge-left">

    <h2>Recharges & Bill Payments</h2>

    <div className="services">

      <div className="service-box">
        <span>📱</span>
        <p>Mobile Recharge</p>
      </div>

      <div className="service-box">
        <span>📺</span>
        <p>DTH Recharge</p>
      </div>

      <div className="service-box">
        <span>🚗</span>
        <p>FASTag Recharge</p>
      </div>

      <div className="service-box">
        <span>💡</span>
        <p>Electricity Bill</p>
      </div>

      <div className="service-box">
        <span>💳</span>
        <p>Loan EMI</p>
      </div>

      <div className="service-box">
        <span>➕</span>
        <p>View All</p>
      </div>

    </div>

    {/* Recharge API Form */}

    <div className="recharge-form">

      <h3>Mobile Recharge</h3>

      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />

      <input
        type="text"
        placeholder="Operator"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={rechargeNow}>
        Recharge Now
      </button>

    </div>

    {/* Recharge History */}

    <div className="history-section">

      <h3>Recent Recharges</h3>

      {
        recharges.map((item) => (
          <div className="history-box" key={item._id}>

            <div>
              <h4>{item.mobileNumber}</h4>
              <p>{item.operator}</p>
            </div>

            <span>₹{item.amount}</span>

          </div>
        ))
      }

    </div>

  </div>

  {/* Right Ad */}

  <div className="recharge-ad">

    <img
      src="https://assetscdn1.paytm.com/images/catalog/view/1726051527180.png"
      alt=""
    />

  </div>

</section>