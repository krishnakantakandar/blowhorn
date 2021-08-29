import React from "react";
import "./Features.css";
import FeaturesComponent from "./FeaturesComponent";
const Features = () => {
  return (
    <>
      <div className="our-features">
        <div className="our-features-heading">
          <div className="our-features-heading-details">
            <p style={{ fontSize: "40px", fontWeight: "bolder" }}>
              Our Features
            </p>
            <p>Check Out The Awesome Features below</p>
          </div>
        </div>
        <div className="features-card">
          <FeaturesComponent
            head="Certification"
            des="Each of the plan will be "
          ></FeaturesComponent>
          <FeaturesComponent
            head="Notification"
            des="Each of the plan will be "
          ></FeaturesComponent>
          <FeaturesComponent
            head="Bundles"
            des="Each of the plan will be "
          ></FeaturesComponent>
          <FeaturesComponent
            head="Coupons"
            des="Each of the plan will be "
          ></FeaturesComponent>
          <FeaturesComponent
            head="Building Blocks"
            des="Each of the plan will be "
          ></FeaturesComponent>
          <FeaturesComponent
            head="Developer tools"
            des="Each of the plan will be "
          ></FeaturesComponent>
        </div>
      </div>
    </>
  );
};

export default Features;
