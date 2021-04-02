import React from "react";
import mainLogo from "./bnblogo.png";

const Navbar = () => {
  return (
    <div className="main_navbar_div">
      <div className="logo_telegram">
        <img src={mainLogo} width="200" />
        <button id="telegram_btn">
          <a>
            <i className="fab fa-telegram"></i>TELEGRAM
          </a>
        </button>
      </div>
      <div className="wallet_other_btns">
        <h3>0 BNB</h3>
        <button id="audit_btn">
          <a>AUDIT</a>
        </button>
        <button id="contract_btn">
          <a>
            <i className="fas fa-file-contract"></i>CONTRACT
          </a>
        </button>
        <button id="how_works_btn">
          <a>HOW IT WORKS?</a>
        </button>
        <button id="connect_wallet_btn">
          <a>CONNECT WALLET</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
