const prisma = require("../../lib/prisma");

const getPostById = async (request, response) => {
  const id = request.params.id;
  try {
    const posts = await prisma.post.findUnique({where: {id: parseInt(id)}});
    response.json(posts);
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
}

const getPosts = async (request, response) => {
  try {
    const posts = await prisma.post.findMany();
    response.json(posts);
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
}

const createPost = async (request, response) => {
  const {
     title, content } = request.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    response.status(201).json(post);
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { getPostById, getPosts, createPost };