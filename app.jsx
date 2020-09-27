require("dotenv").config()
let express = require("express");
let app = express();
const sequelize = require("./db");
sequelize.sync();
// sequelize.sync({force: true})
app.use(express.json());
app.use(require("./middleware/headers"));


let user = require('./controllers/usercontroller');
app.use('/user', user);

let vendor = require('./controllers/vendorcontroller');
app.use('/vendor', vendor);

let location = require('./controllers/locationcontroller');
app.use('/location', location);

let grocery = require('./controllers/grocerycontroller');
app.use('/grocery', grocery);





app.listen(process.env.PORT, () => {console.log(`App is listening on port ${process.env.PORT}`) ;
});

