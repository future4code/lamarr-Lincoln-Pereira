// Exercícios de interpretação de código

//1.



/*
//a. 

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

R: ele cria uma funcao que pede para mapear item idex array
basicamente so imprime a variavel numa nova array


//2. 
//a.

mesma variavel.


//     variavel    mapear usuarios           elementos
const novoArrayB =   usuarios.map      ((item, index, array) => {  
   return item.nome   // retornar apenas nome 
})

console.log(novoArrayB) ///e colocar dentro de novo array

//3.
//a.
 mesma variavel


 //     variavel      filtrar em usuarios           elementos           
   const novoArrayC = usuarios.filter         ((item, index, array) => {
     return item.apelido !== "Chijo" retornar tudo que estiver diferente de CHIJO
  })
  
  console.log(novoArrayC) // imprimir

  R:
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },


    
---------------------------------------------------------------------------------------
// Exercícios de escrita de código

//1.


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]


//a.
const arrayNomes = pets.map((item, index, array) => {  
    return item.nome   
 })

console.log(arrayNomes)


//b. 
const arraySalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha" 
 })
 
console.log(arraySalsicha)

//c.

const arrayDesconto = pets.filter((item) => {
    return item.raca === "Poodle"

 }) .map((item) => {
    return  `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(arrayDesconto)



//2. 
/*


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


//a.
const produtoNomes = produtos.map((item, index, array) => {  
    return item.nome   
})
console.log(produtoNomes)


//b.
const arraySemCategoria = produtos.map((item) =>  { 
    return {
        nome: item.nome , 
        preco: (item.preco - (item.preco/20)).toFixed(2)
    }
})
console.log(arraySemCategoria)


//c. 
const arrayBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas" 
        
})
console.log(arrayBebidas)


//d. 
const buscarYpe = produtos.filter((item) =>{
    return item.nome.includes("Ypê")
})
console.log(buscarYpe)


//e.
const filtrarPreco = buscarYpe.map((item) =>{
    return `Compre ${item.nome}, por ${item.preco}`
})
console.log(filtrarPreco)

*/