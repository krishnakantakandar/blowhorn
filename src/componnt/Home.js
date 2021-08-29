import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="HomePage">
        <div className="heading-grid">
          <div className="company-name">
            <p>nullBrains.</p>
          </div>
          <div className="nav-bar">
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Blog</li>
              <li>Content</li>
              <li>
                <img src="images/search.png"></img>
              </li>
            </ul>
          </div>
          <div className="sign-up">
            <button className="btn-sign-in">Sign In</button>
            <button className="btn-sign-up">Sign Up</button>
          </div>
        </div>
        <div className="details-home">
          <div className="crafting">
            <p>Start Crafting Your</p>
            <p style={{ color: "rgb(92,90,236)" }}>Next Great Idea</p>
          </div>
          <div className="crafting-details">
            <p>Symplyfing the creation of landing page, blog pages,</p>
            <p>application pages and so much more</p>
          </div>
          <div className="purchase">
            <button className="btn-purchase">Purchase Now</button>
            <p> Load more</p>
          </div>
          <div className="company">
            <p>Trusted by Leading Companies</p>
            <img src="images/disney-plus.svg"></img>
            <img src="images/google.svg"></img>
            <img src="images/hubspot.svg"></img>
            <img src="images/youtube.svg"></img>
            <img src="images/slack.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
