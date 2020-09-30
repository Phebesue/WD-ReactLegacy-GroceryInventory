require("dotenv").config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
// const sequelize = new Sequelize('grocery','postgres', process.env.PASS, {
// host: 'localhost',
dialect: 'postgres'
});

sequelize.authenticate().then(
	function(){
		console.log('Connected to grocery postgres database');
	},
	function(err){
		console.log(err);
	}
);

User = sequelize.import("./models/user");
LocationX = sequelize.import("./models/location");
Vendor = sequelize.import("./models/vendor");
Grocery = sequelize.import("./models/grocery");

User.hasMany(Grocery);
Grocery.belongsTo(User);



// User.hasMany(Location);
// Location.belongsTo(User);
// User.hasMany(Vendor);
// Vendor.belongsTo(User);

// Grocery.hasMany(Location);
// Location.belongsTo(Grocery);

LocationX.hasMany(Grocery);
Grocery.belongsTo(LocationX);

// User.hasMany(Vendor);
// Vendor.belongsTo(User);


Vendor.hasMany(Grocery);
Grocery.belongsTo(Vendor)


// UserInfo.belongsTo(User,{as: "Owner"});

module.exports = sequelize;