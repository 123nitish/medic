const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReminderSchema = new Schema({
  medicinename: { type: String, required: true }, // String is shorthand for {type: String}
  hour: { type: Number, required: true },
  minute: { type: Number, required: true },
  meridian: { type: String, required: true, default: "AM" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("reminder", ReminderSchema);
