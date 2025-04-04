const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const USUARIOS = {
    "Ana Carolina": "ana123",
    "João Augustto": "joao123"
};

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    if (USUARIOS[usuario] && USUARIOS[usuario] === senha) {
        return res.json({ message: `Seja bem-vindo(a), ${usuario}!` });
    } else {
        return res.status(401).json({ error: 'Login inválido!' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
