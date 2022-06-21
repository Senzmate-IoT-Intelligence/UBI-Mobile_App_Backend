const { default: mongoose } = require("mongoose");
const tripSchema = new mongoose.Schema({

    date: {
        type: String,
        default: "",
      },
     To: {
        type: String,
        default: "",
      },
      totalDistance: {
        type: String,
        default: "",
      }
});

module.exports = mongoose.model("Trip", tripSchema);