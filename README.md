# Fabrício Rosa
Trabalho - api NodeJs

### Gerenciador de Assinantes

 * Funcionalidade de acordo com as chamadas da API
 * Endpoints atendendo o que é requerido
 * Tratativas de erro e chamadas corretas (uso de http code e tipos de request específicos para as funcionalidades)


**Funcionalidades a serem implementadas:**

* Cadastro de assinante os campos: Codigo, Nome, Sobrenome, Data de Nascimento, Telefone, Endereço, Cidade, Estado, Status (Ativo ou Inativo).
* No cadastro tem que haver opção de upload de imagem de perfil.
* Utilize binary para salvar no banco.  
* Edição das informações pessoais do usuário (Incluindo Status e Foto de Perfil)
* Listar todos os usuários
* Listar um único usuário por Codigo. 
* Listar usuários por Nome, Sobrenome, Cidade, Estado e Status.
* Deletar um usuário (Deletar do banco)

===================================================================


```
● npm init -y // Criação do package.json
● npx express-generator --view=pug // Instalação estrutura Express
● npm install mongoose // mongoDB
● npm install nodemon // Instalação do ODM nodemon
● npm install multer // upload de arquivos


npm start
npm run start

```
