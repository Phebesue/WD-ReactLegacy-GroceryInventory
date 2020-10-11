const router = require("express").Router();
const User = require("../db").import("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let validateSession = require("../middleware/validate-session");

// Endpoints
// POST:  http://localhost:3020/user/signup
// POST:  http://localhost:3020/user/login
// PUT :  http://localhost:3020/user/
// PUT :  http://localhost:3020/user/admin
// DEL :  http://localhost:3020/user/
// GET :  http://localhost:3020/user/


// -----  User Signup  -----
// POST:  http://localhost:3020/user/signup
router.post("/signup", (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
	  username: req.body.username,
    // password: req.body.password
    password: bcrypt.hashSync(req.body.password, 11),
    admin: req.body.admin,
  })
    .then((user) => {
      let sessionToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.json({
        user: user,
        message: "User Created!",
        sessionToken: sessionToken,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

// -----  User Login  -----
// POST:  http://localhost:3020/user/login
router.post("/login", (req, res) => {
  User.findOne({ where: { username: req.body.username} }).then(
    (user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, matches) => {
          if (matches) {
            let sessionToken = jwt.sign(
              { id: user.id},
              process.env.JWT_SECRET,
              {
                expiresIn: "1d",
              }
            );
            res.status(200).json({
              user: user,
              message: "Successfully logged in!",
              sessionToken: sessionToken,
            });
          } else {
            res.status(502).send({ error: "Bad Gateway" });
          }
        });
      } else {
        res.status(500).send({ error: "User does not exist" });
      }
    },
    (err) => res.status(501).send({ error: "Failed to Process" })
  );
});


// -----  Update User for Admin  -----
// PUT :  http://localhost:3020/user/admin
router.put("/admin/:id", validateSession, (req, res) => {
  if (!req.err && req.user.admin){
  	const updateUser={
	  	firstName: req.body.firstName,
	  	lastName: req.body.lastName,
      username: req.body.username,
      admin: req.body.admin,
	};
	if (req.body.password != ''){
		updateUser.password = bcrypt.hashSync(req.body.password, 11)
		console.log(req.body.password)
	}
  const query = { where: { id: req.params.id} };
  	User.update(updateUser, query)
    	.then((user) => res.status(201).json({ message: `${user} records updated` }))
    	.catch((err) => res.status(500).json({ error: err }));
  }}
)
  
// -----  Update User  -----
// PUT :  http://localhost:3020/user/
router.put("/", validateSession, (req, res) => {
  let userid = req.user.id;

  	const updateUser={
	  	firstName: req.body.firstName,
	  	lastName: req.body.lastName,
	  	username: req.body.username,
	};
	if (req.body.password != ''){
		updateUser.password = bcrypt.hashSync(req.body.password, 11)
		console.log(req.body.password)
	}
  	const query = { where: {id: userid} };
  	User.update(updateUser, query)
    	.then((user) => res.status(201).json({ message: `${user} records updated` }))
    	.catch((err) => res.status(500).json({ error: err }));
	});

// -----  Delete User  -----
// DEL :  http://localhost:3020/user/
router.delete("/:id", validateSession, function (req, res) {
  if (!req.err && req.user.admin){
  // let userid = req.user.id;
  const query = {where: { id: req.params.id }};

  User.destroy(query)
  .then(() => res.status(200).json({ message: "User Deleted"}))
  .catch((err) => res.status(500).json({error:err}));
}else{ 
  return res.status(500).send({ message: "Not Authorized"});
}}
)

// -----  Get User  -----
// GET :  http://localhost:3020/user/
router.get("/", validateSession, (req, res) => {
    
	User.findOne({ where: {id: req.user.id } })
	  .then((user) => res.status(201).json(user))
	  .catch((err) => res.status(500).json({ error: err }));
  });
  // -----  Get All Users -----
// GET:   http://localhost:3020/user/all
router.get("/all",validateSession,(req, res) => {
  if (!req.err && req.user.admin){
    User.findAll()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ error: err }));
  }else{ 
  return res.status(500).send({ message: "Not Authorized"});
}
}
)

module.exports = router;

// Admin
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAxNDEyNjg4LCJleHAiOjE2MDE0OTkwODh9.Xl8GVCet67c4UfrAu1JRc6i3xn9Ey3OXuQ5Xh9Pi4FI

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAxNDk5MDEzLCJleHAiOjE2MDE1ODU0MTN9.edkOYXW4xZBu_FTh2cjN7QvXCFqDzAbBzT2mm37cB6U
*/
// User
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjAxNDEyNjE1LCJleHAiOjE2MDE0OTkwMTV9.jXCRh8tw9bO4Lsl5d90ZA7QHQsFU7OSY_nr0Z9bXX8
*/

// Null
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjAxNDEyNjYzLCJleHAiOjE2MDE0OTkwNjN9.3o4IDW5ti4nnBoANoGq7eLbW9ocpFYaafo-t4NdX7IU
*/

// https://whats-for-dinner-server2.herokuapp.com/
// git.heroku.com/whats-for-dinner-server2.git
// 