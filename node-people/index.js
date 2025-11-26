const express = require("express");
const app = express();
const PORT = 3000; // Executar na porta 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});

app.get("/teste", (req, res) => {
    res.send("API nodePeople está funcionando!");
});