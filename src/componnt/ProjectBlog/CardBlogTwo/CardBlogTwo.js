import React from "react";
import "./CardBlogTwo.css";
function CardBlogTwo(props) {
  return (
    <div className="CardBlogTwo-Container">
      <img src={props.urlName} className="CardBlog-Img"></img>
      <div className="CardBlogTwo-Action" style={{ color: `${props.color}` }}>
        {" "}
        <p>Resource</p>
      </div>
      <div className="CardDesc" style={{ background: `${props.color}` }}>
        <div className="CardBlogTwo-description">
          <p className="CardBlogTwo-heading" style={{ marginTop: "25px" }}>
            Refreshing Designs
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBlogTwo;

// or #69C8F6
// cup #9357DC
// yellow #F3B001

{
  /*  */
}
