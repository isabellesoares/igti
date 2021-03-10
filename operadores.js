var soma = 4 + 2;
var subtracao = 5 - 2;
var multiplicacao = 5 * 2;
var divisao = 6 / 2;
var resto = 20 % 3;

console.log("soma: " + soma);
console.log("subtração: " +  subtracao);
console.log("multiplicação:  " +  multiplicacao);
console.log("divisão: " +  divisao);
console.log("resto: " +  resto);

var num1 = 10;
var num2 = 50;
var resultado = (num2 + num1) / (8 + 2);
console.log("precendencia: " + resultado);

var incremento = 1;
incremento = incremento + 1;
incremento++;
console.log("incremento: " + incremento);

var atribuicaoComAdicao = 5;
atribuicaoComAdicao += 6; //o mesmo que a = a + 6
console.log("atribuicaoComAdicao: " + atribuicaoComAdicao);

var decremento = 5;
//decremento = decremento - 1;
decremento--;
console.log("decremento: " + decremento);

var atribuicaoComSubtracao = 10;
//atribuicaoComSubtracao = atribuicaoComSubtracao - 4;
atribuicaoComSubtracao -= 4;
console.log("atribuicao Com Subtracao: " + atribuicaoComSubtracao);

var atribuicaoComMultiplicacao = 4;
//atribuicaoComMultiplicacao = atribuicaoComMultiplicacao * 5;
atribuicaoComMultiplicacao *= 5;
console.log("atribuicao Com Multiplicacao: " + atribuicaoComMultiplicacao);

var atribuicaoComDivisao = 20;
//atribuicaoComDivisao = atribuicaoComDivisao / 4;
atribuicaoComDivisao /= 4;
console.log("atribuicao Com Divisao: " + atribuicaoComDivisao);

var a = 4;
var b = 3;
var adicaoIncrementoPosterior = a + b++;
console.log("adicaoIncrementoPosterior: " + adicaoIncrementoPosterior);
console.log(b);

var a = 4;
var b = 3;
var adicaoIncrementoAnterior = a + ++b;
console.log("adicaoIncrementoAnterior: " + adicaoIncrementoAnterior);
console.log(b);


var c = 5;
var d = 6;
var subtracaoDecrementoPosterior = c + d--;
console.log("subtracaoDecrementoPosterior: " + subtracaoDecrementoPosterior);

var subtracaoDecrementoAnterior = c + --d;
console.log("subtracaoDecrementoAnterior: " + subtracaoDecrementoAnterior);