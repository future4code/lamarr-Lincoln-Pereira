/*


const respostaDoUsuario = prompt("Digite o número que você quer testar")// pedir numero pro usario e transforar a string em number
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) { 
  console.log("Passou no teste.") // se a reposta for divisivel por 2, logo sobrara 0, é para imprimir passou no teste
} else {
  console.log("Não passou no teste.") // se caso houver resto, é para imprimir nao passou no testo
}

// na logica todo numero par passa no teste, e todo impar nao passa no teste





let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)



a. codigo inicialmente escrito pedindo pro usuario uma fruta, e se caso tiver a fruta, ele da o valor... 
e se caso nao tiver a fruta que o usuario escreveu ele retorna o valor de 5

b. se for Maça  imprime - o preço da fruta maça é r$ 2.25. 

c.se retirar o break, o case pera vai entender que ele virou o default, pq nao tem break para parar ali...
 e logo vai puxar o valor de default por que nao tem pq parar antes.



3.



const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)



A. pedindo pro usuario um numero e ja transformando em number


b. qualquer numero maior que 0 dara a mensagem "Esse número passou no teste" , pois no if ele declara > 0.
se for qualquer numero de 0 pra menos, sempre vai bugar o codigo, pois nesse caso especifico nao tem um else pra complementar.


c.sim havera erro, pois pede pra imprimir a variavel mensagem, porem nao tem uma aplicao na mensagem,
acredito que deveria ter um else para se caso fosse <= 0 gerasse a outra mensagem - Essa mensagem é secreta!!!



exercicios de escrita de codigos


1 .




const idade = Number(prompt('Qual sua idade?'))

if (idade >= 18){
  console.log('voce pode dirigir!')
}else {
  console.log('voce nao pode dirigir')
}





2.


const turno = prompt(`Qual turno voce estuda? digite M (matutino) || V (Vespertino) || N (Noturno) `)
  
    if (turno === `M`) {
        console.log(`Bom dia`)
    }else {
        if (turno === `V`) {
        console.log(`Boa tarde`)
    }else {(turno === `N`) 
        console.log(`Boa noite`)
    }
}


/*

3.




const turno = prompt(`Qual turno voce estuda? digite M (matutino) || V (Vespertino) || N (Noturno) `)

switch (turno) {
    case 'M': 
    case 'm':
        console.log('Bom dia')
    break;
    case 'V':
    case 'v':    
        console.log('Boa Tarde')
    break;
    case 'N': 
    case 'n':
        console.log('Boa noite')
    break;
    default:
        console.log('Pelo amor de Deus amigo, digita algum desses -> M, V ou N')
}




4.


const generofilme = prompt('qual o gênero de filme que vamos assistir?') === 'fantasia'
const valorIngresso = prompt('o preço do ingresso?') <=15

function verificacao (generofilme, valorIngresso) {
    if (generofilme && valorIngresso){
        console.log('Bom filme!')
    }else{
        console.log('escolha outro filme :(')
    }
}

verificacao (generofilme, valorIngresso)



1. desafio



const generofilme = prompt('qual o gênero de filme que vamos assistir?') === 'fantasia'
const valorIngresso = prompt('o preço do ingresso?') <=15

function verificacao (generofilme, valorIngresso) {
    if (generofilme && valorIngresso){
        lanchinho = prompt('qual lanchinho vamos comprar (pipoca, chocolate, doces, etc)')
        console.log('Bom filme!')
        console.log(`e aproveite seu ${lanchinho}`)
    }else{
        console.log('escolha outro filme :(')
    }
}

verificacao (generofilme, valorIngresso)



2. 


*/

