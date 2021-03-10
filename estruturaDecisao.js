var a = 50;
var b = 40;

if(a > b){
    //condicao a ser executado caso seja verdadeiro
    console.log("a maior do que b");
} else if (b < a){
    //senao, executa codigo abaixo
    console.log("b maior do que a");
}else{
    console.log("a e b sao iguais");
}

if(a > b){
    console.log("executar somente se a > b");
}
console.log("sempre executar");

var c = 30;
var d = 30;

if(c >= d){
    console.log("c maior ou igual a d");
}
if(d <= c){
    console.log("d menor ou igual a c");
}

var e = 10;
var f = "10";
if(e === f){
    console.log("e for igual a f");
}

var g = 10;
var h = "10";
if(g !== h){
    console.log("g diferente de h");
}