// O mouseover é ativado quando o ponteiro do mouse passa por cima do elemento e criamos o evento.
// mouseout é quando o ponteiro sai do elemento. 

// evento de mouseover
var title = document.querySelector('#title');

title.addEventListener('mouseover', function() {

    this.style.backgroundColor = 'Yelow';

})

// evento de mouseout
title.addEventListener('mouseout', function() {

    this.style.backgroundColor = 'white';
})

// afetar outro elemento com mouseover
var subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('mouseover', function () {

    var legenda = document.querySelector('#legenda');

    legenda.classList.remove('hide')
})

subtitle.addEventListener('mouseout', function () {

    var legenda = document.querySelector('#legenda');

    legenda.classList.remove('hide')
})