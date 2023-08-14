const express = require('express');
const alunos = require('./controladores/alunos')

const rotas = express();

rotas.get('/alunos', alunos.listagemAlunos)
rotas.get('/alunos/:id', alunos.obterAlunos)
rotas.post('/alunos', alunos.adicionarAlunos)
rotas.delete('/alunos/:id', alunos.deletarAlunos)



module.exports = rotas