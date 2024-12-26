import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import passport from '../assets/images/passport.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={passport} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mjavason" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/michael-orji-1274b1220" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/michaelsxn_" target="_blank" rel="noreferrer"><TwitterIcon/></a>
          </div>
          <h1>Michael Orji</h1>
          <p>Backend Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mjavason" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/michael-orji-1274b1220" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/michaelsxn_" target="_blank" rel="noreferrer"><TwitterIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;