const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }
},{
    timestamps: true,
});

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = CommentModel;