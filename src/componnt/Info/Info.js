import React from "react";
import "./Info.css";

import ListInfo from "./ListInfo/ListInfo";
function Info() {
  return (
    <div style={{ height: "100vh", width: "100vw", marginTop: "30px" }}>
      <div className="Info-Container">
        <div className="InfoMain-container">
          <div style={{}}>
            <img
              src="images/productivity.png"
              style={{ height: "100%", wi0dth: "50%" }}
            ></img>
          </div>
          <div className="InfoMain-Txt">
            <h1>Boost Productivity</h1>

            <p>
              Build an atmosphere that create productivity in your <br />{" "}
              Organization and your company culture
            </p>

            <ListInfo description="Maxmize productivity and growth" />
            <ListInfo description="Speed past your competition" />
            <ListInfo description="Learn the top techniques" />
          </div>

          <div className="InfoMain-Txt2">
            <h1>Automated Task</h1>

            <p>
              save time and money with our revolutionary <br /> services. we are
              the leader in the industry
            </p>

            <ListInfo description="Automated task managment workflow" />
            <ListInfo description="Details analytice for your data" />
            <ListInfo description="Some awesome integrations" />
          </div>

          <div style={{}}>
            <img
              src="images/settings.png"
              style={{ height: "100%", wi0dth: "50%" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
