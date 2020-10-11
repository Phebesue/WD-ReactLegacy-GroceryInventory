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
      type: DataTypes.ENUM("refrigerated", "dry", "frozen"),
      allowNull: false,
    },
    storageContainer: {
      type: DataTypes.ENUM("box", "jar", "bag", "carton", "none"),
      allowNull: true,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unitOfMeasure: {
      type: DataTypes.ENUM("each", "grams", "kilograms", "ounces", "pounds", "milliliters", "liters", "fluid ounces", "gallons", "none" ),
      allowNull: false,
    },
    onHand: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    // locationId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    // vendorId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    groceryNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  return Grocery;
};
