const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: { type: String, required: true }, // String is shorthand for {type: String}
  lastname: { type: String, required: true }, // String is shorthand for {type: String}
  username: { type: String, required: true, unique: true  }, // String is shorthand for {type: String}
  email: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
  password: { type: String, required: true}, // String is shorthand for {type: String}
  date: { type: Date, default: Date.now },
});


const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports = User;