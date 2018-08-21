const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    oauthID: { 
      type: String,
      unique: true,
      strict: false,
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;