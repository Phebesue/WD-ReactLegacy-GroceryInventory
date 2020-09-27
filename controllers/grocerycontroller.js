let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const grocery = require("../db").import("../models/grocery");

// Endpoints
// POST:  http://localhost:3020/grocery/create
// GET:   http://localhost:3020/grocery/
// GET:   http://localhost:3020/grocery/all
// PUT:   http://localhost:3020/grocery/:id
// DEL:   http://localhost:3020/grocery/:id

// -----  grocery Create  -----
// POST:  http://localhost:3020/grocery/create
router.post("/create", validateSession, (req, res) => {
  const groceryEntry = {
    groceryName: req.body.grocery.groceryName,
    storageType: req.body.grocery.storageType,
    storageContainer: req.body.grocery.storageContainer,
    quantity: req.body.grocery.quantity,
    unitOfMeasure: req.body.grocery.unitOfMeasure,
    OnHand: req.body.grocery.OnHand,
    locationId: req.body.grocery.locationId,
    vendorId: req.body.grocery.vendorId,
    groceryNotes: req.body.grocery.groceryNotes,
    userId: req.user.id,
  };
  grocery
    .create(groceryEntry)
    .then((grocery) => res.status(200).json(grocery))
    .catch((err) => res.status(500).json({ error: err }));
});
// Consider search by name, storageType quantity, etc?
// -----Get My grocery  -----
// GET:   http://localhost:3020/grocery/
// router.get("/", validateSession, (req, res) => {
//   let userid = req.user.id;
//   grocery
//     .findAll({
//       where: { userId: userid },
//     })
//     .then((grocery) => res.status(200).json(grocery))
//     .catch((err) => res.status(500).json({ error: err }));
// });

// -----  Get All grocery -----
// GET:   http://localhost:3020/grocery/all
router.get("/all", (req, res) => {
  grocery
    .findAll()
    .then((grocery) => res.status(200).json(grocery))
    .catch((err) => res.status(500).json({ error: err }));
});

// -----  Update grocery  -----
// PUT:   http://localhost:3020/grocery/:id
router.put("/update/:id", validateSession, (req, res) => {
  const updateGrocery = {
    groceryName: req.body.grocery.groceryName,
    storageType: req.body.grocery.storageType,
    storageContainer: req.body.grocery.storageContainer,
    quantity: req.body.grocery.quantity,
    unitOfMeasure: req.body.grocery.unitOfMeasure,
    OnHand: req.body.grocery.OnHand,
    locationId: req.body.grocery.locationId,
    vendorId: req.body.grocery.vendorId,
    groceryNotes: req.body.grocery.groceryNotes,
  };
  // Do I need userId here?
  const query = { where: { id: req.params.id } };
  //   const query = { where: { id: req.params.id, userId: req.user.id} };

  grocery
    .update(updateGrocery, query)
    .then((grocery) => res.status(200).json(grocery))
    .catch((err) => res.status(500).json({ error: err }));
});

// -----  Delete a grocery Entry  -----
// DEL:   http://localhost:3020/grocery/:id
router.delete("/:id", validateSession,(req, res) => {
  grocery
    .destroy({ where: { id: req.params.id } })
    .then((grocery) => res.status(200).json(grocery))
    .catch((err) => res.json(req.errors));
});

module.exports = router;