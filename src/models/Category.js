
const CategoriesSchema = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    "Category",
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
  return categories;
};

module.exports = CategoriesSchema;
