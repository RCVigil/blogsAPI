
const CategoriesSchema = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Categories",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: "categories",
      underscored: true,
      timestamps: false,
    }
  );
  return Category;
};

module.exports = CategoriesSchema;
