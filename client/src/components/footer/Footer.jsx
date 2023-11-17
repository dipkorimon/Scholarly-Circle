import React from "react";
import "./footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
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
          <a href="">
            <EmailIcon />
          </a>
        </div>
        <div className="mid">
          <p>
            Copyright &copy; <span>ScholarlyCircle</span>
          </p>
        </div>
        <div className="bottom">
          <p>
            Made with ❤️ by <span>Dip Kor Imon</span>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <p>All Rights Reserved</p>
        </div>
        <div className="mid">
          <p>
            Department of Computer Science and Telecommunication Engineering
          </p>
        </div>
        <div className="bottom">
          <p>Noakhali Science and Technology University</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
