//JavaScript
// Gustavo Gonçalves da Rosa
/*
//---------------------------------------------------------------------- Exercícios de Interpretação de Código
//------------------- 1
const pessoa = {
nome: "Alice",
idade: 25,
temCarteiraDeMotorista: true
}
if (pessoa.idade >= 18 && pessoa.temCarteiraDeMotorista) {  // A - se a pessoa cumpre ou não os requisitos para dirigir
console.log(`${pessoa.nome} pode dirigir!`)
} else {
console.log(`${pessoa.nome} não pode dirigir.`) // B - "pode dirigir" será imprimido quando ela cumpre os requisitos necessário, e "não pode dirigir" quando não cumpre
}

//--------------------- 2

const animal = {
    nome: "Leão",
    carnivoro: true
    }
    if (animal.carnivoro) {
    console.log(`${animal.nome} é um animal carnívoro.`)       // A - o objetivo é definir se o animal é carnívoro, ou não
    } else {
    console.log(`${animal.nome} não é um animal carnívoro.`)   // B - "Leão é um animal carnívoro"
    }

//---------------------- 3

const numero = 10;
if (numero > 5) {
console.log("O número é maior do que 5.");
} else {
console.log("O número é menor ou igual a 5.");                 // A - o código mostra se um número é maior, ou menor que 5 e também pergunta se o número é par, ou ímpar
}
if (numero % 2 === 0) {                                        // B - "O número é maior do que 5." e "O número é impar."
console.log("O número é par.");
} else {
console.log("O número é ímpar.");
}

//---------------------------------------------------------------------- Exercícios de Escrita de Código

//----------------------- 1

const idade = prompt("Quantos anos você tem?");

if (idade >= 18){
    console.log("Você é maior de idade");
} else{
    console.log("Você é menor de idade");
}

//----------------------- 2

let turno = prompt("Qual turno você estuda? Responda com M, T ou N");

if (turno === "M"){
    console.log ("Bom dia!");
} else if (turno ==="T"){
    console.log("Boa Tarde!");
} else if (turno === "N"){
    console.log("Boa Noite!")
}

//----------------------- 3

switch (turno){
    case 'M':
        console.log('Bom dia!')
        break
    case 'T':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
        break
     default:
        console.log('turno não encontrado')
        break
        }


const aluno = {
    nome:prompt("Qual seu nome?"),
    idade:Number(prompt("Qual a sua idade?")),
    tipoDeCurso:prompt("Você faz algum curso de graduação? Responda Sim, ou Não"),
    temBolsa:prompt("Você tem bolsa de estudos? Responda Sim, ou Não"),
}

if(aluno.idade < 30 && aluno.tipoDeCurso === "Sim" && aluno.temBolsa === "Não"){
    console.log("Você pode se candidatar a uma bolsa de estudos!");
} else{
    console.log("Desculpe, você não atende aos requisitos para a bolsa.");
}

const produto = {
    nome:'Celular',
    preco:Number(prompt('Qual o preço do celular?')),
    desconto:Number(prompt('Qual o desconto desse produto?')),
    freteGratis: (prompt('Ele vai ter frete grátis? true/false'))
}
let precocomdesconto = ((produto.preco * produto.desconto) / 100);
let resultado = (produto.preco - precocomdesconto);

if (produto.freteGratis === 'true') {
    if (produto.desconto === 0) {
        console.log("Preço final", produto.preco, produto.freteGratis)
    } else { console.log("preço final", resultado, "com frete grátis") }

} else if (produto.freteGratis === 'false') {
    if (produto.desconto === 0) {
        console.log(produto.preco)
    } else{console.log("preço final", resultado)}
}



//-------------------------------------------------- Complementares

function calculo(a,b) {
    let soma = [a+b, a-b, a*b, a/b]
    return soma 
}
let n1 = Number(prompt("Diga um número"))
let n2 = Number(prompt("Diga outro número"))

let numero = calculo(n1, n2)
console.log(numero);

//---------------------------------------------------

function calcularMedia() {
    let numeros = [2 + 8 + 9 + 6 + 4]
    return numeros / 5
};

//---------------------------------------------------

const testes = prompt("fale uma palavra").toString();

const checkPalindrome = testes.split('');

let sla = checkPalindrome.reverse()

sla = sla.join('');

const resultados = sla === testes
console.log(resultados);
*/
