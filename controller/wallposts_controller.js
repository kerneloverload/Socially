const PostModel = require("../model/posts_model");
const CommentModel = require("../model/comment_model");
module.exports.view = (req, res) => {
    if(req.isAuthenticated()){
        PostModel.find({},).sort({createdAt: -1})
        .populate({
            path: "comment",
            options: {
                sort: {
                    createdAt: -1
                },
            },
            populate: {
                path: "user"
            },
        })
        .populate("user").exec((err, posts)=>{
            return res.render("user/wallposts", {
                title: "Socially | Posts",
                post: posts,
            });
        });
    }
    else{
        return res.redirect("/signin");
    }
}

module.exports.post = (req, res) => {
    PostModel.create({
        post: req.body.post,
        user: req.user._id
    }, function (err, post){
        if(err){
            
            console.log("error in creating a post", err);
            return;
        }
        return res.redirect("back");
    });
}

module.exports.delete = (req, res) => {
    PostModel.findById(req.params.id,function (err, post) {
        if(err) throw err;
        if(post.user == req.user.id){
            post.remove();
            return res.redirect("back");
        }
        else{
            return res.redirect("back");
        }
    });
}

module.exports.comment = (req, res) => {
    PostModel.findById(req.body.post, (err, post) => {
        if(err) throw err;
        if(post){
            CommentModel.create({
                comment: req.body.comment,
                post: req.body.post,
                user: req.user._id
            }, (err, comment) => {
                if(err){
                    console.log("error in adding comment in post db");
                }
                post.comment.push(comment);
                post.save();
                res.redirect("back");
            });
        }
    });
}

module.exports.photos = (req, res) => {
  res.render("user/photos", {
      title : "Socially | Photos"
  });  
}