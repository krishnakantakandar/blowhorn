import React from "react";
import "./CardBlog.css";
function CardBlog(props) {
  return (
    <div className="CardBlog-Container">
      <img src={props.urlName} className="CardBlog-Img"></img>
      <div className="CardBlog-Action" style={{ color: `${props.color}` }}>
        {" "}
        <p>Resource</p>
      </div>
      <div className="CardDesc" style={{ background: `${props.color}` }}>
        <div className="CardBlog-description" style={{ marginTop: "10px" }}>
          <p className="CardBlog-heading">Refreshing Designs</p>

          <p style={{ position: "absolute", bottom: "10%" }}>
            Quench satisfying designs to help
            <br /> you stir uo emotion and tell a storys
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;

// or #69C8F6
// cup #9357DC
// yellow #F3B001

{
  /*  */
}
