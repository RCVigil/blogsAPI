const blogPostsSchema = (sequelize, DataTypes) => {
  const blog_posts = sequelize.define(
    "blog_post",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: "blog_posts",
      underscored: true,
      timestamps: false,
    }
  );
  return blog_posts;
};

module.exports = blogPostsSchema;