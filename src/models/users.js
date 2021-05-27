const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let validator = require("validator");
const UserSchema = new Schema({
  _id: {
    type: String,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  firstName: String,
  lastName: String,
  phNum: String,
  password: String,
  role: String,
  videos_liked: Array,
  videos_watched: Array,
  subscribed: Array,
});

module.exports = mongoose.model("Users", UserSchema);

// required: true,
// unique: true
