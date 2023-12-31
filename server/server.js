const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const salt = 10;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "scholarly_circle",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/documents");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// For chairman register
app.post("/chairmanRegister", (req, res) => {
  const sql =
    "INSERT INTO chairman (`full_name`, `email`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [req.body.full_name, req.body.email, hash];
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
app.post("/addSupervisor", upload.single("file"), (req, res) => {
  const sql =
    "INSERT INTO supervisor (`supervisor_id`, `full_name`, `email`, `password`, `current_position`, `photo`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [
      req.body.supervisor_id,
      req.body.full_name,
      req.body.email,
      hash,
      req.body.current_position,
      req.file.filename,
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

// For add author
app.post("/addAuthor", upload.single("file"), (req, res) => {
  const sql =
    "INSERT INTO author (`student_id`, `full_name`, `email`, `password`, `session`, `defense_date`, `photo`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [
      req.body.student_id,
      req.body.full_name,
      req.body.email,
      hash,
      req.body.session,
      req.body.defense_date,
      req.file.filename,
    ];
    db.query(sql, [values], (err, data) => {
      if (err) {
        return res.json({ Error: "Inserting data error in server" });
      }
      return res.json({ Status: "Success" });
    });
  });
});

// For author login
app.post("/authorLogin", (req, res) => {
  const sql = "SELECT * FROM author WHERE email = ?";
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

// For add report
app.post("/addReport", upload.single("file"), (req, res) => {
  const sql =
    "INSERT INTO report (`title`, `abstract`, `supervisor_id`, `first_author_id`, `second_author_id`, `third_author_id`, `fourth_author_id`, `fifth_author_id`, `session`, `category`, `defense_date`, `report_type`, `degree`, `publication`, `document`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.abstract,
    req.body.supervisor_id,
    req.body.first_author_id,
    req.body.second_author_id,
    req.body.third_author_id,
    req.body.fourth_author_id,
    req.body.fifth_author_id,
    req.body.session,
    req.body.category,
    req.body.defense_date,
    req.body.report_type,
    req.body.degree,
    req.body.publication,
    req.file.filename,
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

// For retrieve single report
app.get("/reports/:id", (req, res) => {
  const sql = "SELECT * FROM report WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For category wise report filtering
app.get("/categories/:category", (req, res) => {
  const sql = "SELECT * FROM report WHERE category = ?";
  const category = req.params.category;
  db.query(sql, [category], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For session wise report filtering
app.get("/sessions/:session", (req, res) => {
  const sql = "SELECT * FROM report WHERE session = ?";
  const session = req.params.session;
  db.query(sql, [session], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For degree wise report filtering
app.get("/degrees/:degree", (req, res) => {
  const sql = "SELECT * FROM report WHERE degree = ?";
  const degree = req.params.degree;
  db.query(sql, [degree], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For type wise report filtering
app.get("/reportTypes/:reportType", (req, res) => {
  const sql = "SELECT * FROM report WHERE report_type = ?";
  const report_type = req.params.reportType;
  db.query(sql, [report_type], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For supervisor's reports finding
app.get("/supervisorReports/:supervisorID", (req, res) => {
  const sql1 = "SELECT * FROM report WHERE supervisor_id = ?";
  const sql2 = "SELECT * FROM supervisor WHERE supervisor_id = ?";
  const supervisor_id = req.params.supervisorID;
  db.query(sql1, [supervisor_id], (err, data1) => {
    if (err) throw err;
    db.query(sql2, [supervisor_id], (err, data2) => {
      if (err) throw err;
      const objectData = data2[0].full_name;
      res.json({ data1, objectData });
    });
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

// For position wise supervisor filtering
app.get("/currentPositions/:currentPosition", (req, res) => {
  const sql = "SELECT * FROM supervisor WHERE current_position = ?";
  const currentPosition = req.params.currentPosition;
  db.query(sql, [currentPosition], (err, data) => {
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

// For session wise author filtering
app.get("/authorSessions/:session", (req, res) => {
  const sql = "SELECT * FROM author WHERE session = ?";
  const session = req.params.session;
  db.query(sql, [session], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For update author
app.get("/updateAuthor/:id", (req, res) => {
  const sql = "SELECT * FROM author WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For update supervisor
app.get("/updateSupervisor/:id", (req, res) => {
  const sql = "SELECT * FROM supervisor WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// For update report
app.get("/updateReport/:id", (req, res) => {
  const sql = "SELECT * FROM report WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
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

// For view statistics
app.get("/home", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM ";
  db.query(sql + "supervisor", (err, result1) => {
    if (err) throw err;
    db.query(sql + "author", (err, result2) => {
      if (err) throw err;
      db.query(sql + "report", (err, result3) => {
        if (err) throw err;
        const counts = {
          table1: result1[0].count,
          table2: result2[0].count,
          table3: result3[0].count,
        };
        res.json(counts);
      });
    });
  });
});

app.listen(8800, () => {
  console.log("Connected");
});
