//Guilherme Schmidt Lingnau RA:2210924

const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended:true}))

//1. Crie 2 rotas e apresente uma hiperligação (link) em cada uma delas para a outra.

app.get('/rota1',(req,res)=>{
    res.send('<a href="/rota2">Rota 2</a>');
})

app.get('/rota2',(req,res)=>{
    res.send('<a href="/rota1">Rota 1</a>');
})

//2. Crie uma rota que receba um texto por parâmetro GET (query) e exiba o mesmo invertido.

app.get('/inverter',(req,res)=>{
    const texto = req.query.texto;
    if(texto){
        const textoInvertido = texto.split('').reverse().join('');
        res.send(`${textoInvertido}`);
    }
    else{
        res.send("Forneça o texto");
    }
})

//3. Crie uma rota que receba 2 valores por POST (usuário e senha) e faça a validação da mesma. Se a senha for 2 vezes o nome do usuário, exiba uma mensagem de que o usuário possui permissão de acesso, caso contrário informe que não possui. Exemplo: usuário  root, senha: rootroot, acesso ok.

//Neste caso foi passado a url http://localhost:3000/cadastro no insomnia e um json com usuario e senha

app.post('/cadastro',(req,res)=>{
    const{usuario, senha} = req.body;

    if(!usuario || !senha){
        return res.send("Usuario/senha não foi fornecido")
    }
    if(senha === usuario + usuario){
        res.send("Acesso Ok");
    }
    else{
        res.send("Acesso negado");
    }
})

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})
