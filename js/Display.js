class Display{
    constructor(displayValorAnte, displayValorActu){
        this.displayValorActu = displayValorActu;
        this.displayValorAnte = displayValorAnte;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*',
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValor();
    }

    reset() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValor();
    }

    operar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValor();

    }

    agregarNum(numero){
        if(numero=='.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero;
        this.imprimirValor();
    }

    imprimirValor(){
        this.displayValorActu.textContent = this.valorActual;
        this.displayValorAnte.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;

    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior) ) return 
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }

    
}