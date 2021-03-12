var operacao = "soma";
var num1 = 4;
var num2 = 3;
var resultado = 0;

if(operacao === "soma"){
    resultado = num1 + num2;
} else if (operacao === "subtracao"){
    resultado = num1 - num2;
} else if(operacao === "multiplicacao"){
    resultado = num1 * num2;
} else if(operacao === "divisao"){
    resultado = num1 / num2;
}
console.log(resultado);