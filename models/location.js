module.exports =  (sequelize, DataTypes) => {
    const Locations = sequelize.define("locations", {
      locationName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      room: {
        type: DataTypes.STRING,
        allowNull: false
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
            },
      locationNotes: {
        type: DataTypes.STRING,
        allowNull: true
      },
    })
    return Locations;
  }