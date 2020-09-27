module.exports = (sequelize, DataTypes) => {
  const Grocery = sequelize.define("grocery", {
    upc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    groceryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    storageType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    storageContainer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unitOfMeasure: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    onHand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    groceryNotes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Grocery;
};
