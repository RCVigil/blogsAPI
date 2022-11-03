const { BlogPosts, User, Categories } = require('../models');

const getBlogPostAll = async () => {
  console.log('blogPostService', BlogPosts, User, Categories);
  const posts = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
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
