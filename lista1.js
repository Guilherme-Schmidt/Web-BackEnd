//Guilherme Schmidt Lingnau RA:2210924

//Exercicio 1
function fatorial (n){
    if(n<0){
        return null;
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }

    return resultado;

}

//Exercicio 2
function mensagem(m,n){
    return m.repeat(n).trim();
}

//Exercicio 3
function operacao(a,b,operacao){
    if(operacao === 'divisao' && b === 0){
        return null;
    }

    switch(operacao){

        case 'soma': return a+b;
        case 'subtracao': return a-b;
        case 'multiplicacao':return a*b;
        case 'divisao':return a/b;

        default: return null;
    }
}

// Exercicio 4
function vetTabuada(n){
    let vetor = [];
    for(let i =0;i<=10;i++){
        vetor.push(n*i);
    }
    return vetor;
}


//Exercicio 5
function inversor(n){
    let inverter = parseInt(n.toString().split('').reverse().join(''));
    return inverter;
}


//Exercicio 6
function vogais(palavra){
    const vogal = 'aeiouAEIOU';
    let cont = 0;

    for(let i=0;i<palavra.length;i++){
        if(vogal.includes(palavra[i])){
            cont++;
        }
    }
    return cont;
}


//Exercicio 7
function sequencia(seq){
    let pilha = [];
    for (let i = 0; i < seq.length; i++) {
        let char = seq[i];

        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' && pilha[pilha.length - 1] === '(') {
            pilha.pop();
        } else if (char === ']' && pilha[pilha.length - 1] === '[') {
            pilha.pop();
        } else {
            return false;
        }
    }
    return pilha.length === 0;
}

//Exercicio 8
function gerarObjetos(n){
    const nomes=['Guilherme','João','Laura','Maria','Pedro','Carlos'];

    let lista=[];

    for(let i = 0;i<n;i++){
        let id = i+1;
        let nome = nomes[Math.floor(Math.random()*nomes.length)];
        let idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

        lista.push({
            id,
            nome,
            idade
        });
    }
    return lista;
}


//Exercicio 9
function mediaIdade(lista){
    let soma = lista.reduce((acumulador, pessoa) => acumulador + pessoa.idade, 0);
    return soma / lista.length;
}

//Exercicio 10
function ordenarLista(lista, atributo) {
    return lista.sort((a, b) => {
        if (typeof a[atributo] === 'string') {
            return a[atributo].localeCompare(b[atributo]);  
        } else {
            return a[atributo] - b[atributo]; 
        }
    });
}