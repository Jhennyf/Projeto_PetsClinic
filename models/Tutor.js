const Sequelize = require('sequelize');
const db = require('../db/connection');

const Tutor = db.define('Tutor', {
    name:{
        type: Sequelize.STRING,
    },
    phone:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    }, 
    date_of_birth:{
        type: Sequelize.STRING,
    },
    zip_code:{
        type: Sequelize.INTEGER,
    }
})

module.exports = Tutor