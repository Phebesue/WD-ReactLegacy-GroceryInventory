require("dotenv").config()
let express = require("express");
let app = express();
const sequelize = require("./db");
sequelize.sync();
// sequelize.sync({force: true})
app.use(express.json());
app.use(require("./middleware/headers"));





app.listen(process.env.PORT, () => {console.log(`App is listening on port ${process.env.PORT}`) ;
});

