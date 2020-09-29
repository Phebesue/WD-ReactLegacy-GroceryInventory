const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
const sequelize = new Sequelize('grocery','postgres', process.env.PASS, {
host: 'localhost',
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
Locations = sequelize.import("./models/location");
Vendors = sequelize.import("./models/vendor");
Groceries = sequelize.import("./models/grocery");

// User.hasMany(Groceries);

// User belongs to Groceries
// Groceries.belongsTo(User);

// User.hasMany(Locations);
// Locations.belongsTo(User);
// User.hasMany(Vendors);
// Vendors.belongsTo(User);

// Groceries.hasMany(Locations);
// Locations.belongsToMany(Groceries);

// Locations.hasMany(Groceries);
// Groceries.belongsTo(Locations);

// User.hasMany(Vendors);
// Vendors.belongsTo(User);


// Groceries.hasMany(Vendors);
// Vendors.belongsTo(Groceries)

// User.hasOne(UserInfo);
// UserInfo.belongsTo(User);
// UserInfo.belongsTo(User,{as: "Owner"});

module.exports = sequelize;