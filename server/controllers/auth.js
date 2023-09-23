import { db } from "../database.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // check existing user
  const q = "SELECT * FROM users WHERE fullName = ? OR email = ?";
  db.query(q, [req.body.fullName, req.body.email], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length) return res.status(409).json("User Already Exists!");

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users(`fullName`, `email`, `password`, `skills_and_expertise`, `research_interest`, `department`, `current_position`, `linkedIn_profile`, `location`, `photo`) VALUES(?)";
    const values = [
      req.body.fullName,
      req.body.email,
      hash,
      req.body.skills_and_expertise,
      req.body.research_interest,
      req.body.department,
      req.body.current_position,
      req.body.linkedIn_profile,
      req.body.location,
      req.body.photo,
    ];
    db.query(q, [values], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
