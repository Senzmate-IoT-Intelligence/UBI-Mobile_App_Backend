const { default: mongoose } = require("mongoose");
const verifySchema = new mongoose.Schema({

    verificationNo: {
        type: String,
        default: "",
      }
});

module.exports = mongoose.model("Verify", verifySchema);