import React from "react";
import haze2 from "./haze2.png";
import footerlogo1 from "./footerlogo1.png";

const Footer = () => {
  return (
    <div className="footer_main_div">
      <div className="footer_left">
        <p>Powered by</p>
          <a href="https://www.binance.org/en/smartChain" target="_blank">Binance Smart Chain</a>
      </div>
      <div className="footer_center">
        <img src={haze2} width="90" />
        <img src={footerlogo1} width="90" />
      </div>
      <div className="footer_right">
        <p>© 2021 by AV. All rights reserved.</p>
          <a href="https://bnbminter.app/" target="_blank">www.BNBMinter.app</a>
      </div>
    </div>
  );
};

export default Footer;
