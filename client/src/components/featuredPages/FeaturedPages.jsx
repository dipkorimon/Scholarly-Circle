import React from "react";
import "./featuredPages.scss";
import EastIcon from "@mui/icons-material/East";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";

const FeaturedPages = () => {
  return (
    <div className="featuredPages">
      <h1>Featured Pages</h1>
      <div className="pages">
        <div className="left">
          <div className="members-page">
            <SupervisorAccountIcon
              style={{ fontSize: "35", color: "rgb(229, 18, 46)" }}
            />
            <h3>Faculty Members</h3>
          </div>
          <p>You can find all faculty members information here.</p>
          <div className="link">
            <a href="/supervisors">More info</a>
            <EastIcon style={{ fontSize: "20" }} />
          </div>
        </div>
        <div className="middle">
          <div className="authors-page">
            <PersonIcon style={{ fontSize: "35", color: "rgb(229, 18, 46)" }} />
            <h3>Authors</h3>
          </div>
          <p>You can find all authors information here.</p>
          <div className="link">
            <a href="/authors">More info</a>
            <EastIcon style={{ fontSize: "20" }} />
          </div>
        </div>
        <div className="right">
          <div className="reports-page">
            <ArticleIcon
              style={{ fontSize: "35", color: "rgb(229, 18, 46)" }}
            />
            <h3>Project and Thesis Reports</h3>
          </div>
          <p>You can find all projects and thesis reports here.</p>
          <div className="link">
            <a href="/reports">More info</a>
            <EastIcon style={{ fontSize: "20" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPages;
