const { default: mongoose } = require("mongoose");
const paymentSchema = new mongoose.Schema({

    dateAndTime: {
        type: String,
        default: "",
      },
     Amount: {
        type: String,
        default: "",
      },
      status: {
        type: String,
        default: "",
      }
});

module.exports = mongoose.model("Payment", paymentSchema);