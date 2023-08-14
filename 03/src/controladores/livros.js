let { identificador, livros } = require('../dados')

const listagemLivros = (req, res) => {
    return res.json(livros)
}

const consultarLivros = (req, res) => {
    const { id } = req.params
    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' })
    }

    const livro = livros.find((livro) => {
        return livro.id === +id
    })
    if (livro) {
        return res.json(livro)

    } else {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.' })
    }
}

const adicionarLivros = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos.' })
    }

    if (titulo.trim() === '' || autor.trim() === '') {
        return res.status(400).json({ mensagem: 'Uma de suas propriedades de texto não está preenchida.' })
    }

    const livro = {
        id: identificador++,
        titulo,
        autor,
        ano,
        numPaginas
    }
    livros.push(livro)
    return res.status(201).json(livro)

}

const substituirLivros = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'Informe um ID válido.' })
    }

    const livro = livros.find((livro) => {
        return livro.id === +id
    })
    if (livro) {
        livro.titulo = titulo
        livro.autor = autor
        livro.ano = ano
        livro.numPaginas = numPaginas
        return res.json({ mensagem: 'Livro substituído.' })
    } else {
        return res.status(404).json({ mensagem: 'Não existe livro a ser substituído para o ID informado.' })
    }

}

const alterarLivros = (req, res) => {  //ENTENDER QUAL O ERRO AQUI
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'Informe um ID válido.' })
    }

    const livro = livros.find((livro) => {
        return livro.id === +id
    })

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser alterado para o ID informado.' })
    } else { //ERRADO A PARTIR DAQUI
        if (!livro.titulo || !livro.autor || !livro.ano || !livro.numPaginas) {
            return res.status(400).json({ mensagem: 'Todos os campos devem ser preenchidos.' })
        } else {
            livro.titulo = titulo
            livro.autor = autor
            livro.ano = ano
            livro.numPaginas = numPaginas
            return res.json({ mensagem: 'Livro alterado.' })
        }
    }
}

const deletarLivros = (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'Informe um ID válido.' })
    }

    const livro = livros.find((livro) => {
        return livro.id === +id
    })
    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser deletado para o ID informado.' })

    } else {
        livros.splice(livros.indexOf(livro), 1)
        return res.json({ mensagem: 'Livro removido.' })
    }

}

module.exports = {
    listagemLivros,
    consultarLivros,
    adicionarLivros,
    substituirLivros,
    alterarLivros,
    deletarLivros
}