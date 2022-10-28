const blogPostsSchema = (sequelize, DataTypes) => {
  const blog_posts = sequelize.define(
    "BlogPost",
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
      underscored: false,
      timestamps: false,
    }
  );

  blog_posts.associate = (models) => {
    blog_posts.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    })
  };

  return blog_posts;
};

module.exports = blogPostsSchema;