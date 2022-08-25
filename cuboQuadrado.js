function cuboQuadrado(numA, numB) {
    //Calcula os cubos dos limites superior e inferior para definir o intervalo de checagem.
    const limiteInferior = Math.ceil(Math.cbrt(numA)); //Math.ceil para arredondar o valor resultante para cima pois é um limite inferior.
    const limiteSuperior = Math.floor(Math.cbrt(numB)); //Math.floor para arredondar o valor resultante para baixo pois é um limite superior.
    
    let resultado = 0;
    
    //Loop para verificar os quadrados, dos numéros inteiros entre o limite inferior e superior.
    
    for (let i= limiteInferior; i <= limiteSuperior; i++) {
        //Verificar se o número possui raiz quadrada inteira, se possuir acrescenta 1 ao resultado.
        if (Number.isInteger(Math.sqrt(i))) {
            resultado++
        }
    }
    return resultado
}

cuboQuadrado(64,729)
cuboQuadrado(3000,5000)
