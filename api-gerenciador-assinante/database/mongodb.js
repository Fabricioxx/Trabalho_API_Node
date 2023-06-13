const mongoose = require('mongoose');

// FAZ A CONEXÃO COM O BANCO DE DADOS MONGODB NA PORTA 27017
// O NOME DO BANCO DE DADOS É catalogo

const URL = 'mongodb://0.0.0.0:27017/database';
const db = mongoose.connect(URL); // db é o objeto de conexão com o banco de dados
const con = mongoose.connection; // con é a conexão com o banco de dados

// con.on - é um listener de eventos do mongoose que escuta os eventos open, error e close
con.on('open', function () {
  console.log('Conectado ao MongoDB!');
});

con.on('error', function () {
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function () {
  console.log('Desconetado do MongoDB!');
});

module.exports = db; // exporta o objeto db para ser usado em outros módulos