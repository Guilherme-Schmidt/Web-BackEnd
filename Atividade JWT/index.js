const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();
const port = 3000;

app.use(express.json());

const SECRET_KEY = 'utfpr_cp'

function gerarMensagem(){
    const msg = [
        'Seja Bem-Vindo!',
        'Ola',
        'Seu Token foi gerado',
        'Bem vindo ao curso de Desenvolvimento Back-End'
    ];

    const index = Math.floor(Math.random()*msg.length);
    return msg[index];
}

app.get('/token',(req,res) => {
    const msg = gerarMensagem();
    const token = jwt.sign({msg},SECRET_KEY,{expiresIn:'2h'})
    res.json({ token });
})

app.post('/validar', (req, res) => {
    const { token } = req.body;
  
    if (!token) {
      return res.status(400).json({ error: 'O Token é obrigatório!' });
    }
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      res.json({ msg: decoded.msg });
    } catch (error) {
      res.status(401).json({ error: 'Token inválido ou expirado!' });
    }
  });

  app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
