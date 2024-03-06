// Imprimindo informações no terminal (log ou console)
console.log("TESTE")

// Variáveis
// var, const e let
// var (comando antigo)
var testandoVar = "testanoVar"
console.log(testandoVar)

// const -> criar uma constante(variável que não sofre alterações)
const PI = 3.14
// PI = 9999 

console.log(PI)

// let -> criar uma variável que pode sofrer alterações
let nomeCompleto
console.log(nomeCompleto)
nomeCompleto = "Gustavo"
console.log(nomeCompleto)
nomeCompleto = "Gustavo Clay"
console.log(nomeCompleto)

/* 

    TIPOS DE DADOS

*/
// String
//     -> 'DASDSA' "ASDDASD" `ASDASDAS ${COMANDO EM JAVASCRIPT}`
// Number
//     -> 1 1.2 -12
// Boolean
//     -> true ou false
// array
//     -> (Matriz) lista de informações
//     -> [1,2,3,4]
// Object
//     {
//         "chave": "valor",
//         chave: 1
//     }
// null -> aunsência de valor

// undefined -> indefinido
// NaN -> não é um numero ex: 10/"olá"

/* 

    Tratamento de Dados

*/
// String
let textoCompleto = "olá tudo bem com você tudo"

console.log(textoCompleto.toUpperCase())
console.log(textoCompleto.toLowerCase())
console.log(textoCompleto.replace("tudo", "1234"))
// não existe replaceAll no node, tenho que utilizar replace com regex

let numeroEmString = String(1.56)
console.log(numeroEmString)
console.log(typeof numeroEmString)

// Number 
let stringEmNumero = Number("1.15")
console.log(stringEmNumero)
console.log(typeof stringEmNumero)

console.log(Number.parseInt("1.58"))
let testandoParseFloat = Number.parseFloat(20)
console.log(testandoParseFloat.toFixed(4))

// Array
let listaDeCarros = ["Gol", "Uno", "Corola", "Civic"]
console.log(listaDeCarros)

listaDeCarros.push("Lancer")
console.log(listaDeCarros)

listaDeCarros.pop()
console.log(listaDeCarros)

// Object
let pessoa = {
    nome: "Gustavo Clay",
    idade: 20,
    curso: "ADS",
    matricula: "202255522",
    instituicao: "IESB",
    endereco: {
        cep: "72000000",
        cidade: "Cei",
        numero: 20
    }
}

// console.log(pessoa)
console.log(pessoa.nome)
// console.log(pessoa.endereco)

pessoa.nome = "Carlos andrade"
console.log(pessoa.nome.toUpperCase())

    // Operadores Aritméticos
    // + - * / % **
    // precedência
    // ()
    // **
    //  * / %
    // + -
    // Math 




















