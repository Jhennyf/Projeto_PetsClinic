const { DataTypes } = require('sequelize')
const db = require('../db/connection');
const Tutor = require('../models/TutorModel')

const Pet = db.define('Pet', {
    name:{
        type: DataTypes.STRING,
    },
    species:{
        type: DataTypes.STRING,
    },
    carry:{
        type: DataTypes.STRING,
    },
    weight:{
        type: DataTypes.STRING,
    },
    date_of_birth:{
        type: DataTypes.STRING,
    }
})

Tutor.hasMany(Pet);
Pet.belongsTo(Tutor);

module.exports = Pet
