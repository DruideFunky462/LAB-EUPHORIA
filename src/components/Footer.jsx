import React from "react";
import InstagramIcon from "@mui/icons/Instagram";
import TwitterIcon from "@mui/icons/Twitter";
import FacebookIcon from "@mui/icons/Facebook";
import LinkedInIcon from "@mui/icons/LinkedIn";
//import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> © 2024 EUPHORIA</p>
    </div>
  );
}

export default Footer;
