const { BlogPosts, User, Category } = require('../models');

const getBlogPostAll = async () => {
  console.log('blogPostService', BlogPosts, User, Category);
  const posts = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  console.log(
    `
  
  OS POSTS DENTRO DA SERVICE É ${posts}
  
  `,
    posts,
  );

  return posts;
};

module.exports = {
  getBlogPostAll,
};
