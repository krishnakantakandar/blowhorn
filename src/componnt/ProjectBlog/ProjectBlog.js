import React from "react";
import CardBlog from "./CardBlog/CardBlog";
import CardBlogTwo from "./CardBlogTwo/CardBlogTwo";
import "./ProjectBlog.css";
function ProjectBlog() {
  return (
    <div style={{ height: "100vh", width: "100vw", marginTop: "20%" }}>
      <div className="ProjectBlog-container">
        <div className="ProjectBlog-container-Main">
          <div style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "35px", letterSpacing: "3px" }}>
              The Project Blog
            </h1>
            <p style={{ marginTop: "-1.5%", fontSize: "15px" }}>
              Design and layout to help you to win your app
            </p>
          </div>
          <div className="ProjectBlog-Grid">
            <CardBlog urlName="images/gbc.jpg" color="#F3B001" />
            <CardBlog urlName="images/orange.jpg" color="#69C8F6" />
            <CardBlog urlName="images/quench-satisfying.jpg" color="#9357DC" />
            <CardBlogTwo urlName="images/book-design.jpg" color="#F3B001" />
            <CardBlogTwo urlName="images/workstation.jpg" color="#69C8F6" />
            <CardBlogTwo urlName="images/snacks.jpg" color="#9357DC" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBlog;
