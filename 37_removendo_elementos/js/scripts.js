// É mais facil remover o elemento do que criar em JS
// Temos como remover o elemento diretamente e um elemento filho também.

// Removendo elemento filho
var container = document.querySelector('#container')

var p = document.querySelector('#container p')

container.removeChild(p)

// Removendo o elemento em si
var subtitle = document.querySelector(".subtitle")

subtitle.remove()