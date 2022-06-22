const {
  resetPasswordRequestController,
  resetPasswordController,
  changePasswordController,
} = require("../controller/authController");

const router = require("express").Router();

router.post("/requestResetPassword", resetPasswordRequestController);
router.post("/resetPassword", resetPasswordController);
router.post("/changePassword", changePasswordController);

module.exports = router;
