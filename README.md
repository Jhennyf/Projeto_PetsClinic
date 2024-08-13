
# Pets Clinic 

O projeto PetsClinic é parte do 1º Desafio | NODE.JS + AWS_JUL24.

## Sobre o projeto
Esta API REST foi desenvolvida para o gerenciamento de Tutores e Pets. O projeto conta com diversas funcionalidades como criação, atualização, listagem e exclusão de Tutores e Pets. 

## Tecnologias Utilizadas 
  
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) 

![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)


## Instrução de uso
Como rodar o projeto na aplicação:

```bash
npm rum dev
```


### Instrução de Instalação
** Como instalar e configurar o projeto: **
    
1. Clone o Repositório

```bash
https://github.com/Jhennyf/Projeto_PetsClinic.git
cd Projeto_PetsClinic 
```

## EndPoints
### EndPoints Tutor

```bash
- GET    /tutors - Listar todos os tutores.
- POST   /tutor - Cria um tutor e lista somente ele.
- PUT    /tutor/:id - Altera dados de um Tutor e salva.
- DELETE /tutor/:id -  Apaga um tutor. 
```

### EndPoints Pet

```javascript 
- POST   /pet/:tutorId - Cria um Pet e lista somente ele.
- PUT    /pet/:petId/tutor/:tutorId - Altera dados de um Pet e salva.
- DELETE /pet/:petId/tutor/:tutorId - Apaga um Pet.
```

## Estrutura de Pastas do Projeto

```plaintext
Projeto_PetsClinic
│   ├── controllers/    # Funções de controle das rotas
│   ├── db/             # Função de conexão com Banco de Dados
│   ├── models/         # Modelo de dados com MySQL
│   └── routes/         # Definição das rotas da API
├── .gitignore          # Arquivo para ignorar arquivos e pastas no Git.
├── Index.js            # Consfigura e inicia o servidor
├── package-lock.json   # Arquivo de bloqueio de dependências do npm.
├── package.json        # Arquivo de configuração do npm.
├── README.md           # Documentação do projeto
└── swagger.json        # Documentação do projeto

```



