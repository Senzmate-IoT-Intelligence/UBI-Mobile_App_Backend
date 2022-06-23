const router = require("express").Router();
const {
  createUser,
  signin,
  getuserbyemail,
  getusers,
  getTrip,
  getPayment,
  getPolicy,
  getVerify,
  postVerify
} = require("../controller/user");

const {
  resetPasswordRequestController,
  resetPasswordController,
  changePasswordController,
} = require("../controller/authController");


const { validate, validateUser } = require("../middleware/validator");

router.post("/create", validateUser, validate, createUser);
router.post("/signin", signin);
router.get("/user", getuserbyemail);
router.get("/users", getusers);
router.get("/trip",getTrip);
router.get("/payment",getPayment);
router.get("/policy",getPolicy);
router.get("/verify",getVerify);
router.post("/verifyCreate",postVerify)
router.post("/requestResetPassword", resetPasswordRequestController);
router.post("/resetPassword", resetPasswordController);
router.post("/changePassword", changePasswordController);
module.exports = router;
