import React from "react";

const TotalBNB = () => {
  return (
    <div className="Total_bnb_main_div">
      <div className="copy_url_div">
        <h2>https://bnbminter.app/?ref=null</h2>
      </div>
      <div className="total_bnb_parts">
        <div className="mint_bnb_div">
          <p>Staked BNB</p>
          <h2>0.00</h2>
          <p>Available BNB to Mint</p>
          <div className="mint_bnb_btn">
            <button>MINT BNB</button>
          </div>
        </div>
        <div className="plan_div">
          <p>Staked BNB (LOCKED)</p>
          <h2>0.00</h2>
          <p>Total Plans length</p>
          <h4>PLAN</h4>
        </div>
        <div className="copy_url_div">
          <p>Total Referral Earned</p>
          <p>Referral Withdrawn</p>
          <div className="copy_url_btn">
            <button>COPY LINK</button>
          </div>
        </div>
        <div className="plan_div">
          <p>Total BNB Staked</p>
          <h2>5,629.27 BNB</h2>
          <p>Total Contract Balance</p>
          <h2>3,782.76 BNB</h2>
        </div>
      </div>
    </div>
  );
};

export default TotalBNB;
