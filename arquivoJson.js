var fs = require("fs");
var nomeArquivo = "carros.json";
var carros = ["Gol", "Palio", "Uno", "Celta"];
var concessionaria = {
    nome: "Concessionaria Xyz",
    carros
}
fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function(err){//converter a string
    if(err){
        console.log(err);
    }else{
        fs.readFile(nomeArquivo, "utf-8", function(err, data){
            if(err){
                console.log(err);
            }else{
                var obj = JSON.parse(data);//converta em string para manipular o texto
                obj.carros.push("Hilux");
                fs.writeFile(nomeArquivo, JSON.stringify(obj), function(err){
                    if(err){
                        console.log(err);
                    }
                });
            }
        });
    }
});