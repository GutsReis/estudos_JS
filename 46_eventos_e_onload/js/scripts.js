// por meio da linguagem JS podemos mapear algumas ações do usuário que são chamados de eventos.
// exp. movimento do mouse, click, mous entrando ou saindo de um elemento, carregamento da página e etc.
// cria um comportamento interessante como: animação de menu abrindo e fechando.

// O onload é ativado ao carregar a página.
// Podemos depois realizar uma ação ao nosso projeto.

window.onload = function() {

    console.log('Carregou o DOM');

    var title2 = document.querySelector('#title2');

    console.log('title2')

}

console.log('Carregou o JS');

var title = document.querySelector('#title');

console.log(title)