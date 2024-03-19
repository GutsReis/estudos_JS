// As regras de CSS ficam de forma Inline;
// Substitui a maioria das outras regras criadas.

// seleciona o elemento.
var title = document.querySelector('#title');

// adiciona o estilo (substitui a regra do CSS)
title.style.color = 'red';

// background-color
title.style.backgroundColor = 'yellow';


// selecionar elemento
var subtitle = document.querySelector('.subtitle');

// adicionar vários estilos
subtitle.style.cssText = 'color: blue; background-color: pink; font-size: 50px'
