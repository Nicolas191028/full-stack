const express = require("express");
const app = express();
const port = 3000;


//Variavel comos dados produtos
const produtos = [
    {id: 1, nome: "Produto A", preco: 100 },
    {id: 2, nome: "Produto B", preco: 150 },
    {id: 3, nome: "Produto C", preco: 200 },
];
// Criar função 
// Rota principal
app.get('/', (req, res) => {
    res.send('Bem Vindo ao servidor Node.js ');
});


//Rota de produto

app.get('/produtos', (req, res) => {
    res.send(produtos);
})
// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

//Rota Home
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
});