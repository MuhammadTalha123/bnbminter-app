import React from "react";
import mainLogo from "./bnblogo.png";

const Navbar = () => {
  return (
    <div className="main_navbar_div">
      <div className="logo_telegram">
        <img src={mainLogo} width="200" />
        <button>
          <a>
            <i className="fab fa-telegram"></i>TELEGRAM
          </a>
        </button>
      </div>
      <div className="wallet_other_btns">
        <h3>0 BNB</h3>
        <button>
          <a>AUDIT</a>
        </button>
        <button>
          <a>
            <i className="fas fa-file-contract"></i>CONTRACT
          </a>
        </button>
        <button>
          <a>HOW IT WORKS?</a>
        </button>
        <button>
          <a>CONNECT WALLET</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
