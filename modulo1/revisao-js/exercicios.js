// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

   function ordenarArray(a, b) {
        return  a - b;
   }
   return array.sort(ordenarArray)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
    return array.filter(pares =>( pares % 2)===0)
}   

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    const paresElevadoDois = array.filter (array => array % 2 === 0).map (function(array){
        return Math.pow(array, 2);
    })
        return paresElevadoDois

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    const numeroMaior = Math.max(...array);
    return numeroMaior;

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    const objeto = {
        maiorNumero: Math.max(num1,num2),
        maiorDivisivelPorMenor: Math.max(num1,num2)%Math.min (num1,num2)===0,
        diferenca: Math.max(num1,num2)- Math.min (num1,num2),
    }
       return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    let pares = [];
    for (let i = 0; pares.length < n; i += 2) {
        pares.push(i);
    }
    return pares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    }

    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    }

    if (ladoA !== ladoB && ladoB !== ladoC){
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
    array.sort((a, b) => a - b);
    return [array[array.length-2], array[1]];

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
    return {...pessoa, nome: "ANÔNIMO"};

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
    let pessoasAutorizadas = [];
    for (item of pessoas) {
      if (item.altura >= 1.5 && item.idade > 14 && item.idade <= 60) {
        pessoasAutorizadas.push(item);
      }
    }
    return pessoasAutorizadas;

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
    let naoAutorizadas = [];
    for (item of pessoas) {
        if (item.altura < 1.5 || item.idade <= 14 || item.idade > 60) {
            naoAutorizadas.push(item);
    }}

    return naoAutorizadas;

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    for (item of contas) {
        let dividaTotal = 0;
        for (devedor of item.compras) {
            dividaTotal += devedor;
    }
        item.saldoTotal -= dividaTotal;
        item.compras = [];
      }
      return contas;

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
    let arrayParaOrdenar = consultas.sort(function(a,b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    })
    return arrayParaOrdenar;

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}