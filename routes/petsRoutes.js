const express = require("express");
const router = express.Router();
const PetController = require('../controller/PetController');
const Pet = require("../models/PetModel");

router.post("/pet/:tutorId", PetController.createPet);
router.put("/pet/:petId/tutor/:tutorId", PetController.updatePet);
router.delete("/pet/:petId/tutor/:tutorId", PetController.deletePet);

module.exports = router;
