import React from "react";

const TotalRoi = () => {
  return (
    <div className="anytime_locked_roi">
      <div className="anytime_roi">
        <div className="anytime_roi_left">
          <p>Any TIme </p>
          <p>TOTAL</p>
        </div>
        <div className="anytime_roi_right">
          <h4>0.00 BNB</h4>
          <p>$0.00 USD</p>
        </div>
      </div>
      <div className="locked_roi">
        <div className="locked_roi_left">
          <p>Locked </p>
          <p>TOTAL</p>
        </div>
        <div className="locked_roi_right">
          <h4>0.00 BNB</h4>
          <p>$0.00 USD</p>
        </div>
      </div>
    </div>
  );
};

export default TotalRoi;
