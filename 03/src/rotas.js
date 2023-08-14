const express = require('express')
let livros = require('./controladores/livros')

const rotas = express()

rotas.get('/livros', livros.listagemLivros)
rotas.get('/livros/:id', livros.consultarLivros)
rotas.post('/livros', livros.adicionarLivros)
rotas.put('/livros/:id', livros.substituirLivros)
rotas.patch('/livros/:id', livros.alterarLivros)
rotas.delete('/livros/:id', livros.deletarLivros)




module.exports = rotas
