import React, { useEffect, useState } from "react";
import "./navBar.scss";
import axios from "axios";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import LoginIcon from "@mui/icons-material/Login";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [pendingCount, setPendingCount] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8800")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.full_name);
          setPendingCount(res.data.pendingCount);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8800/logout")
      .then((res) => {
        location.reload(true);
        localStorage.removeItem("ChairmanLogin");
        localStorage.removeItem("SupervisorLogin");
        localStorage.removeItem("AuthorLogin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const chairman = localStorage.getItem("ChairmanLogin");
  const supervisor = localStorage.getItem("SupervisorLogin");

  return (
    <div className="navBar">
      <div className="left">
        <a href="/">
          <img src="/logo.png" alt="" />
        </a>
        <a href="/">ScholarlyCircle</a>
      </div>
      <div className="links">
        <div className="middle">
          <a href="/">Home</a>
          <a href="/supervisors">Supervisors</a>
          <a href="/authors">Authors</a>
          <a href="/reports">Reports</a>
          <a href="/search" className="search">
            <SearchIcon />
          </a>
        </div>
        <div className="right">
          {auth ? (
            <div className="notify-profile">
              {chairman || supervisor ? (
                <div className="notify">
                  <a href="/userRequests">
                    <button className="notify-btn">
                      <NotificationsActiveIcon />
                      <span>{pendingCount}</span>
                    </button>
                  </a>
                </div>
              ) : (
                <div></div>
              )}
              <div className="profile">
                <AccountBoxIcon />
                <button className="name">{name}</button>
                {chairman ? (
                  <span className="logInfo">Chairman</span>
                ) : supervisor ? (
                  <span className="logInfo">Supervisor</span>
                ) : (
                  <span className="logInfo">Author</span>
                )}
                {chairman ? (
                  <div id="drop-down">
                    <a href="/addSupervisor">
                      <SupervisorAccountIcon />
                      <button>Add Supervisor</button>
                    </a>
                    <a href="/addAuthor">
                      <PersonIcon />
                      <button>Add Author</button>
                    </a>
                    <a href="/addReport">
                      <ArticleIcon />
                      <button>Add Report</button>
                    </a>
                    <button onClick={handleLogout} className="icon">
                      Sign Out
                    </button>
                  </div>
                ) : supervisor ? (
                  <div id="drop-down">
                    <a href="/addAuthor">
                      <PersonIcon />
                      <button>Add Author</button>
                    </a>
                    <a href="/addReport">
                      <ArticleIcon />
                      <button>Add Report</button>
                    </a>
                    <button onClick={handleLogout} className="icon">
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div id="drop-down">
                    <a href="/addReport">
                      <ArticleIcon />
                      <button>Add Report</button>
                    </a>
                    <button onClick={handleLogout} className="icon">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="in-up">
              <div className="request">
                <button className="name">
                  <a href="/usersRequest">Request for an Account</a>
                </button>
              </div>
              <a href="/chairmanRegister" className="regi">
                <button>Sign up</button>
              </a>
              <div className="login-as">
                <button className="name">Sign in</button>
                <div id="drop-down">
                  <a href="/chairmanLogin">
                    <LoginIcon />
                    Sign in as Chairman
                  </a>
                  <a href="/supervisorLogin">
                    <LoginIcon />
                    Sign in as Supervisor
                  </a>
                  <a href="/authorLogin">
                    <LoginIcon />
                    Sign in as Author
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
