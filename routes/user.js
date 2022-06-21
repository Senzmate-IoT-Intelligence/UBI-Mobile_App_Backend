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
} = require("../controller/user");
const { validate, validateUser } = require("../middleware/validator");

router.post("/create", validateUser, validate, createUser);
router.post("/signin", signin);
router.get("/user", getuserbyemail);
router.get("/users", getusers);
router.get("/trip",getTrip)
router.get("/payment",getPayment)
router.get("/policy",getPolicy)
router.get("/verify",getVerify)
module.exports = router;
