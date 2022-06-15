const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  wirter: { type: ObjectId, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true }
},{
  timestamps : true
});

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };