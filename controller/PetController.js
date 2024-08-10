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

exports.deletePet = async function (req, res) {
  const id = req.params.id;
  const tutor = await Tutor.findOne({ where: { id } });
  const pet = await Pet.findOne({ where: { id } });

  if (!tutor) {
      res.status(400).json({ message: "Tutor não encontrado." });
  } else {
    const pet = await Pet.destroy({ where: { id } });
    res.status(204).json({ message: 'Pet excluido.' });
  }
};

exports.updatePet = async function (req, res) {
  const id = req.params.id;
  const tutor = await Tutor.findOne({ where: { id } });
  const pet = await Pet.findOne({ where: { id } });
  const { name, species, carry, weight, date_of_birth} = req.body;

  if (!tutor) {
    res.status(400).json({ message: "Nenhum tutor encontrado" });
  } else {
    await Pet.update(
      { name, species, carry, weight, date_of_birth },
      { where: { id } }
    );
    const updatedPet = await Pet.findOne({ where: { id } });
    return res.status(200).json({ tutor: updatedPet, message: "Pet Atualizado."});
  }
};


exports.listapet = async function(req, res) {
  try {
   const listapet = await Pet.findAll();
   res.status(201).json(listapet);
  } catch (error) {
      res.status(400).json({ message: 'Erro ao listar tutores.' });
  }
}
