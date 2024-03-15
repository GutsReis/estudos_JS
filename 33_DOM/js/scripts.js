// Document Object Model;
// Torna possível criar elementos, trocar, deletar no VS;
// O DOM fornece uma cópia do HTML;
// Podemos manipular eventos pelo DOM para afetar o HTML;

// Acessar o DOM caracteriza-se por identificar um elemento do HTML através de métodos;
// Depois podemos manipul[a-los da forma que quisermos.

// tag
var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis[3]);

// id
var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo)

// class
var itensDaLista = document.getElementsByClassName('item')

console.log(itensDaLista)
