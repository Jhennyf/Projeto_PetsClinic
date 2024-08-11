const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Tutor = db.define('Tutor', {
    name:{
        type: DataTypes.STRING,
    },
    phone:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    }, 
    date_of_birth:{
        type: DataTypes.STRING
    },
    zip_code:{
        type: DataTypes.INTEGER,
    }
})


module.exports = Tutor
