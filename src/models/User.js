const UsersSchema = (sequelize, DataTypes) => {

  const Users = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: false,
    }
  );

  Users.associate = (models) => {
    Users.hasMany(models.BlogPost, {
      foreignKey: 'user_id',
      as: 'User',
    })
  };

  return Users;
};

module.exports = UsersSchema;
