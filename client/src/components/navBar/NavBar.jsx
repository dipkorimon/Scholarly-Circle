import React, { useEffect, useState } from "react";
import "./navBar.scss";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import Profile from "/profile.png";

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
        localStorage.removeItem("login");
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
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="right">
          {auth ? (
            <div className="out">
              <img src={Profile} alt="" />
              <p href="/profile" className="name">
                {name}
              </p>
              <a href="/addSupervisor">Add Supervisor</a>
              <a href="/addAuthor">Add Author</a>
              <a href="/addReport">Add Report</a>
              <button onClick={handleLogout} className="icon">
                <LogoutIcon
                  sx={{ color: "rgb(255, 255, 255)", cursor: "pointer" }}
                />
              </button>
            </div>
          ) : (
            <div className="in-up">
              <a href="/register" className="regi">
                Sign up
              </a>
              <a href="/login" className="logi">
                Sign in
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
