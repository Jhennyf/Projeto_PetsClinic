const Tutor = require('../models/TutorModel')
const Pet = require('../models/PetModel');

exports.createTutor = async function (req, res)  {
  try {
    const tutor = await Tutor.create(req.body);
    res.status(201).json(tutor);
  } catch (err) {
    res.status(400).json({ message: 'Error creating tutor.' });
  }
}


exports.listTutors = async function(req, res) {
    try {
      const listaTutors = await Tutor.findAll({
        include: [{
            model: Pet,
            attributes: ['id', 'name', 'species', 'carry', 'weight', 'date_of_birth'] 
        }],
        attributes: ['id', 'name', 'phone', 'email', 'date_of_birth', 'zip_code']
    });

    res.status(200).json(listaTutors);
    } catch (error) {
        res.status(400).json({ message: 'Error listing tutors.' });
    }
}

exports.deleteTutor = async function(req, res) {
    const id = req.params.id;
    const tutor = await Tutor.findOne({where: {id}})
    
    if(!tutor){
      res.status(400).json({ message: 'Tutor not found.' })
    }else{
      const tutor = await Tutor.destroy({where: {id}})
      res.status(204).json({ok: true})
    }
}

exports.updateTutor = async function(req, res){
    const id = req.params.id;
    const {name, phone, email, date_of_birth} = req.body; 
  
    const tutor = await Tutor.findOne({where: {id}})
    if(!tutor){
      res.status(400).json({ message: "Tutor not found." })
    }else {
      await Tutor.update({name, phone, email, date_of_birth}, {where: {id}});
      const updateTutor = await Tutor.findOne({where: {id}});
      return res.status(200).json({ tutor: updateTutor});
    } 
}

