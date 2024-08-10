const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('clinic', 'root', '',{
    database:'clinic',
    username:'root',
    password:'',
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize
