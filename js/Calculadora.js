class Calculadora {
    sumar(num1, num2){
        return num1 + num2;
    }

    restar(num1, num2){
        return num1 - num2;
    }

    multiplicar(num1, num2){
        if(num2 == 0){
            return 0
        } else if (num1 == 0){
            return 0
        }else{
            return num1 * num2;

        }
        
    }

    dividir(num1, num2){
        return num1 / num2;
    }
}