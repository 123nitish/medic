const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  name: { type: String, required: true }, // String is shorthand for {type: String}
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("profile", ProfileSchema);

