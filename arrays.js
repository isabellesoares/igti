var carros = ["Gol", "Palio", "Uno"];
//console.log(carros);

var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2];

console.log("Primeira posição: " + primeiroCarro);
console.log("segunda posição: " + segundoCarro);
console.log("terceira posição: " + terceiroCarro);

carros[2] = "Corolla";
console.log(carros[2]);
console.log(terceiroCarro);

console.log("tamanho do array: " + carros.length);
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

carros[3] = "Fox";
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

carros[carros.length] = "Honda fit";
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

carros.push("Polo");
console.log(carros);
