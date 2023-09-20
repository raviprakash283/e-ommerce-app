import React from "react";
import "./aboutSection.css";
// import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/ravi_Prakash_28";
  };
   const mystyle = {fontFamily:  "Gill Sans MT" };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h3 component="h1" style={mystyle }>About Us</h3>

        <div>
          <div>
            < img
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://tse2.mm.bing.net/th?id=OIP.bYTbuR9bi6QQPROuybfZTAHaEK&pid=Api&P=0&h=180"
              alt="Founder"
            /> 
             <h3 style={mystyle }> Ravi Prakash </h3>
            <button onClick={visitInstagram} className="btn">
              Visit Instagram
            </button>

            <span>
              This is a sample wesbite made by Ravi Prakash. Our sole purpose is to bring revolution 
              in the online market by providing quality products. Shipping Pan India.
            </span>

          </div>
          <div className="aboutSectionContainer2">
             <h3 component="h2" style={mystyle }>Our Brands</h3> 
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              YouTube
            </a>

            <a href="https://instagram.com/ravi_prakash_28" target="blank">
                Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
