const express = require("express");
const router = express.Router();
const PetController = require('../controller/PetController');
const Pet = require("../models/PetModel");

router.post("/pet/:tutorId", PetController.createPet);

module.exports = router;

