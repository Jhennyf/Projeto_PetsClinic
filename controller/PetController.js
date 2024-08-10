const Pet = require("../models/PetModel");
const Tutor = require("../models/TutorModel");

exports.createPet = async (req, res) => {
  const id = req.params.tutorId;
  const tutor = Tutor.findOne({ where: { id } });

  if (!tutor) {
    res.status(404).json({ message: "Tutor não encontrado" });
  } else {
    try {
      await Pet.create(req.body);
      res.status(201).json({ message: "Pet cadastrado." });
    } catch (err) {
      res.status(404).json({ message: "Falha ao criar Pet." });
    }
  }
};

exports.excluirPet = async function (req, res) {
  //DELETE
  const id = req.params.id;
  const tutor = await Tutor.findOne({ where: { id } });
  const pet = await Pet.findOne({ where: { id } });

  if (!tutor) {
    if (!pet) {
      res.status(400).json({ message: "Tutor não encontrado." });
    }
  } else {
    const tutor = await Tutor.destroy({ where: { id } });
    res.status(204).json({ ok: true });
  }
};

exports.atualizarTutor = async function (req, res) {
  //PUT
  const id = req.params.id;
  const { name, phone, email, date_of_birth } = req.body;

  const tutor = await Tutor.findOne({ where: { id } });
  if (!tutor) {
    res.status(400).json({ message: "Nenhum tutor encontrrado" });
  } else {
    await Tutor.update(
      { name, phone, email, date_of_birth },
      { where: { id } }
    );
    const updatedTutor = await Tutor.findOne({ where: { id } });
    return res.status(200).json({ tutor: updatedTutor });
  }
};
