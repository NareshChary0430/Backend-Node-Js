import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;