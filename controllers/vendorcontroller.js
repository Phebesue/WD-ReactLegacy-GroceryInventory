let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const Vendor = require("../db").import("../models/vendor");

// Endpoints
// POST:  http://localhost:3020/vendor/create
// GET:   http://localhost:3020/vendor/
// GET:   http://localhost:3020/vendor/all
// PUT:   http://localhost:3020/vendor/:id
// DEL:   http://localhost:3020/vendor/:id

// -----  vendor Create  -----
// POST:  http://localhost:3020/vendor/create
router.post("/create", (req, res) => {
  if (!req.err && req.user.admin){
  const vendorEntry = {
    vendorName: req.body.vendor.vendorName,
    website: req.body.vendor.website,
    address: req.body.vendor.address,
    city: req.body.vendor.city,
    state: req.body.vendor.state,
    zipcode: req.body.vendor.zipcode,
    vendorNotes: req.body.vendor.vendorNotes,
    userId: req.user.id,
  };
  Vendor
    .create(vendorEntry)
    .then((vendor) => res.status(200).json(vendor))
    .catch((err) => res.status(500).json({ error: err }));
} else{
  return res.status(500).send({ message: "Not Authorized"});
}}
)

// Consider search by name
// -----Get My vendor  -----
GET:   http://localhost:3020/vendor/
router.get("/", (req, res) => {
  let userid = req.user.id;
  Vendor
    .findAll({
      where: { userId: userid },
    })
    .then((vendor) => res.status(200).json(vendor))
    .catch((err) => res.status(500).json({ error: err }));
});

// -----  Get All vendor -----
// GET:   http://localhost:3020/vendor/all
router.get("/all",validateSession,(req, res) => {
  Vendor
    .findAll()
    .then((vendor) => res.status(200).json(vendor))
    .catch((err) => res.status(500).json({ error: err }));
    });

// -----  Update vendor  -----
// PUT:   http://localhost:3020/vendor/:id
router.put("/:id", (req, res) => {
  if (!req.err && req.user.admin){
  const updateVendor = {
    vendorName: req.body.vendor.vendorName,
    website: req.body.vendor.website,
    address: req.body.vendor.address,
    city: req.body.vendor.city,
    state: req.body.vendor.state,
    zipcode: req.body.vendor.zipcode,
    vendorNotes: req.body.vendor.vendorNotes,
  };
  // Do I need userId here?
  const query = { where: { id: req.params.id} };
//   const query = { where: { id: req.params.id, userId: req.user.id} };

  Vendor
    .update(updateVendor, query)
    .then((vendor) => res.status(200).json({message: "Vendor Updated"}))
    .catch((err) => res.status(500).json({ error: err }));
}else {
  return res.status(500).send({ message: "Not Authorized"});

}
});

// -----  Delete a vendor Entry  -----
// DEL:   http://localhost:3020/vendor/:id
router.delete("/:id",(req, res) => {
  if (!req.err && req.user.admin){
  Vendor
    .destroy({ where: { id: req.params.id } })
    .then((vendor) => res.status(200).json({message: "Vendor Removed"} ))
    .catch((err) => res.json(req.errors));
    
  }else {
    return res.status(500).send({ message: "Not Authorized"});
}}
)

module.exports = router;