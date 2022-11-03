const { BlogPost, User, Category } = require('../models/index');

const getBlogPostAll = async () => {
  console.log('O BLOGPOST É === ', BlogPost);
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
