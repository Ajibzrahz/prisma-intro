const {createComment, getCommentsByPostId} = require("./comment-controller");

const commentRoutes = (app) => {
  app.post("/comments", createComment);
  app.get("/comments/:postId", getCommentsByPostId);
};

module.exports = commentRoutes;