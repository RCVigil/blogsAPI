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

  posts_categories.associate = ({Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      as: "Category",
      through: posts_categories,
      foreignKey: "category_id",
      otherKey: "id",
    }),
    BlogPost.belongsToMany(Category, {
      as: "BlogPost",
      through: posts_categories,
      foreignKey: "post_id",
      otherKey: "user_id",
    });
  };

  return posts_categories;
};

module.exports = postsCategoriesSchema;
