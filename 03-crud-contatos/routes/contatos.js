const express = require('express')
const router = express.Router()

// "banco de dados local" lista mockada
const listaContatos = ["João", "Pedro", "Rafael"]

// READ -> Buscar todos os contatos
router.get('/contatos', (req, res) => {
    res.json(listaContatos)
})

// 


module.exports = router
