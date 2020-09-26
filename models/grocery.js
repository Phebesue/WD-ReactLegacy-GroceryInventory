module.exports = (sequelize, DataTypes) => {
  const Grocery = sequelize.define("grocery", {
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
    OnHand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    vendorId: {
      type: DataTypes.NUMBER,
    },
    groceryNotes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Grocery;
};
