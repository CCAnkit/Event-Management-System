const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config.js");


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "12h",});
};


const verifyJwtToken = (token, next) => {
  try {
    const { userId } = jwt.verify(token, JWT_SECRET);
    return userId;
  } catch (err) {
    next(err);
  }
};

module.exports = { generateToken, verifyJwtToken };