const Tutor  = require('../models/TutorModel')

exports.createTutor = async function (req, res)  {
  try {
    const tutor = await Tutor.create(req.body);
    res.status(201).json(tutor);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar tutor.' })
  }
}

exports.listaTutors = async function(req, res) {
    try {
     const listaTutors = await Tutor.findAll();
     res.status(201).json(listaTutors);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar tutores.' });
    }
}

exports.excluirTutor = async function(req, res) {
    //DELETE
    const id = req.params.id;
    const tutor = await Tutor.findOne({where: {id}})
    
    if(!tutor){
      res.status(400).json({ message: 'Tutor não encontrado.' })
    }else{
      const tutor = await Tutor.destroy({where: {id}})
      res.status(204).json({ok: true})
    }
}

exports.atualizarTutor = async function(req, res){
    //PUT
    const id = req.params.id;
    const {name, phone, email, date_of_birth} = req.body; 
  
    const tutor = await Tutor.findOne({where: {id}})
    if(!tutor){
      res.status(400).json({ message: "Nenhum tutor encontrrado" })
    }else {
      await Tutor.update({name, phone, email, date_of_birth}, {where: {id}});
      const updatedTutor = await Tutor.findOne({where: {id}});
      return res.status(200).json({ tutor: updatedTutor });
    } 
}

