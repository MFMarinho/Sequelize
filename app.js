// index.js ou onde quer que você vá usar o Sequelize
const { Sequelize } = require('sequelize');
const sequelizeConfig = require('./config');

const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

// Testar a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida.');
  })
  .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error);
  });