import React from "react";

const FeaturesComponent = ({ head, des }) => {
  return (
    <>
      <div className="card-of-features">
        <div className="features-icon"></div>
        <div className="features-details">
          <p>{head}</p>
          <p>{des}</p>
        </div>
      </div>
    </>
  );
};

export default FeaturesComponent;
