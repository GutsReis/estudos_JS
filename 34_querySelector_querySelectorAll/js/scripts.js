// Dois seletores criados que acabam com toda complexidade da ação
// Podemos acessar os elementos baseados em regras de CSS

var itensClasse = document.getElementsByClassName('item')

console.log(itensClasse)
// Acessou todos os itens.

// querySelectorAll
var itensQuery = document.querySelectorAll('#lista2 li')

console.log(itensQuery)

var itensQuery2 = document.querySelectorAll('#lista  .item')

console.log(itensQuery2)

// querySelector(pega um elemento)
var itensQuery3 = document.querySelector('#lista')

console.log(lista)