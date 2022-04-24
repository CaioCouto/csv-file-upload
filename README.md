# CSV File Uploader

## Sobre o projeto (About the project)

***pt.*** Este projeto fora desenvolvido durante o Alura Backend Challenge #3. Evento no qual o objetivo era a construção de umm WebApp que realizasse o upload de um arquivo *.csv*, que contém informações de transferências bancárias. Durante as 04 semanas do desafio, foram implementadas diferentes funcionalidades ao projeto.

***en.*** This project was developed during the Alura Backend Challenge #3. The goal was to build a WebApp, which was reaponsible to receive an upload of a *.csv* file containing information about bank tranfers. During all 04 weeks of challenge, new features were added to the project.

## Tecnologias utilizadas (Technologies used)

- *Frontend* 
    - *Boostrap*
- *Backend* 
    - *ExpressJS* 
    - *Prisma* 
    - *Multer* 
    - *SQLite*


## Como executar (How to run it)

***pt.***
1. Primento, clone este repositório para a sua máquina ou faça o download;
2. Então, execute `npm install` para instalar as dependências;
3. Então, execute `npx prisma migrate dev` para inicializar o banco de dados;
4. Finalmente, execute `npm start` para iniciar o servido.

Há um arquivo de transações modelo neste repositório (*transacoes-2022-01-02.csv*). Use-o para testar, ou escreva o seu baseando-se nele.

***en.***
1. First, clone this repository into you local machine or download it;
2. Then, run `npm install` to install all dependencies;
3. Then, run `npx prisma migrate dev` to initialize the database;
4. Finally, run `npm start` to start the server.

There a transaction model file in this repository (*transacoes-2022-01-02.csv*). Use it to test, or write your own based on it.

## Semana 1 (Week #1)

***pt.*** A primeira semana do desafio teve como objetivo a implementação das seguintes funcionalidades:

1. A construção (no *frontend*) de um formulário que permitisse o *upload* de um arquivo *.csv*;
2. O armazenamento local do arquivo e leitura dos dados contidos nele, exibindo-os no *console*;
3. O tratamento destes dados;
4. O armazenamento destes dados em um banco de dados;
5. A leitura dos dados neste banco e exibição do *frontend*;

***en.*** The first week's goal was to implement the following features:

1. In the frontend, build  aform that allowed the user to upload a *.csv* file.;
2. Store the file locally and then, read it's data, printing it onto the console; 
3. Treat the data;
4. Store the treated data into a database;
5. Read the stored data and show it onto do frontend;

## Semana 2 (Week #2)

***pt.*** A segunda semana foi focada nas funcionalidades de usuário. Os objetivos foram:

1. Implementar o CRUD de um usuário;
2. Um sistema de login;
3. Armazenar, junto à Importação, qual foi o usuário responsável por esta;
4. Uma página de gerenciamento de usuários, onde é possível criar, listar, editar e deletar usuários;
5. Exclusão lógica de um usuário;

***en.*** The second week was focused on user features. The goals were:

1. Implement user's CRUD;
2. A login system;
3. Store, along with the Import, which user is responsable for it;
4. A user management page, in which is possible to create, list, update and delete users;
5. User's soft delete.