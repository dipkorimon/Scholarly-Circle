const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const salt = 10;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "scholarly_circle",
});

// For chairman register
app.post("/register", (req, res) => {
  const sql =
    "INSERT INTO chairman (`full_name`, `email`, `password`, `current_position`, `phd`, `phone`, `blood_group`, `joining_date`, `research_interests`, `about`, `photo`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [
      req.body.full_name,
      req.body.email,
      hash,
      req.body.current_position,
      req.body.phd,
      req.body.phone,
      req.body.blood_group,
      req.body.joining_date,
      req.body.research_interests,
      req.body.about,
      req.body.photo,
    ];
    db.query(sql, [values], (err, data) => {
      if (err) {
        return res.json({ Error: "Inserting data error in server" });
      }
      return res.json({ Status: "Success" });
    });
  });
});

// For chairman login
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM chairman WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) {
      return res.json({ Error: "Login error in server" });
    }
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Password compare error" });
          if (response) {
            const name = data[0].full_name;
            const token = jwt.sign({ name }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            return res.json({ Status: "Success" });
          } else {
            return res.json({ Error: "Password not matched" });
          }
        }
      );
    } else {
      return res.json({ Error: "Login Failed" });
    }
  });
});

// For verify account
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not correct" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", full_name: req.name });
});

// For logout
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

// For post an item

app.listen(8800, () => {
  console.log("Connected");
});
