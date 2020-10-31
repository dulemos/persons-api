# persons-api
API REST - CRUD da entidade Persons 

API em node.js com endpoints para criar, ler, alterar e deletar registros no banco de dados. 

A API atualiza a tabela "Persons" que contém os seguintes dados: name, height, weight, athlete e lactose. 

Foi utilizado o banco MongoDB para armazenar os dados, para integração com o banco de dados a API utilza o mongoose. 
O framework utilizado nos serviços é o express.js (https://expressjs.com/pt-br/). 

Para rodar a aplicação siga o passo a passo abaixo: 

 - Clone o repositório para seu ambiente local 
 - Na pasta raiz rode o comando npm install 
 - Ainda na pasta raiz adicione um arquivo chamado '.env' e nele adicione a URL de conexão com o Mongo DB fornecida pelo e-mail
 - Rode o comando: 'node src/index'
 

