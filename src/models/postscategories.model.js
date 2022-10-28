
const postsCategoriesSchema = (sequelize, DataTypes) => {
  const posts_categories = sequelize.define(
    "posts_categories",
    {
      post_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      tableName: "posts_categories",
      timestamps: false,
    }
  );
  return posts_categories;
};

module.exports = postsCategoriesSchema;