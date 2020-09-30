module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{len: [6,16]},
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      // validate:{len: [6,16]},
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
  return User;
};
