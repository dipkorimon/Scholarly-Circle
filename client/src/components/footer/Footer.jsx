import React from "react";
import "./footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="top">
          <a href="https://www.linkedin.com/in/dipkorimon/">
            <LinkedInIcon />
          </a>
          <a href="https://www.facebook.com/dipkorimon/">
            <FacebookIcon />
          </a>
          <a href="https://github.com/dipkorimon">
            <GitHubIcon />
          </a>
          <a href="/contact">
            <EmailIcon />
          </a>
        </div>
        <div className="mid">
          <p>
            Copyright &copy; <span>Scholarly Circle</span>
          </p>
        </div>
        <div className="bottom">
          <p>
            Made with ❤️ by <span>Dip Kor Imon</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
