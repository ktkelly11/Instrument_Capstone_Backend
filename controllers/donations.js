const Donation = require("../models/Donation");

module.exports = {
  createDonation,
  getDonation,
};

async function createDonation(req, res) {
  try {
    const donations = new Donation(req.body);

    await donations.save();

    res.status(200).json(donations);
  } catch (err) {
    res.status(400).json("Error");
  }
}

async function getDonation(req, res) {
  try {
    const donations = await Donation.find({});

    res.status(200).json(donations);
  } catch (err) {
    res.status(400).send(err);
  }
}
