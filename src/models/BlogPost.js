const blogPostsSchema = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define(
    "BlogPost",
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

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  };

  return BlogPosts;
};

module.exports = blogPostsSchema;