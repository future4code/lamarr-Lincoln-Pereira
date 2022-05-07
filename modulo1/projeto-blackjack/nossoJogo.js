/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 const mensagemInicial = (`Boas vindas ao jogo de Blackjack!`)
 console.log (mensagemInicial)

   let iniciarRodada =  confirm(`Quer iniciar uma nova rodada?`)

if (iniciarRodada === true){

   let usuarioCarta1 = comprarCarta()
   let usuarioCarta2 = comprarCarta()

   let computadorCarta1 = comprarCarta()
   let computadorCarta2 = comprarCarta()

let somaUsuario = usuarioCarta1.valor + usuarioCarta2.valor
let somaComputador = computadorCarta1.valor + computadorCarta2.valor

console.log(`Usuario cartas : ${usuarioCarta1.texto} ${usuarioCarta2.texto}`)

console.log (`Computador cartas : ${computadorCarta1.texto} ${computadorCarta2.texto}`)

if (somaUsuario>somaComputador){
   console.log(`O usuario Ganhou!`)
   
} else if (somaComputador>somaUsuario){
   console.log(`O computador Ganhou!`)

}else if (somaUsuario===somaPc){
   console.log(`O jogo terminou Empatado!`)
}}
   else {
         (console.log(`O jogo acabou`))}
