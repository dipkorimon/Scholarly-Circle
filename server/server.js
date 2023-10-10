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
    methods: ["POST", "GET", "DELETE"],
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
app.post("/chairmanRegister", (req, res) => {
  const sql =
    "INSERT INTO chairman (`full_name`, `email`, `password`, `current_position`, `phd`, `phone`, `joining_date`, `research_interests`, `photo`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [
      req.body.full_name,
      req.body.email,
      hash,
      req.body.current_position,
      req.body.phd,
      req.body.phone,
      req.body.joining_date,
      req.body.research_interests,
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
app.post("/chairmanLogin", (req, res) => {
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

// For add supervisor
app.post("/addSupervisor", (req, res) => {
  const sql =
    "INSERT INTO supervisor (`full_name`, `email`, `password`, `current_position`, `phd`, `phone`, `joining_date`, `research_interests`, `photo`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [
      req.body.full_name,
      req.body.email,
      hash,
      req.body.current_position,
      req.body.phd,
      req.body.phone,
      req.body.joining_date,
      req.body.research_interests,
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

// For supervisor login
app.post("/supervisorLogin", (req, res) => {
  const sql = "SELECT * FROM supervisor WHERE email = ?";
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

// For add author
app.post("/addAuthor", (req, res) => {
  const sql =
    "INSERT INTO author (`student_id`, `full_name`, `email`, `session`, `batch`, `current_position`, `phone`, `defense_date`, `photo`) VALUES (?)";
  const values = [
    req.body.student_id,
    req.body.full_name,
    req.body.email,
    req.body.session,
    req.body.batch,
    req.body.current_position,
    req.body.phone,
    req.body.defense_date,
    req.body.photo,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Inserting data error in server" });
    }
    return res.json({ Status: "Success" });
  });
});

// For add report
app.post("/addReport", (req, res) => {
  const sql =
    "INSERT INTO report (`title`, `abstract`, `supervisor_name`, `authors_name`, `session`, `category`, `published_date`, `report_type`, `document`, `presentation`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.abstract,
    req.body.supervisor_name,
    req.body.authors_name,
    req.body.session,
    req.body.category,
    req.body.published_date,
    req.body.report_type,
    req.body.document,
    req.body.presentation,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Inserting data error in server" });
    }
    return res.json({ Status: "Success" });
  });
});

// For retrieve reports
app.get("/reports", (req, res) => {
  const sql = "SELECT * FROM report";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For retrieve supervisors
app.get("/supervisors", (req, res) => {
  const sql = "SELECT * FROM supervisor";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For retrieve authors
app.get("/authors", (req, res) => {
  const sql = "SELECT * FROM author";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For delete author
app.delete("/authors/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM author WHERE id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json(err);
    }
    return res.json("Author has been deleted");
  });
});

// For delete supervisor
app.delete("/supervisors/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM supervisor WHERE id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json(err);
    }
    return res.json("Supervisor has been deleted");
  });
});

// For delete report
app.delete("/reports/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM report WHERE id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      res.json(err);
    }
    return res.json("Report has been deleted");
  });
});

app.listen(8800, () => {
  console.log("Connected");
});
