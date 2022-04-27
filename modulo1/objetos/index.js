/*
1.

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
              // OBJETO FILME CRIADA DECLARANDO NOME ANO ELENCO E TRANMISOES HJ E JA DECLAROU OS VALORES


	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])    //pediu pra imprimir de filme, no elenco a posicao 0 = Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])  // pediu pra imprimir de filme, o ultimo nome de elenco = Virginia Cavendish
console.log(filme.transmissoesHoje[2])  // pediu pra imprimir de filme, posicao 2 de transmissoeshoje  = {canal: "Globo", horario: "14h"}


2.



const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//criou o objeto cachorro com nome idade raca e os valores
// criou o objeto gato copiando a funcao cachorro mudando apenas o nome para juba
// criou o objeto tartaruga copiando a funcao gato mudando o nome e aplicou replaceAll alterando todos a , para o)


//a.
console.log(cachorro) // = {nome: 'Juca', idade: 3, raca: 'SRD'}
console.log(gato)     // = {nome: 'Juba', idade: 3, raca: 'SRD'}
console.log(tartaruga)// = {nome: 'Jubo', idade: 3, raca: 'SRD'}


b. a sintaxe copia o objeto e vc ainda pode acresentar ou alterar algum elemento dentro do objeto...

3.


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]              // criou uma funcao que retorna objeto e o valor
}


const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

//a. e b.

console.log(minhaFuncao(pessoa, "backender")) // pediu pra imprimir o valor do objeto/beckender = false
console.log(minhaFuncao(pessoa, "altura"))  // // pediu pra imprimir o valor do objeto/altura = nao foi declarado esse valor dentro do objeto, valor deve ser undefined





escrita de codigo
1.____________________________
a.



const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]

}

function minhaFuncao(){
    const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
    return frase
}
console.log(minhaFuncao())


// b.

const outraPessoa ={...pessoa, apelidos: ["Amandoca", "Mands", "Amandona"]}

console.log(`Eu sou ${outraPessoa.nome}, mas pode me chamar de: ${outraPessoa.apelidos[0]}, ${outraPessoa.apelidos[1]} ou ${outraPessoa.apelidos[2]}`)



2 ____________________________
a.



const pessoa1 = {
    nome: "lincoln",
    idade: 30,
    profissao: "Estudante"
}

const pessoa2 = {
    nome: "julia",
    idade: 23,
    profissao: "herdeiro"
}

// b.


function retorno (obj){
    let objeto = [ obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length ]
    return [objeto]
}
console.log(retorno (pessoa1))
console.log(retorno (pessoa2))




3.______________________________

let carrinho = []
    
const fruta1 = {
    nome: "morango",
    disponibilidade: true
}

const fruta2 = {
    nome: "banana",
    disponibilidade: true
}

const fruta3 = {
    nome: "uva",
    disponibilidade: true
}


function addFruta (fruta){
    carrinho.push(fruta)
}

addFruta(fruta1) 
addFruta(fruta2)
addFruta(fruta3)

console.log(carrinho)



*/

