import TeamComponent from "./TeamComponent";
import React from "react";

const Team = () => {
  return (
    <>
      <div className="The-team">
        {" "}
        <div className="team-heading">
          <p>Our Team</p>
          <p style={{ fontSize: "30px", fontWeight: "bolder" }}>
            An Incredible Team
          </p>
          <p style={{ fontSize: "30px", fontWeight: "bolder" }}>
            of amazing Individuals
          </p>
        </div>
        <div className="team-details">
          <div className="team-details-inner">
            <TeamComponent
              desig="Ceo Co-founder"
              name="Freddy Smith"
              im="images/avt-03.jpg"
            ></TeamComponent>
            <TeamComponent
              desig="CTO Co-founder"
              name="Carl Jones"
              im="images/avt-03.jpg"
            ></TeamComponent>
            <TeamComponent
              desig="Ceo Co-founder"
              name="Freddy Smith"
              im="images/avt-07.jpg"
            ></TeamComponent>
            <TeamComponent
              desig="Ceo Co-founder"
              name="Freddy Smith"
              im="images/avt-03.jpg"
            ></TeamComponent>
            <TeamComponent
              desig="Ceo Co-founder"
              name="Freddy Smith"
              im="images/avt-07.jpg"
            ></TeamComponent>
            <TeamComponent
              desig="Ceo Co-founder"
              name="Freddy Smith"
              im="images/avt-03.jpg"
            ></TeamComponent>
            <TeamComponent
              desig="Ceo Co-founder"
              name="Freddy Smith"
              im="images/avt-07.jpg"
            ></TeamComponent>
            <TeamComponent
              desig="Ceo Co-founder"
              name="Freddy Smith"
              im="images/avt-03.jpg"
            ></TeamComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
