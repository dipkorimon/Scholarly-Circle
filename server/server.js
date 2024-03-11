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

// Queries for create tables if not exists
// 1. Chairman table
db.query(
  `
  CREATE TABLE IF NOT EXISTS chairman (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
  )
`,
  (err) => {
    if (err) throw err;
  }
);

// 2. Author table
db.query(
  `
  CREATE TABLE IF NOT EXISTS author (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(255),
    full_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    session VARCHAR(255),
    defense_date DATETIME,
    photo VARCHAR(255)
  )
`,
  (err) => {
    if (err) throw err;
  }
);

// 3. Supervisor table
db.query(
  `
  CREATE TABLE IF NOT EXISTS supervisor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    supervisor_id VARCHAR(255),
    full_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    current_position VARCHAR(255),
    photo VARCHAR(255)
  )
`,
  (err) => {
    if (err) throw err;
  }
);

// 4. Report table
db.query(
  `
  CREATE TABLE IF NOT EXISTS report (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    abstract LONGTEXT,
    supervisor_id VARCHAR(255),
    first_author_id VARCHAR(255),
    second_author_id VARCHAR(255),
    third_author_id VARCHAR(255),
    fourth_author_id VARCHAR(255),
    fifth_author_id VARCHAR(255),
    session VARCHAR(255),
    category VARCHAR(255),
    defense_date DATETIME,
    report_type VARCHAR(255),
    degree VARCHAR(255),
    publication VARCHAR(255),
    document VARCHAR(255)
  )
`,
  (err) => {
    if (err) throw err;
  }
);

// 5. Author Requests table
db.query(
  `
  CREATE TABLE IF NOT EXISTS user_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(255),
    full_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    supervisor_id VARCHAR(255),
    session VARCHAR(255),
    defense_date DATETIME,
    photo VARCHAR(255),
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending'
  )
`,
  (err) => {
    if (err) throw err;
  }
);

// For handling supervisors & authors account request
app.post("/userRequests", upload.single("file"), (req, res) => {
  const sql =
    "INSERT INTO user_requests (`student_id`, `full_name`, `email`, `password`, `supervisor_id`, `session`, `defense_date`, `photo`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [
      req.body.student_id,
      req.body.full_name,
      req.body.email,
      hash,
      req.body.supervisor_id,
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

app.get("/userRequests", (req, res) => {
  const sql = "SELECT * FROM user_requests";
  db.query(sql, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.put("/approve-request/:id", (req, res) => {
  const requestId = req.params.id;
  db.query(
    "UPDATE user_requests SET status = ? WHERE id = ?",
    ["approved", requestId],
    (err) => {
      if (err) throw err;

      res.json({ message: "Request approved successfully." });
    }
  );
});

app.put("/reject-request/:id", (req, res) => {
  const requestId = req.params.id;
  db.query(
    "UPDATE user_requests SET status = ? WHERE id = ?",
    ["rejected", requestId],
    (err) => {
      if (err) throw err;

      res.json({ message: "Request rejected successfully." });
    }
  );
});

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
  const sql2 = "SELECT * FROM supervisor WHERE supervisor_id = ?";
  const sql3 = "SELECT * FROM author WHERE student_id = ?";
  const sql4 = "SELECT * FROM author WHERE student_id = ?";
  const sql5 = "SELECT * FROM author WHERE student_id = ?";
  const sql6 = "SELECT * FROM author WHERE student_id = ?";
  const sql7 = "SELECT * FROM author WHERE student_id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, report) => {
    if (err) throw err;
    const supervisorId = report[0].supervisor_id;
    db.query(sql2, [supervisorId], (err, supervisor) => {
      if (err) throw err;
      const firstAuthorId = report[0].first_author_id;
      db.query(sql3, [firstAuthorId], (err, firstAuthor) => {
        if (err) throw err;
        const secondAuthorId = report[0].second_author_id;
        db.query(sql4, [secondAuthorId], (err, secondAuthor) => {
          if (err) throw err;
          const thirdAuthorId = report[0].third_author_id;
          db.query(sql5, [thirdAuthorId], (err, thirdAuthor) => {
            if (err) throw err;
            const fourthAuthorId = report[0].fourth_author_id;
            db.query(sql6, [fourthAuthorId], (err, fourthAuthor) => {
              if (err) throw err;
              const fifthAuthorId = report[0].fifth_author_id;
              db.query(sql7, [fifthAuthorId], (err, fifthAuthor) => {
                if (err) throw err;
                res.json({
                  report,
                  supervisor,
                  firstAuthor,
                  secondAuthor,
                  thirdAuthor,
                  fourthAuthor,
                  fifthAuthor,
                });
              });
            });
          });
        });
      });
    });
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

// For author's reports finding
app.get("/authorReports/:studentID", (req, res) => {
  const sql1 =
    "SELECT * FROM report WHERE first_author_id = ? OR second_author_id = ? OR third_author_id = ? OR fourth_author_id = ? OR fifth_author_id = ?";
  const sql2 = "SELECT * FROM author WHERE student_id = ?";
  const student_id = req.params.studentID;
  const first_author_id_value = req.params.studentID;
  const second_author_id_value = req.params.studentID;
  const third_author_id_value = req.params.studentID;
  const fourth_author_id_value = req.params.studentID;
  const fifth_author_id_value = req.params.studentID;
  db.query(
    sql1,
    [
      first_author_id_value,
      second_author_id_value,
      third_author_id_value,
      fourth_author_id_value,
      fifth_author_id_value,
    ],
    (err, data1) => {
      if (err) throw err;
      db.query(sql2, [student_id], (err, data2) => {
        if (err) throw err;
        const objectData = data2[0].full_name;
        res.json({ data1, objectData });
      });
    }
  );
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

// For searching tool
app.get("/search", (req, res) => {
  const searchTerm = req.query.term;
  const sql = `SELECT * from report WHERE title LIKE '%${searchTerm}%' OR abstract LIKE '%${searchTerm}%' OR session LIKE '%${searchTerm}%' OR category LIKE '%${searchTerm}%' OR report_type LIKE '%${searchTerm}%' OR degree LIKE '%${searchTerm}%'`;
  db.query(sql, (err, data) => {
    if (err) return err;
    return res.json(data);
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
