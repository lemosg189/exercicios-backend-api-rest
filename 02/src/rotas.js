const express = require('express')
const convidados = require('./controladores/convidados')

const rotas = express()

rotas.get('/convidados', convidados.consultaConvidados)
rotas.post('/convidados', convidados.adicionaConvidados)
rotas.delete('/convidados/:nome', convidados.removerConvidados)


module.exports = rotas;