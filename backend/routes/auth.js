const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getuser = require("../middleware/getuser");

// declaring JWT private key
const JWT_SECRET = "idontlikecoding";

// ROUTE 1: Create a user using: POST "/api/auth/createuser". No authentication req
router.post(
  "/createuser",
  [
    body("firstname", "First name must contain 3 characters").isLength({
      min: 3,
    }),
    body("lastname", "Last name must contain 3 characters").isLength({
      min: 3,
    }),
    body("username", "username must be of 6 or more characters").isLength({
      min: 6,
    }),
    body("password", "password must be of 6 or more characters").isLength({
      min: 6,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    // Error for bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // try and catch block for any uneven occured errors then catch will send error/ bad req

    try {
      // creating user to check unique mail or username

      let user = await User.findOne(
        { email: req.body.email }, //using findone func for taking unique email
        { username: req.body.username } //using findone func for taking unique username
      );

      // if user has entered used mail or username then this response will trigger
      if (user) {
        return res.status(400).json({
          //   success,
          error: "entered username/email has already been used",
        });
      }

      // creating salt and hash for the password

      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(req.body.password, salt);
      //   const conpass = await bcrypt.hash(req.body.conpassword, salt);

      // reating 'User'(from User.js) to take the details of user and passing it to 'user'

      user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: pass,
        // conpassword: conpass,
      });

      // Payload for JWT(here we can either use string or objects)
      const data = {
        // creating user data object for payload using unique key id
        user: {
          id: user.id,
        },
      };

      //created the ‘authtoken’ function in which we have used the jwt.sign method
      const authToken = jwt.sign(data, JWT_SECRET); //Jwt.sign method takes two parameters and returns the promise
      //   success = true;

      res.json({ authToken }); //taking token in response
      // res.json(user); //printing details of user to json
      // console.log(req.body); //printing details of user to console
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Authenticating a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    // creating validation for the user inputs
    body("password", "password must be of 6 or more characters").isLength({
      min: 6,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    // let success = false;
    //cheaking for error regarding validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // try and catch block for any uneven occured errors then catch will send error/ bad req

    try {
      let user = await User.findOne({ email });
      if (!user) {
        // success = false;
        return res.status(400).json({
          success,
          error: "please try to login with correct credentials",
        });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        // success = false;
        return res.status(400).json({
          //   success,
          error: "please try to login with correct credentials",
        });
      }

      // for ideal case (correct credentials) we will send the payload to user
      const data = {
        // creating user data object for payload
        user: {
          id: user.id,
        },
      };

      //created the ‘authtoken’ function in which we have used the jwt.sign method
      const authToken = jwt.sign(data, JWT_SECRET); //Jwt.sign method takes two parameters and returns the promise
      //   success = true;
      res.json({ /*success,*/ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Get User details using: POST "/api/auth/getuser". Login required

router.post("/getuser", getuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server ErrorFhea");
  }
});

module.exports = router;
