const {
    // signup,
    // signin,
    requestPasswordReset,
    resetPassword,
    changePassword,
  } = require("../services/authService");
  
  // const signUpController = async (req, res, next) => {
  //   const signupService = await signup(req.body);
  //   return res.json(signupService);
  // };
  
  const resetPasswordRequestController = async (req, res, next) => {
    const requestPasswordResetService = await requestPasswordReset(
      req.body.email
    );
    return res.json(requestPasswordResetService);
  };
  
  const resetPasswordController = async (req, res, next) => {
    const resetPasswordService = await resetPassword(
      req.body.userId,
      req.body.token,
      req.body.password
    );
    return res.json(resetPasswordService);
  };
  
  const changePasswordController = async (req, res, next) => {
    const changePasswordService = await changePassword(
      req.body.userId,
      req.body.oldPassword,
      req.body.password
    );
    return res.json(changePasswordService);
  };
  
  module.exports = {
    // signUpController,
    resetPasswordRequestController,
    resetPasswordController,
    changePasswordController,
  };
  