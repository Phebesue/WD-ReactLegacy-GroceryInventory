let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const Grocery = require("../db").import("../models/grocery");
const User = require("../db").import("../models/user");
const LocationX = require("../db").import("../models/location");
const Vendor = require("../db").import("../models/vendor");

// Endpoints
// POST:  http://localhost:3020/grocery/create
// GET:   http://localhost:3020/grocery/:id
// GET:   http://localhost:3020/grocery/all
// PUT:   http://localhost:3020/grocery/:id
// DEL:   http://localhost:3020/grocery/:id

// -----  grocery Create  -----
// POST:  http://localhost:3020/grocery/create
// router.post("/create", validateSession, (req, res) => {
router.post("/create", (req, res) => {
  const groceryEntry = {
    upc: req.body.grocery.upc,
    groceryName: req.body.grocery.groceryName,
    storageType: req.body.grocery.storageType,
    storageContainer: req.body.grocery.storageContainer,
    quantity: req.body.grocery.quantity,
    unitOfMeasure: req.body.grocery.unitOfMeasure,
    onHand: req.body.grocery.onHand,
    locationId: req.body.grocery.locationId,
    vendorId: req.body.grocery.vendorId,
    groceryNotes: req.body.grocery.groceryNotes,
    userId: req.user.id,
  };
  Grocery
    .create(groceryEntry)
    .then((grocery) => res.status(200).json(grocery))
    .catch((err) => res.status(500).json({ error: err }));
});
// Consider search by name, storageType quantity, etc?
// -----Get My grocery  -----
// GET:   http://localhost:3020/grocery/
// router.get("/:id", validateSession, (req, res) => {
router.get("/:id", (req, res) => {
  // let userid = req.user.id;
  Grocery
    // .findAll({
      .findOne({
        where: { id: req.params.id },include: "vendors"
      })
    // })
    .then((grocery) => res.status(200).json(grocery))
    .catch((err) => res.status(500).json({ error: err }));
});

// -----  Get All grocery -----
// GET:   http://localhost:3020/grocery/all
// router.get("/all", validateSession, (req, res) => {
router.get("/all", (req, res) => {
  Grocery.findAll()
    .then((grocery) => res.status(200).json(grocery))
    .catch((err) => res.status(500).json({ error: err }));
});

// -----  Update grocery  -----
// PUT:   http://localhost:3020/grocery/:id
// router.put("/:id", validateSession, (req, res) => {
router.put("/:id",(req, res) => {
  const updateGrocery = {
    upc: req.body.grocery.upc,
    groceryName: req.body.grocery.groceryName,
    storageType: req.body.grocery.storageType,
    storageContainer: req.body.grocery.storageContainer,
    quantity: req.body.grocery.quantity,
    unitOfMeasure: req.body.grocery.unitOfMeasure,
    onHand: req.body.grocery.onHand,
    locationId: req.body.grocery.locationId,
    vendorId: req.body.grocery.vendorId,
    groceryNotes: req.body.grocery.groceryNotes,
  };
  // Do I need userId here?
  const query = { where: { id: req.params.id } };
  //   const query = { where: { id: req.params.id, userId: req.user.id} };

  Grocery
    .update(updateGrocery, query)
    .then((grocery) => res.status(200).json({message: "Grocery Item Updated"}))
    .catch((err) => res.status(500).json({ error: err }));
});

// -----  Delete a grocery Entry  -----
// DEL:   http://localhost:3020/grocery/:id
// router.delete("/:id", validateSession, (req, res) => { 
router.delete("/:id",(req, res) => { 
   if (!req.err && req.user.admin){
  Grocery
    .destroy({ where: { id: req.params.id } })
    .then((grocery) => res.status(200).json({message: "Grocery Item Deleted"}))
    .catch((err) => res.json(req.errors));
  }else {
    return res.status(500).send({ message: "Not Authorized"});
}}
)

module.exports = router;
