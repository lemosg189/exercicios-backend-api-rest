function verificarSenha(req, res, next) {
    const senha = req.params.senha;
    const senhaCorreta = 'cubos123'

    if (senha === senhaCorreta) {
        next();
    } else {
        res.status(401).send('Senha incorreta');
    }

}