const { BlogPost, User, Category } = require('../models');

const getBlogPostAll = async () => {
  console.log('blogPostService', BlogPost, User, Category);
  const posts = await BlogPost.findAll({
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
