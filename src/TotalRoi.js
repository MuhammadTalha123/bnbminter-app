import React from "react";

const TotalRoi = () => {
  return (
    <div className="anytime_locked_roi">
      <div className="anytime_roi">
        <div className="anytime_roi_left">
          <h3>Any TIme </h3>
          <p>Total ROI</p>
        </div>
        <div className="anytime_roi_right">
          <h2>0.00 BNB</h2>
          <span>$0.00 USD</span>
        </div>
      </div>
      <div className="locked_roi">
        <div className="locked_roi_left">
          <h3>Locked </h3>
          <p>Total ROI</p>
        </div>
        <div className="locked_roi_right">
          <h2>0.00 BNB</h2>
          <span>$0.00 USD</span>
        </div>
      </div>
    </div>
  );
};

export default TotalRoi;
