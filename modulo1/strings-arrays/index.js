
 /*
//1. interpretação


 let array
 console.log('a. ', array)
//criou o array, porem nao definiu - indefinido
 
 array = null
 console.log('b. ', array)
//aqui definiu com null, e perguntou o que seria o array - null

 array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 console.log('c. ', array.length)
 //array definido como [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 //perguntou quantos digitos tem -  11

 let i = 0
 console.log('d. ', array[i])
//variavel i = 0 // apontar qual a elemento dentro do array é o i (i = 0) posição 0
//retornou 3 

 array[i+1] = 19
 console.log('e. ', array)
 // definiu a posição de i+1 para o valor 19
 //  0  1  2  3  4  5  6  7   8   9   10
 // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] logo o 4 se transformou em 19

 const valor = array[i+6]
 console.log('f. ', valor)
//declarou a constante como valor ser a posição i+6
 //  0  1  2  3  4  5  6  7   8   9   10
 // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] - como declarado a posição i+6 = 9

*/

/*

//2. interpretação

const frase = prompt("Digite uma frase")
// pediu pro usuario digitar uma frase - ex: O palmeiras não tem mundial
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// pediu pra retornar a frase nas seguintes condições 
//tudo MAIUSCULO, para substituir todos A por I e para contar quantos caracters foi digitado - 
// retorno  - O PILMEIRIS NÃO TEM MUNDIIL 27 


*/

//1.escrita de codigo


/*

const nomeUsuario = prompt("Digite seu nome de usuário")
const emailUsuario = prompt("Digite seu email")

console.log("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeUsuario +"!")
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}! `)

alert (`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}! `)
alert ("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeUsuario +"!")

*/

/*
//2.escrita de codigo

//a.

let comidasPreferidas = [ "Lasanha", "Strogonoff", "Churrasco", "salmão", "Tacho" ]
console.log(comidasPreferidas)

//b.
console.log(`Essas são as minhas comidas preferidas:`)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2]) 
console.log(comidasPreferidas[3]) 
console.log(comidasPreferidas[4])

*/

/*

//c.
let comidasPreferidas = [ `Lasanha`, `Strogonoff`, `Churrasco`, `salmão`, `Tacho` ]
let comidaUsuario = prompt(`Qual sua comida preferida?`)

comidasPreferidas[1] = comidaUsuario
console.log(comidasPreferidas)


*/

//3.



/*
//a.
let listaTarefas = []

//b.
let tarefaUm = prompt("Primeira tarefa do dia -")
let tarefaDois = prompt("Segunda tarefa do dia -")
let tarefaTres = prompt("Terceira tarefa do dia -")

//c. 
listaTarefas.push(tarefaUm, tarefaDois, tarefaTres)
console.log(listaTarefas)

//d. 
let tarefaConcluido = Number(prompt("Qual tarefa ja realizou hoje? 1, 2 ou 3?"))

console.log([tarefaConcluido -1])

let tarefaRemovida = listaTarefas.splice(tarefaConcluido -1 ,1)

console.log(tarefaRemovida)

*/