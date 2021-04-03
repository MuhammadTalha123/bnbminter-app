import React from "react";
import mainLogo from "./bnblogo.png";

const Navbar = () => {
  return (
    <div className="main_navbar_div">
      <div className="logo_telegram">
        <img src={mainLogo} width="200" />
        <button id="telegram_btn">
          <a
            href="https://t.me/bnbminter"
            target="_blank"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            <i className="fab fa-telegram"></i>TELEGRAM
          </a>
        </button>
      </div>
      <div className="wallet_other_btns">
        <div className="navbar_bnb">
          <h3>0 BNB</h3>
        </div>
        <div className="other_btn">
        <button id="audit_btn">
          <a>AUDIT</a>
        </button>
        <button id="contract_btn">
          <a
            href="https://bscscan.com/address/0x734Bf4623296dAb55de6Fced4D1395e6638e9D65"
            target="_blank"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
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
    </div>
  );
};

export default Navbar;
