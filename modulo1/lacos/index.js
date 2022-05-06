/*
INTREPRETACAO DE CODIGO

//1 .-------------------------------------------------------------------------------------------------------------------------


let valor = 0                          //declara variavel como 0 
for(let i = 0; i < 5; i++) {           // i=0 e quando for menor que 5 soma +1
  valor += i                           // o resultado que for, acrescenta +1
}
console.log(valor)                      // escrever a variavel depois do loop 
                   // valor final 10 ->0+1; 1+2; 3+3; 6+4 = 10


// 2.-------------------------------------------------------------------------------------------------------------------------

a.

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30] variavel
for (let numero of lista) {             // pede pra comprar o numero na lista   
  if (numero > 18) {                    // e se a numero for maior que 18 , ai imprime
		console.log(numero)
	}
}

logo imprimira tudo que for maior que 18, e o looping vai passando por cada numero ate imprimir os maiores de 18
19, 21,23,25,27, 30

.-------------------------------------------------------------------------------------------------------------------------
b. criaria o for of e passaria de posicao em posicao sendo checada no console....

.-------------------------------------------------------------------------------------------------------------------------
3. 


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: ")) // pergunta ao usuario quantas linhas
let quantidadeAtual = 0                                                   // declara quantidadeAtual
while(quantidadeAtual < quantidadeTotal){                                 // enquanto a quantidade atual for menor que quantidade total
  let linha = ""                                                          // decladou linha ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){ 
              //  criou let asteriscos , e sempre que o asteriscos for menos que quantidade atual +1 soma +1
    linha += "*"
  }  ///// ex: coloquei na pergunta do usuario 5 ele vai gerando asteriscos ate a quatidade atual foi menor...
  console.log(linha)
  quantidadeAtual++
}
.-------------------------------------------------------------------------------------------------------------------------

//1. escrita de codigo


let quatidadeBichinhos = Number(prompt("Quantos bichinhos de estimação vc tem ?"))
let arrayNomesPets = []

if(quatidadeBichinhos===0){
    console.log('Que pena! Você pode adotar um pet!')

}else{
    
    for(i=0; i<quatidadeBichinhos; i++){
        let NomePets = (prompt(`Informe o nome dos seus pet, um de cada vez`))
        
        arrayNomesPets.push(NomePets)

    }
    
}
console.log (arrayNomesPets)



//2. 

*/

const arrayOriginal =[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a.

// for (let numero of arrayOriginal) {
//     console.log(numero)
// }

//b.
// for (let numero of arrayOriginal) {
//     console.log(numero / 10)
// }

//c.


// function divisao (array){
//     let arrayPar=[]

//     for (let i=0; i<array.length; i++){

//         if(array[i]%2===0){
//             arrayPar.push(array[i])
//         }
    
//     }
//             console.log(arrayPar)    

// }
// divisao(arrayOriginal)


//d. 

let strings = []
    for(let i=0; i<array.length; i++)
    
}
