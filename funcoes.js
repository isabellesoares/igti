function multiplicacao(p1, p2){
    console.log("function multiplicacao executada");
    return p1 * p2;
}
var resultado = multiplicacao(4, 3);
console.log(resultado);
console.log(multiplicacao(10, 2));

function saudacao(nome){
    console.log("Ola " + nome + " seja bem vindo");
}
saudacao("Isabelle");

function funcaoSemParametro(){
    var a = 1;
    var b = 2;
    console.log(a + b);
}
funcaoSemParametro();