import React from "react";
import haze2 from "./haze2.png";
import footerlogo1 from "./footerlogo1.png";

const Footer = () => {
  return (
    <div class="footer_main_div">
      <div class="footer_left">
        <span>Powered by</span>
        <br />
        <span>
          <a href="#">Binance Smart Chain</a>
        </span>
      </div>
      <div class="footer_center">
        <img src={haze2} width="90" />
        <img src={footerlogo1} width="90" />
      </div>
      <div class="footer_right">
        <span>© 2021 by AV. All rights reserved.</span>
        <br />
        <span>
          <a href="#">www.BNBMinter.app</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
