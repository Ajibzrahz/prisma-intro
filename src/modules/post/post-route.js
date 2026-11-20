const { getPostById, getPosts, createPost } = require("./post-controller");

const postRoutes = (app) => {
  app.get("/posts/:id", getPostById);
  app.get("/posts", getPosts);
  app.post("/posts", createPost);
};

module.exports = postRoutes;
