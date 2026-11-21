const prisma = require("../../lib/prisma");

const createComment = async (request, response) => {
  const { content, postId } = request.body;
  try {
    const comment = await prisma.comment.create({
      data: {
        content,
        postId: parseInt(postId),
      },
    });
    response.status(201).json(comment);
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
};

const getCommentsByPostId = async (request, response) => {
  const postId = request.params.postId;
  try {
    const comments = await prisma.comment.findMany({
      where: { postId: parseInt(postId) },
    });
    response.json(comments);
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
};

const deleteComment = async (request, response) => {
  const commentId = request.params.commentId;
  try {
    await prisma.comment.delete({
      where: { id: parseInt(commentId) },
    });
    response.status(204).send();
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  } 
}

module.exports = { createComment, getCommentsByPostId, deleteComment };
