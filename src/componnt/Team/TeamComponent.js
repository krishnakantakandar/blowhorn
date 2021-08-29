import React from "react";
import "./Team.css";

const TeamComponent = ({ desig, name, im }) => {
  return (
    <>
      <div className="team-pic-name">
        <img src={im}></img>
        <p>{name}</p>
        <p style={{ color: "blue", margin: 0 }}>{desig}</p>
      </div>
    </>
  );
};
export default TeamComponent;
