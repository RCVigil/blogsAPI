
const UsersSchema = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: "users",
      underscored: false,
      timestamps: false,
    }
  );
  return Users;
};

module.exports = UsersSchema;
