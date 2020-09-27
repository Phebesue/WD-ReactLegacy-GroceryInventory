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
router.post("/create", validateSession, (req, res) => {
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
});
// Consider search by name, room type, etc?
// -----Get My location  -----
// GET:   http://localhost:3020/location/
// router.get("/", validateSession, (req, res) => {
//   let userid = req.user.id;
//   location
//     .findAll({
//       where: { userId: userid },
//     })
//     .then((location) => res.status(200).json(location))
//     .catch((err) => res.status(500).json({ error: err }));
// });

// -----  Get All location -----
// GET:   http://localhost:3020/location/all
router.get("/all", (req, res) => {
    Location
    .findAll()
    .then((location) => res.status(200).json(location))
    .catch((err) => res.status(500).json({ error: err }));
});

// -----  Update location  -----
// PUT:   http://localhost:3020/location/:id
router.put("/:id", validateSession, (req, res) => {
  const updateLocation = {
    locationName: req.body.location.locationName,
    room: req.body.location.room,
    place: req.body.location.place,
    type: req.body.location.type,
    locationNotes: req.body.location.locationNotes,
  };
  // Do I need userId here?
  const query = { where: { id: req.params.id } };
  //   const query = { where: { id: req.params.id, userId: req.user.id} };

  Location.update(updateLocation, query)
    .then((location) => res.status(200).json({message: "Location Updated"}))
    .catch((err) => res.status(500).json({ error: err }));
});

// -----  Delete a location Entry  -----
// DEL:   http://localhost:3020/location/:id
router.delete("/:id", (req, res) => {
  Location.destroy({ where: { id: req.params.id } })
    .then((location) => res.status(200).json({message: "Location Deleted"}))
    .catch((err) => res.json(req.errors));
});

module.exports = router;