const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	},
    {
        nome: "Maçã"
    },
    {
        nome: "Morango"
    }
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	},
    {
        nome: "Morango"
    },
    {
        nome: "Batatinha"
    }
]

function geraNomesUnicos(list1, list2) {
    const concatList = list1.concat(list2)
    const list = [...new Set(concatList.map(item => item.nome))]
    return list.map(item => {return {nome: item}})
}

console.log(geraNomesUnicos(primeiraLista, segundaLista));