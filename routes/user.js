const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login/loginController");
const auth = require("../middleWare/auth");
const { check, validationResult } = require("express-validator");

// Public || Get Register User
router.post(
  "/signup",
  [check("name", "name is Required").not().isEmpty()],
  [check("email", "email is Required").not().isEmpty()],
  [check("password", "password is Required").not().isEmpty()],
  loginController.register
);

// Public || Get Login User
router.post(
  "/Login",
  [check("email", "email is Required").not().isEmpty()],
  [check("password", "password is Required").not().isEmpty()],
  loginController.login
);

// auth
router.use(auth);

// Public || Update User
router.post(
  "/UpdateUser",
  [check("name", "name is Required").not().isEmpty()],
  [check("bio", "bio is Required").not().isEmpty()],
  loginController.UpdateUser
);

// Public || Add subscribe
router.post(
  "/subscribe",
  [check("id", "id is Required").not().isEmpty()],
  loginController.subscribeID
);

// Private || UnSubscribe
router.post(
  "/unSubscribe",
  [check("id", "id is Required").not().isEmpty()],
  loginController.unSubscribe
);

// Private || Add Rating
router.post(
  "/Rating",
  [check("id", "id is Required").not().isEmpty()],
  [check("rating", "rating is Required").not().isEmpty()],
  loginController.Rating
);

// Private || Add Rating
router.post(
  "/checkSub",
  [check("id", "id is Required").not().isEmpty()],
  loginController.checkSub
);

// Private || Add subData
router.get("/subData", loginController.subData);

// Public || Add Rating
router.get("/createdPodcast", loginController.createdPodcast);

module.exports = router;
