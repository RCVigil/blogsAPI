const { getBlogPostAll } = require('../services/blogPost.service');

const getBlogPostControl = async (_req, res) => {
  const buscaBlogPost = await getBlogPostAll();
  console.log('O BLOGPOST NA CONTROLLER É:       ===    ', buscaBlogPost);

  return res.status(200).json(buscaBlogPost);
};

module.exports = {
  getBlogPostControl,
};