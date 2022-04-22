// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  let altura = prompt(`digite altura do triangulo`)
  let largura= prompt(`digite largura do triangulo`)

  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt(`Em qual ano estamos?`))
  let anoNascimento = Number(prompt(`Em qual ano vc nasceu?`))
  
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  imc = peso / (altura * altura)
  return (peso / (altura*altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome = prompt(`Qual seu nome?`)
  let idade = prompt(`Qaul sua idade?`)
  let email = prompt(`Qual seu email?`)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
  let cor1 = prompt(`Qual sua cor preferida n°1?`)
  let cor2 = prompt(`Qual sua cor preferida n°2?`)
  let cor3 = prompt(`Qual sua cor preferida n°3?`)
  
  const arrayCores = [cor1, cor2, cor3]

  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  let test = string.toUpperCase()
  return test

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  venderIngresso = custo / valorIngresso
  return venderIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array [array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let arrayTroca = array   
  let ultimo = array [array.length -1]
  let primeiro = array [0]
  arrayTroca.pop()
  arrayTroca.splice(0,1)
  arrayTroca.push(primeiro)
  arrayTroca.unshift(ultimo)

  return arrayTroca 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt('Qual ano estamos?'))
  let anoNascimento = Number(prompt('Qual ano vc nasceu?'))
  let anoEmissao = Number(prompt('Qual ano da emissao de sua carteira?'))

  let idade = anoAtual - anoNascimento

  let renovacao20anos = (idade <=20) && ((anoAtual - anoEmissao) >=5)
  let entre20e50anos =  (idade >20) && (idade <=50) && ((anoAtual - anoEmissao) >=10) 
  let maisQue50 = (idade >50) && ((anoAtual - anoEmissao) >=15)

  let resultado = renovacao20anos || entre20e50anos || maisQue50 

  console.log(resultado)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui




}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}