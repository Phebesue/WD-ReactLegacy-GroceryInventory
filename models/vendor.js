module.exports =  (sequelize, DataTypes) => {
    const Vendor = sequelize.define("vendor", {
      vendorName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      website: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
             },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      vendorNotes: {
        type: DataTypes.STRING,
        allowNull: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
          }
    })
    return Vendor;
  }