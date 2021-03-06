/* Jogo de adivinhação

1) Gerar um numero aleatorio entre 1 e 100
2) Inicializar o numero de tentativas como 10
3) Pedir ao jogador para tentar adivinhar o número aleatório
4) Decrementar o numero de tentativas
5) Verificar se a tentativa esta correta
6) Se estiver correta:
    -Informar que acertou o numero
    -Encerrar o jogo
7) Se estiver incorreta, e acabaram as tentativas:
    - Informar que ele não venceu
    - Encerrar o jogo
8) Se estiver incorreta, e ainda existirem tentativas:
    - Informar se a tentativa é maior ou menor que o número sorteado
    - Pedir outra tentativa para o jogador
*/

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var numeroAleatorio = Math.round(Math.random() * 100);
    if(numeroAleatorio === 0){
        numeroAleatorio = 1;
    }

var numeroTentativas = 10;

//console.log(numeroAleatorio);

pergunta();

function pergunta(){
    rl.question("Digite um numero: ", function(numero){
        numero = parseInt(numero);
        numeroTentativas--;
        if(numero === numeroAleatorio){
            console.log("Parabéns você acertou o número");
            rl.close();
        } else if(numeroTentativas === 0){
            console.log("Que pena você não descobriu o número em 10 tentativas");
            rl.close();
        }else if(numero > numeroAleatorio){
            console.log("Número errado, voce ainda tem " + numeroTentativas + " tentativas. " + 
                        "O número informado é maior que o sorteado");
            pergunta();
        }else {
            console.log("Número errado, voce ainda tem " + numeroTentativas + " tentativas. " + 
                        "O número informado é menor que o sorteado");
            pergunta();
        }
    });
}