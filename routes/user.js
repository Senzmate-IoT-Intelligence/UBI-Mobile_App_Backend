const router = require("express").Router();
const {
  createUser,
  signin,
  getuserbyemail,
  getusers,
} = require("../controller/user");
const {paymentStripe} = require("../controller/payment");
const { validate, validateUser } = require("../middleware/validator");

router.post("/create", validateUser, validate, createUser);
router.post("/signin", signin);
router.get("/user", getuserbyemail);
router.get("/users", getusers);
router.post("/stripePayment", paymentStripe);
module.exports = router;
