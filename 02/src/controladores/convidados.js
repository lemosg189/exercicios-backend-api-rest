let [...convidados] = require('../dados')

const consultaConvidados = (req, res) => {
    if (req.query.nome === "" || !req.query.nome) {
        res.json(convidados)

    } else if (req.query.nome) {
        const validacao = convidados.find(nome => req.query.nome.toLowerCase() === nome.toLowerCase())
        if (validacao) {
            res.json('Convidado presente.')

        } else {
            res.json('O convidado buscado não está presente na lista.')
        }
    }
}

const adicionaConvidados = (req, res) => {
    const { nome } = req.body
    let verificar = convidados.find(convidado => convidado.toLowerCase() === nome.toLowerCase())
    if (verificar) {
        res.json('O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.')
    } else {
        convidados.push(nome)
        res.json('Convidado adicionado.')
    }
}

const removerConvidados = (req, res) => {
    const { nome } = req.params

    const verificar = convidados.find(convidado => nome.toLowerCase() === convidado.toLowerCase())
    if (!verificar) {
        return res.json('O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.')

    } else {
        convidados = convidados.filter((nome) => {
            return verificar !== nome
        })
        res.status(202).json('Convidado removido.')
    }
}

module.exports = {
    consultaConvidados,
    adicionaConvidados,
    removerConvidados
}