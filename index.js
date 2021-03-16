console.log("Hello world no arquivo externo");
//document.write("texto qualquer");

function clickBotao(){
    //DOM - Document object model
    //document.getElementById("paragrafo2").innerHTML = "Texto alterado com sucesso";
    //document.getElementById("paragrafo2").style.display = "none";//não mostre o elemento
    
    for (var i = 0; i < document.getElementsByClassName("paragrafo").length; i++) {
        document.getElementsByClassName("paragrafo")[i].style.color= "blue";
        document.getElementsByClassName("paragrafo")[i].style.fontWeight= "bold";
    }
}

function clickBotao2(){
    //document.getElementById("paragrafo2").style.display = "block";//para mostrar o elemento

    var botoes = document.getElementsByTagName("button");
    var i = 0;
    while (i < botoes.length) {
        botoes[i].style.fontSize = "20px";
        i++;
    }
}

function ligarLampada(){
    document.getElementById("lampada").src = "lampada_ligada.gif";
}

function desligarLampada(){
    document.getElementById("lampada").src = "lampada_desligada.gif";
}

var quantidadeElementos = 0;

function adicionarElemento(){
    var elemento = document.createElement("P");
    elemento.innerHTML = "elemento " + quantidadeElementos;

    quantidadeElementos++;

    document.getElementById("div-elementos").appendChild(elemento);
}

function removerElemento(){
    var filhos = document.getElementById("div-elementos").childNodes;
    var size = filhos.length;
    for(var i = 0; i < size; i++){
        document.getElementById("div-elementos").removeChild(filhos[0]);
    }
}