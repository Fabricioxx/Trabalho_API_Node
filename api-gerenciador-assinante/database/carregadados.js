require("./mongodb");

const fs = require('fs'); // importa o módulo fs para ler o arquivo movies.json

// PARA RODAR ESTE SCRIPT, DIGITE NO TERMINAL: node carregadados.js
// O SCRIPT VAI CARREGAR OS DADOS DO ARQUIVO movie.json NO BANCO DE DADOS


const mongoose = require("mongoose"); // importa o mongoose para usar seus recursos de modelagem de dados
const assinanteModel = require("../models/assinanteModel"); // importa o modelo de dados de filmes
const assinantes = require("./assinantes.json"); // importa os dados de filmes do arquivo movies.json

// Lendo o conteúdo da imagem de um arquivo para um buffer
//const imageBuffer = fs.readFileSync('../public/images/img1.jpg');


//  carrega os dados de filmes do arquivo assinantes.json no banco de dados
async function carregarDados() {

    const imagePrefix = 'img';
    const imageExtension = '.jpg';
    let imageIndex = 1;


    try {
        await assinanteModel.deleteMany({}); // apaga todos os documentos da coleção movies

        // para cada filme no array movies, cria um documento na coleção movies
        for (const assinante of assinantes) {

            const imageFileName = `${imagePrefix}${imageIndex}${imageExtension}`;
            const imageBuffer = fs.readFileSync(`../public/images/${imageFileName}`);

            assinante.imagem = imageBuffer; // adiciona a imagem ao documento

            
            await assinanteModel.create(assinante); // mongose create() cria um documento na coleção movies

            imageIndex++;
        }
        console.log("Carga de usuarios feita!");
    } catch (err) {
        console.log(err + "Carregamento de dados falhou!");


    } finally {
        process.exit();
    }
}


// node .\database\carregadados.js - executa a função carregarDados()cd 

carregarDados();