var jwt = require("jsonwebtoken");
const JWT_SECRET = "idontlikecoding";

//Creating the middleware function 'getuser' to get user details from awt Token
const getuser = (req, res, next) => {

  // To get user from jwt and add id to req obj

  // Giving Token to HTTP header as "token" to get user details
  const awtToken = req.header("token");

  // If token is wrong then send bad status to user
  if (!awtToken) {
    res.status(401).send({ error: "Use valid tokens to authenticate" });
  }

  // try catch block
  try {

    //verifying the token with our JWT_SECRET
    const data = jwt.verify(awtToken, JWT_SECRET);
    req.user = data.user;

    // adding next to call next funtion after "getuser" in ROUTE 3: of auth.js
    next();

  } catch (error) {
    // If Token is wrong then send error message
      console.error(error.message);
      res.status(500).send("Use valid tokens to authenticate");
  }
};

module.exports = getuser;