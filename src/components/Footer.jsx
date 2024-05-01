import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/TwitterIcon';
import FacebookIcon from '@material-ui/icons/FacebookIcon';
import LinkedInIcon from '@material-ui/icons/LinkedInIcon';
import "../styles/footer.css";

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
