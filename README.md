# CSV File Uploader

## Sobre o projeto (About the project)

***pt.*** Este projeto fora desenvolvido durante o Alura Backend Challenge #3. Evento no qual o objetivo era a construção de umm WebApp que realizasse o upload de um arquivo *.csv*, que contém informações de transferências bancárias. Durante as 04 semanas do desafio, foram implementadas diferentes funcionalidades ao projeto.

***en.*** This project was developed during the Alura Backend Challenge #3. The goal was to build a WebApp, which was reaponsible to receive an upload of a *.csv* file containing information about bank tranfers. During all 04 weeks of challenge, new features were added to the project.

## Semana 1 (Week #1)

***pt.*** A primeira semana do desafio teve como objetivo a implementação das seguintes funcionalidades:

1. A construção (no *frontend*) de um formulário que permitisse o *upload* de um arquivo *.csv*;
2. O armazenamento local do arquivo e leitura dos dados contidos nele, exibindo-os no *console*;
3. O tratamento destes dados;
4. O armazenamento destes dados em um banco de dados;
5. A leitura dos dados neste banco e exibição do *frontend*;

Todas as funcionalidade deveriam ser criadas seguindo as seguintes especificações:
```
- Se o arquivo que foi feito upload estiver vazio, 
uma mensagem de erro deve ser exibida para o usuário, indicando tal situação;

- Ler a primeira transação (primeira linha do arquivo csv) 
para determinar qual a data das transações desse arquivo em específico;

- Se alguma transação posterior estiver com outra data diferente, 
ela deve ser ignorada e não ser salva no banco de dados;

- A aplicação não deve "duplicar" transações de um determinado dia, 
ou seja, se o upload de transações de um determinado dia já tiver 
sido realizado anteriormente, uma mensagem de erro deve ser exibida 
ao usuário, indicando que as transações daquela data já foram realizadas;

- Todas as informações da transação são obrigatórias, ou seja, 
se alguma transação estiver com alguma informação faltando, 
ela também deve ser ignorada e nao ser salva no banco de dados.
```

***en.*** The first week's goal was to implement the following features:

1. In the frontend, build  aform that allowed the user to upload a *.csv* file.;
2. Store the file locally and then, read it's data, printing it onto the console; 
3. Treat the data;
4. Store the treated data into a database;
5. Read the stored data and show it onto do frontend;

All features had to be build with the following parameters in mind:
```
- If the file were empty, a message must be shown, informing the user of this condition;

- Read the frist line of the file (first transaction) to determine the transaction date in 
this specific file;

- Any transaction made after the first one in in the file, it must be ignored;

- The application must not "duplicate" transaction of a certain day. 
In another words, if a set of transaction had already been uploaded, 
a message must be shown to the user, informing him that those transaction had already been processed;

- All information of each transaction is mandatory, which means that 
any transaction with missing data must be ignored.
```

## Tecnologias utilizadas (Technologies used)

- *Frontend* 
    - *Boostrap*
- *Backend* 
    - *ExpressJS* 
    - *Prisma* 
    - *Multer* 
    - *SQLite*

## Como rodar (How to run it)

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
