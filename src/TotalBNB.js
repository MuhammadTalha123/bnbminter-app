import React from "react";

const TotalBNB = () => {
  return (
    <div className="Total_bnb_main_div">
      <div className="url_div">
        <span>Copied! "https://bnbminter.app/?ref=null"</span>
      </div>
      <div className="total_bnb_parts">
        <div className="mint_bnb_div">
          <span>Staked BNB</span>
          <h2>0.00</h2>
          <span>Available BNB to Mint</span>
          <div className="mint_bnb_btn">
            <button>MINT BNB</button>
          </div>
        </div>
        <div className="plan_div">
          <span>Staked BNB (LOCKED)</span>
          <h2>0.00</h2>
          <span>Total Plans length</span>
          <h4>PLAN</h4>
        </div>
        <div className="copy_url_div">
          <span>Total Referral Earned</span>
          <span>Referral Withdrawn</span>
          <div className="copy_url_btn">
            <button>COPY LINK</button>
          </div>
        </div>
        <div className="total_contract_balance_div">
          <span>Total BNB Staked</span>
          <h2>5,629.27 BNB</h2>
          <br />
          <span>Total Contract Balance</span>
          <h2>3,782.76 BNB</h2>
        </div>
      </div>
    </div>
  );
};

export default TotalBNB;
