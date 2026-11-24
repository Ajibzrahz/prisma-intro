const {createComment, getCommentsByPostId} = require("./comment-controller");

const commentRoutes = (app) => {
  app.post("/comments", createComment);
  app.get("/comments/:postId", getCommentsByPostId);
  app.delete("/comments/:commentId", deleteComment);
  app.put("/comments/:commentId", updateComment);
};

module.exports = commentRoutes;