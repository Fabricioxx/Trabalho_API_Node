const assinanteModel = require('../models/assinanteModel');

class AssinanteController {

    // async salvar -  função assíncrona que salva no banco de dados
    async salvar(req, res) {
        let assinante = req.body;
        const max = await assinanteModel.findOne({}).sort({ codigo: -1 });
        assinante.codigo = max == null ? 1 : max.codigo + 1;

        // Verificar se foi enviado um arquivo de imagem
        if (req.file) {
           assinante.imagem = req.file.buffer; // Armazena a imagem como buffer
        }

        const resultado = await assinanteModel.create(assinante);
        res.status(201).json(resultado);
    }

    // async listar -função assíncrona que lista todos os assinantes do banco de dados
    async listar(req, res) {
        const resultado = await assinanteModel.find({});
        res.status(200).json(resultado);
    }

    // async buscarPorId - função assíncrona que busca um assinante por id no banco de dados
    async buscarPorId(req, res) {
        const codigo = req.params.codigo;
        const resultado = await assinanteModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async buscarPorNome(req, res) {
        const nome = req.params.nome;
        const resultado = await assinanteModel.findOne({ 'nome': nome });
        res.status(200).json(resultado);
    }

    async buscarPorSobrenome(req, res) {
        const sobrenome = req.params.sobrenome;
        const resultado = await assinanteModel.findOne({ 'sobrenome': sobrenome });
        res.status(200).json(resultado);
    }

    async buscarPorCidade(req, res) {
        const cidade = req.params.cidade;
        const resultado = await assinanteModel.findOne({ 'cidade': cidade });
        res.status(200).json(resultado);
    }

    async buscarPorEstado(req, res) {
        const estado = req.params.estado;
        const resultado = await assinanteModel.findOne({ 'estado': estado });
        res.status(200).json(resultado);
    }

    async buscarPorStatus(req, res) {
        const status = req.params.status;
        const resultado = await assinanteModel.find({ 'status': status });
        res.status(200).json(resultado);
    }

    // async atualizar -função assíncrona que atualiza um assinante por id no banco de dados
    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await assinanteModel.findOne({ 'codigo': codigo }))._id);
    
        // Verifique se foi enviado um novo arquivo de imagem
        if (req.file) {
          const imageBuffer = fs.readFileSync(req.file.path);
          const updateData = {
            ...req.body,
            imagem: {
              data: imageBuffer,
              contentType: req.file.mimetype
            }
          };
    
          
          fs.unlinkSync(req.file.path); // exclui o arquivo de imagem temporário
    
          await assinanteModel.findByIdAndUpdate(String(_id), updateData); // atualiza no banco de dados
        } else {
          await assinanteModel.findByIdAndUpdate(String(_id), req.body); // atualiza no banco de dados sem imagem
        }
    
        res.status(200).send();
      }


    // async excluir -função assíncrona que exclui um assinante por id no banco de dados
    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await assinanteModel.findOne({ 'codigo': codigo }))._codigo);
        await assinanteModel.findByIdAndRemove(String(_codigo));
        res.status(200).send();
    }
}

module.exports = new AssinanteController();