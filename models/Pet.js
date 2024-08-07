const Sequelize = require('sequelize');
const db = require('../db/connection');
const sequelize = require('../db/connection');

const Pet = db.define('Pet', {
    name:{
        type: Sequelize.STRING,
    },
    species:{
        type: Sequelize.STRING,
    },
    carry:{
        type: Sequelize.STRING,
    },
    weight:{
        type: Sequelize.STRING,
    },
    date_of_birth:{
        type: Sequelize.STRING,
    }
})

module.exports = Pet 