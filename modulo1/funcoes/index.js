/*

1.
A.
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) VARIAVEL CONSOLE1
console.log(minhaFuncao(10)) VARIAVEL CONSOLE2

INDICA QUE A FUNÇAO minhaVariavel RETORNE  (VARIAVEL *5)
(CONSOLE 1) 2*5 = 10
(CONSOLE 2) 10*5 = 50



B. ACREDITO QUE NAO GERARIA NADA, PQ ELE ENTENDERIA VARIAVEL(2) VARIAVEL(10) 
COMO NAO IMPRIMIU, NAO FAZ O PAPEL DE CALCULAR...
 

*/
/*

2
a.
let textoDoUsuario = prompt("Insira um texto"); //pede um texto qualquer pro usuario

const outraFuncao = function(texto) { // na funcao pede pra retornar tudo minusculo e se tem "cenoura" incluso no texto...
	return texto.toLowerCase().includes("cenoura") // se nao tiver a palavra cenoura ele sempre vai retonar false
}

const resposta = outraFuncao(textoDoUsuario) // cria uma constante falando que a resposta do usuario precisa ser aplicado na funcao...
console.log(resposta) // e aqui pede a resposta com a funcao aplicada 


b.
a saida sera
true
true 
true
pq? pq sempre retorna true se tiver a palavra cenoura... maiusculo ou minusculo

 */


/*

1.
A.


function imprimeImformaçoesUsuario() {

    let nome = prompt(`qual o seu nome?`)
    let idade = prompt(`qual a sua idade?`)
    let moraOnde = prompt(`mora onde??`)
    let profissao = prompt(`qual sua profissao?`)
  

    
    console.log(`Olá, meu nome é ${nome} tenho ${idade}anos, moro em ${moraOnde}e atualmente sou ${profissao}!`)
  
  
}
imprimeImformaçoesUsuario()
*/

/*
B.

function imprimeImformaçoesUsuario(nome , idade ,moraOnde , profissao) {

    
     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${moraOnde} e sou ${profissao}.`

    
}

console.log (imprimeImformaçoesUsuario("Lincoln", 32 , "Vinhedo" , "estudante"))

*/

/*

2
A.


function numeroSoma (num1,num2) {
    
    return num1 + num2
    
}
console.log(numeroSoma(1, 4))

*/
/*

B.

function numComparacao (num1, num2){

    return num1 >= num2

}
console.log(numComparacao(3,4))


C.



function numComparacao (num1){

    return num1 % num1 === 0

}
console.log(numComparacao (12))

D.
*/
/*

function frase (string) {

    let fraseTamanho = string.length
    let fraseMaiuscula = string.toUpperCase()
    
    console.log(fraseTamanho, fraseMaiuscula)
    
}
frase ("o palmeiras nao tem mundial")

function frase (string) {
    
    return `A frase maiuscula é ${string.toUpperCase()} e seu tamanho é ${string.length}`
    
}
console.log (frase(`o palmeiras nao tem mundial`))
/*
3.





function operacoesBasicas (soma, subtracao, multiplicacao, divisao)

*/