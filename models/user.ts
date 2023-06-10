const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  lineCount: Number,
});

const userModel = mongoose.model('alterna', userSchema);

export default userModel;