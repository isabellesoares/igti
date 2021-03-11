//arara

//passo 1 - receber uma palavra e guardar em uma variavel
//passo 2 - inverter a palavra e armazenar em outra variavel
//parte 3 - comparar a palavra original com a invertida, se for igual é palindromo

var palavra = "arara"
var palavraInvertida = "";
   
/*for(var i = 0; i < palavra.length; i++){
   // console.log(palavra[i]);
   palavraInvertida = palavraInvertida + palavra[i];
}*/

for(var i = palavra.length - 1; i >= 0; i--){
    palavraInvertida = palavraInvertida + palavra[i];
}

//console.log(palavra);
//console.log(palavraInvertida);

if(palavra === palavraInvertida){
   console.log(palavra  +  " É um palindromo"); 
}else{
    console.log(palavra  +  " Não é um palindromo"); 
}