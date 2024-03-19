// É ativado quando uma tecla é pressionada.

// keydown
document.addEventListener('keydown', function(event) {
if(event.key === 'enter') {
    console.log('apertou enter');
}

})

// keyup
document.addEventListener('keyup', function(e) {
    if(event.key === 'Enter') {
        console.log('soltou o enter')
    }
})