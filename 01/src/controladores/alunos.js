let { alunos, identificadorAluno } = require('../dados')

const listagemAlunos = (req, res) => {
    return res.status(200).json(alunos)
};

const obterAlunos = (req, res) => {
    const { id } = req.params
    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um número válido.' })
    }
    const aluno = alunos.find((aluno) => {
        return aluno.id === +id
    })

    if (aluno) {
        return res.status(200).json(aluno)

    } else {
        return res.status(404).json({ mensagem: 'O aluno não foi encontrado' })
    }
}

const adicionarAlunos = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos.' })
    }

    if (nome.trim() === '' || sobrenome.trim() === '' || curso.trim() === '') {
        return res.status(400).json({ mensagem: 'Uma de suas propriedades de texto não está preenchida.' })
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'O aluno deve ser maior que 18 anos.' })
    }

    const aluno = {
        id: identificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }
    alunos.push(aluno)
    return res.status(201).json(aluno)

}

const deletarAlunos = (req, res) => {
    const { id } = req.params
    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um número válido.' })
    }
    const aluno = alunos.find((aluno) => {
        return aluno.id === +id
    })

    if (!aluno) {
        return res.status(404).json({ mensagem: 'O aluno não foi encontrado' })
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== +id
    })
    return res.status(204).json(aluno)
}

module.exports = {
    listagemAlunos,
    obterAlunos,
    adicionarAlunos,
    deletarAlunos
} 