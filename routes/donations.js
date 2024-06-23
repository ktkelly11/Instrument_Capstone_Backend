const { Router } = require("express");
const donationsCtrl = require("../controllers/donations.js");

const router = Router();

router.post("/", donationsCtrl.createDonation);

router.get("/", donationsCtrl.getDonation);

module.exports = router;
