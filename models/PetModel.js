const { DataTypes } = require('sequelize')
const db = require('../db/connection');

const Pet = db.define('Pet', {
    name:{
        type: DataTypes.STRING,
    },
    species:{
        type: DataTypes.STRING,
        require: true
    },
    carry:{
        type: DataTypes.STRING,
        require: true
    },
    weight:{
        type: DataTypes.STRING,
    },
    date_of_birth:{
        type: DataTypes.STRING,
    }
})

module.exports = Pet 