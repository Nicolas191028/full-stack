const express = require("express");
const app = express();
const PORT = 3000; // Executar na porta 3000

// Indicar para express ler body com json
app.use(express.json());

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

// Criando Funções Auxiliares
// Retornar o objeto por Id
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id)
}

function buscarTimePorId(id) {
    return times.filter((time) => time.id == id)
}

// Pegar a posição ou index do elemento do Array por id
function buscarIdNomes(id) {
    return nomes.findIndex((nome) => nome.id == id)
}

function buscarIdTimes(id) {
    return times.findIndex((time) => time.id == id)
}

app.get("/", (req, res) => {
    res.send("Olá mundo!")
})

// Rota teste
app.get("/teste", (req, res) => {
    res.send("API nodePeople está funcionando!");
});

// Buscando nomes/times (listaNomes)/(times)
app.get("/listaNomes", (req, res) => {
    res.send(nomes);
});

app.get("/times", (req, res) => {
    res.send(times);
});

// Buscando por ID
app.get("/listaNomes/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarNomePorId(index))
});

app.get("/times/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarTimePorId(index))
});

// Criando Post para cadastrar
app.post("/listaNomes", (req, res) => {
    nomes.push(req.body);
    res.status(201).send('Nome cadastrado com sucesso');
});

app.post("/times", (req, res) => {
    times.push(req.body);
    res.status(201).send('Time cadastrado com sucesso');
});

// Criando Rota Excluir
app.delete("/listaNomes/:id", (req, res) => {
    let id = req.params.id;
    let index = buscarIdNomes(id);

    // se não encontrar, retorna erro
    if (index === -1) {
        return res.status(404).send(`Nenhum nome com id ${id} foi encontrado`)
    } 

    nomes.splice(index, 1);
    res.send(`Nomes com id ${req.params.id} excluida com sucesso`);
});

app.delete("/times/:id", (req, res) => {
    let id = req.params.id;
    let index = buscarIdTimes(id);

    if (index === -1) {
        return res.status(404).send(`Nenhum time com id ${id} foi encontrado`)
    } 


    times.splice(index, 1);
    res.send(`Time com id ${req.params.id} excluida com sucesso`);
});

// Rota alterar
app.put("/listaNomes/:id", (req, res) => {
    let index = buscarIdNomes(req.params.id);
    nomes[index].nome = req.body.nome;
    nomes[index].idade = req.body.idade;

    res.json(nomes);
});

app.put("/times/:id", (req, res) => {
    let index = buscarIdTimes(req.params.id);
    times[index].nome = req.body.nome;
    times[index].estado = req.body.estado;
    times[index].titulos = req.body.titulos;

    res.json(times);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});