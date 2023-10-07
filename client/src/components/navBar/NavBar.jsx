import React, { useEffect, useState } from "react";
import "./navBar.scss";
import axios from "axios";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import LoginIcon from "@mui/icons-material/Login";

const NavBar = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8800")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.full_name);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        </div>
        <div className="right">
          {auth ? (
            <div className="profile">
              <img src="" alt="" />
              <button className="name">{name}</button>
              {name == "Chairman" ? (
                <div id="drop-down">
                  <a href="/addSupervisor">
                    <SupervisorAccountIcon />
                    Add Supervisor
                  </a>
                  <a href="/addAuthor">
                    <PersonIcon />
                    Add Author
                  </a>
                  <a href="/addReport">
                    <ArticleIcon />
                    Add Report
                  </a>
                  <button onClick={handleLogout} className="icon">
                    Sign Out
                  </button>
                </div>
              ) : (
                <div id="drop-down">
                  <a href="/addAuthor">
                    <PersonIcon />
                    Add Author
                  </a>
                  <a href="/addReport">
                    <ArticleIcon />
                    Add Report
                  </a>
                  <button onClick={handleLogout} className="icon">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="in-up">
              <a href="/chairmanRegister" className="regi">
                Sign up
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
