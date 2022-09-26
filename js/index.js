const displayValorAnte = document.getElementById('valorAnterior');
const displayValorActu = document.getElementById('valorActual');
const buttonNumer = document.querySelectorAll('.numero');
const buttonOperator = document.querySelectorAll('.operador');

const display = new Display(displayValorAnte, displayValorActu); 

buttonNumer.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNum(boton.innerHTML));
});

buttonOperator.forEach(boton => {
    boton.addEventListener('click', () => display.operar(boton.value))
});

