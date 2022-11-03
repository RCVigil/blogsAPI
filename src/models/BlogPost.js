const blogPostsSchema = (sequelize, DataTypes) => {
  const blog_posts = sequelize.define(
    "BlogPosts",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: "blog_posts",
      underscored: true,
      timestamps: false,
    }
  );

  blog_posts.associate = (models) => {
    blog_posts.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  };

  return blog_posts;
};

module.exports = blogPostsSchema;