////Project euler - exercicio 2
////////Parte 1 - encontrar a sequencia de Fibonacci ate 4000000
///Parte 2 - percorrer a sequencia gerada encontrando os numeros pares
//Parte 3 - somar os numeros pares

//Parte 1
var array = [1,2];
var valor = 3;
var soma = 2;
while (valor <= 4000000) {
    array.push(valor);

    if(valor % 2 === 0){
        soma += valor;
    }
   /* var ultimaPosicao = array.length - 1;
    var penultimaPosicao = array.length -2;
    valor = array[ultimaPosicao] + array[penultimaPosicao];*/
    valor = array[array.length - 1] + array[array.length - 2];
}
console.log(soma);

//Parte 2
//var pares = [];

/*for(var i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
       // pares.push(array[i]);
       soma += array[i];
    }
}
console.log(array);*/

//Parte 3 estará no metodo acima
/*var soma = 0;
for(var i = 0; i < pares.length; i++){
    soma += pares[i];
}
console.log(soma);*/









/*var array = [1,2];
var valor;
while(true){
    valor = array[array.length - 1] + array[array.length - 2];
    if(valor <= 4000000){
        array.push(valor);
    }else{
        break;
    }
}
console.log(array)*/
