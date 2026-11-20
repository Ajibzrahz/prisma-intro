require("dotenv/config");

const express = require("express");
const prisma = require("./src/lib/prisma");
const PostRoutes = require("./src/modules/post/post-route");
const CommentRoutes = require("./src/modules/comment/comment-route");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", async (request, response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    response.json({ status: "ok" });
  } catch (error) {
    response.status(503).json({
      status: "unavailable",
      error: error.message,
    });
  }
});

PostRoutes(app);
CommentRoutes(app);

const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

async function shutdown() {
  server.close();
  await prisma.$disconnect();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
