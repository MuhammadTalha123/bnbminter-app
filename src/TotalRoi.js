import React from "react";

const TotalRoi = () => {
  return (
    <div class="anytime_locked_roi">
      <div class="anytime_roi">
        <div class="anytime_roi_left">
          <p>Any TIme </p>
          <p>TOTAL</p>
        </div>
        <div class="anytime_roi_right">
          <h4>0.00 BNB</h4>
          <p>$0.00 USD</p>
        </div>
      </div>
      <div class="locked_roi">
        <div class="locked_roi_left">
          <p>Locked </p>
          <p>TOTAL</p>
        </div>
        <div class="locked_roi_right">
          <h4>0.00 BNB</h4>
          <p>$0.00 USD</p>
        </div>
      </div>
    </div>
  );
};

export default TotalRoi;
