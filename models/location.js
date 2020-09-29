module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("location", {
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    place: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM("refrigerated", "dry", "frozen"),
      allowNull: false,
    },
    locationNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  return Location;
};
