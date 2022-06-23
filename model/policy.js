const { default: mongoose } = require("mongoose");
const policySchema = new mongoose.Schema({

    policyNumber: {
        type: String,
        default: "",
      },
     dateOfIssue: {
        type: String,
        default: "",
      },
      policyExpiryDate: {
        type: String,
        default: "",
      },
      coveringRange: {
        type: String,
        default: "",
      },
      policyValue: {
        type: String,
        default: "",
      }
});

module.exports = mongoose.model("Policy", policySchema);