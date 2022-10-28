
const CategoriesSchema = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    "categorie",
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
