import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
            <a href="https://github.com/mjavason" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/michael-orji-1274b1220" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/michaelsxn_" target="_blank" rel="noreferrer"><TwitterIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;