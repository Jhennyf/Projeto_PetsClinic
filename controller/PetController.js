const Pet = require("../models/PetModel");
const Tutor = require("../models/TutorModel");

exports.createPet = async (req, res) => {
  const id = req.params.tutorId;
  const tutor = await Tutor.findOne({ where: { id } });
  if (!tutor) {
    res.status(404).json({ message: "No tutor found" });
  } else {
    try {
      const petData = {
        ...req.body,
        TutorId: id,
      };
      await Pet.create(petData);
      res.status(201).json({ message: "Registered pet." });
    } catch (err) {
      res.status(404).json({ message: "Failed to create Pet." });
    }
  }
};

exports.deletePet = async function (req, res) {
  try {
    const TutorId = req.params.tutorId;
    const PetId = req.params.petId;
    const pet = await Pet.findOne({ where: { id: PetId, TutorId } });
    const tutor = await Tutor.findOne({ where: { id: TutorId } });

    if (!tutor) {
      res.status(400).json({ message: "No tutor found" });
    }
    if (!pet) {
      res.status(400).json({ message: "No Pet found" });
    }
    await pet.destroy();
    res.status(204).json({ message: "Pet excluded." });
  } catch (err) {
    res.status(404).json({ message: "Failed excluded to Pet." });
  }
};

exports.updatePet = async function (req, res) {
  try {
    const TutorId = req.params.tutorId;
    const PetId = req.params.petId;
    const pet = await Pet.findOne({ where: { id: PetId, TutorId } });
    const tutor = await Tutor.findOne({ where: { id: TutorId } });
    const { name, species, carry, weight, date_of_birth } = req.body;

    if (!tutor) {
      res.status(400).json({ message: "No tutor found" });
    }if (!pet) {
      res.status(400).json({ message: "No Pet found" });
    }
    await Pet.update({ name, species, carry, weight, date_of_birth }, {where: {id: PetId, TutorId }});
    const updatedPet = await Pet.findOne({where: {id: PetId, TutorId }});
    res.status(200).json({ tutor: updatedPet, message: "Pet Updated." });
  } catch (err) {
    res.status(404).json({ message: "Failed to update Pet." });
  }
};
