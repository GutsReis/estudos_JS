// Click é ativado quando o usuário clica em algum elemento, sem limitações a botões e unputs.
// por meio de uma callback podemos fazer modificações e alterações no html/CSS da página

// inserir click
var btn = document.querySelector('#btn');

console.log(btn)

btn.addEventListener('click', function() {

    console.log('clicou');

    console.log(this);

    this.style.color = 'red'
});


// Click afetando outros elementos
var title = document.querySelector('#title');

title.addEventListener('click', function(){

    var subtitle = document.querySelector('.subtitle');

    subtitle.style.display = 'none'

    console.log('teste')
})

// double Click
var subtitle = document.querySelector('.subtitle');

subtitle.addEventListener('dblclick', function(){

    console.log('click duplo')
});