const postsCategoriesSchema = (sequelize, DataTypes) => {
  const posts_categories = sequelize.define(
    "PostCategory",
    {
      post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "blog_posts",
          key: "user_id",
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        prymaryKey: true,
        references: {
          model: "categories",
          key: "id",
        },
      },
    },
    {
      tableName: "posts_categories",
      timestamps: false,
      onDelete: 'CASCADE',
    }
  );

  posts_categories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "blogPosts",
      through: posts_categories,
      foreignKey: "category_id",
      otherKey: "post_id",
    }),
    models.BlogPost.belongsToMany(models.Category, {
      as: "categories",
      through: posts_categories,
      foreignKey: "post_id",
      otherKey: "category_id",
    });
  };

  return posts_categories;
};

module.exports = postsCategoriesSchema;
