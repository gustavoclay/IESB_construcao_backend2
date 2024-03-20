// importando modulo do express
const express = require('express')

// cria uma aplicação express
const app = express()

// construir a lógica (o contrato da minha api)
app.get("/hello", (req, res) => {
    res.send("Hello World!")
})

app.get("/nome", (req, res) => {
    res.send("João Paulo!")
})

app.post("/teste", (req, res) => {
    res.send("TESTE POST OK!")
})

// CRIE UMA CHAMADA PARA O RECURSO /ALUNO
// DEVOLDA NA RESPOSTA O SEU NOME JUNTO COM A SUA MATRICULA
app.get('/aluno', (req, res) => {
    res.send("Aluno: Pedro João - Matricula: 202422")
})


// startando servidor(backend - api) para escutar comunicações
// na porta 3000
app.listen(3000, () => {
    console.log("Api iniciando! Rodando em http://localhost:3000")
})