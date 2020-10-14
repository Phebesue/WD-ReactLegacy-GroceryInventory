let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const Location = require("../db").import("../models/location");

// Endpoints
// POST:  http://localhost:3020/location/create
// GET:   http://localhost:3020/location/
// GET:   http://localhost:3020/location/all
// PUT:   http://localhost:3020/location/:id
// DEL:   http://localhost:3020/location/:id

// -----  location Create  -----
// POST:  http://localhost:3020/location/create
// router.post("/create", validateSession, (req, res) => {
router.post("/create", (req, res) => {
  if (!req.err && req.user.admin){
  const locationEntry = {
    locationName: req.body.location.locationName,
    room: req.body.location.room,
    place: req.body.location.place,
    type: req.body.location.type,
    locationNotes: req.body.location.locationNotes,
    userId: req.user.id,
  };
  Location
    .create(locationEntry)
    .then((location) => res.status(200).json(location))
    .catch((err) => res.status(500).json({ error: err }));
  }else{
  return res.status(500).send({ message: "Not Authorized"});

  }
});
// -----  Get All location -----
// GET:   http://localhost:3020/location/all
router.get("/all", (req, res) => {
  Location
  .findAll()
  .then((location) => res.status(200).json(location))
  .catch((err) => res.status(500).json({ error: err }));
});


// Consider search by name, room type, etc?
// -----Get One location by Id  -----
// GET:   http://localhost:3020/location/:id
router.get("/one/:id", (req, res) => {
  Location.findOne({
      where: {id: req.params.id  }})
    .then((location) => res.status(200).json(location))
    .catch((err) => res.status(500).json({ error: err }));
});



// -----  Update location  -----
// PUT:   http://localhost:3020/location/:id
router.put("/update/:id", (req, res) => {
  if (!req.err && req.user.admin){
  const updateLocation = {
    locationName: req.body.locationName,
    room: req.body.room,
    place: req.body.place,
    type: req.body.type,
    locationNotes: req.body.locationNotes,
  };
    const query = { where: { id: req.params.id } };
   Location.update(updateLocation, query)
    .then((location) => res.status(200).json({message: "Location Updated", location}))
    .catch((err) => res.status(500).json({ error: err }));
  } else{
    return res.status(500).send({ message: "Not Authorized"});
}})

// -----  Delete a location Entry  -----
// DEL:   http://localhost:3020/location/:id
router.delete("/:id", (req, res) => {
  if (!req.err && req.user.admin){
  Location.destroy({ where: { id: req.params.id } })
    .then((location) => res.status(200).json({message: "Location Deleted"}))
    .catch((err) => res.json(req.err));
  } else{
    return res.status(500).send({ message: "Not Authorized"});
}}
)

module.exports = router;