
const mongoose = require('mongoose');

const schima = new mongoose.Schema({
    linkID: String,
    Link:String,
})

const UserDB =
  mongoose.models.mdzobayerhossen520 ||
  mongoose.model("mdzobayerhossen520 ", schima);

module.exports = UserDB;

