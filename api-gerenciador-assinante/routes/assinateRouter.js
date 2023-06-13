const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');

// Configurar o multer para upload de arquivos
const multer = require('multer');


// Configurar o diretório de destino dos arquivos de upload
const upload = multer({ dest: '../public/images' });


//http://localhost:3000/assinantes
router.get('/', assinanteController.listar);
//http://localhost:3000/assinantes
//router.post('/', assinanteController.salvar);
router.post('/', upload.single('imagem'), assinanteController.salvar);


//http://localhost:3000/assinantes/1
router.get('/:codigo', assinanteController.buscarPorId);
//http://localhost:3000/assinantes/1
//router.put('/:codigo', assinanteController.atualizar);
router.put('/:codigo', upload.single('imagem'), assinanteController.atualizar);

//http://localhost:3000/assinantes/1
router.delete('/:codigo', assinanteController.excluir);

//http://localhost:3000/assinantes/buscanome/Lucas
router.get('/buscanome/:nome', assinanteController.buscarPorNome);
//http://localhost:3000/assinantes/buscasobrenome/Silva
router.get('/buscasobrenome/:sobrenome', assinanteController.buscarPorSobrenome);
//http://localhost:3000/assinantes/buscacidade/Recife
router.get('/buscacidade/:cidade', assinanteController.buscarPorCidade);
//http://localhost:3000/assinantes/buscaestado/PE
router.get('/buscaestado/:estado', assinanteController.buscarPorEstado);
//http://localhost:3000/assinantes/buscastatus/true
router.get('/buscastatus/:status', assinanteController.buscarPorStatus);

module.exports = router;