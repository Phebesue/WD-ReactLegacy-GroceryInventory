const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
const sequelize = new Sequelize('grocery','postgres', process.env.PASS, {
host: 'localhost',
dialect: 'postgres'
});

sequelize.authenticate().then(
	function(){
		console.log('Connected to media postgres database');
	},
	function(err){
		console.log(err);
	}
);

module.exports = sequelize;