//Array global
const frutas = ["Morango", "Abacaxi", "Acerola", "Manga"];

//Utilizando o metodo lenght ()

let tamanhoFrutas = frutas.length;

//frutas.lenght = 2;

console.log(frutas);

//Utilizando o metodo toString()
let minhasFrutas = frutas.toString();

console.log(minhasFrutas);

//Utilizando o metodo at()
let itemFrutas = frutas.at(2);
let itemFrutas2 = frutas[1];

console.log(itemFrutas);
console.log(itemFrutas2);

//Utilizando o metodo join()
let apresentacaoFrutas = frutas.join(", ");
console.log(apresentacaoFrutas);

//Utilizando o metodo pop()
let removeitemFrutas = frutas.pop();
console.log(frutas);
console.log(removeitemFrutas);

//Utilizando o metodo push()
let adicionarItemFrutas = fruta.push("Limao");
console.log(frutas);
console.log(adicionarItemFrutas);

//Utilizando metodo shift()
let deslocarItemsfrutas = frutas.shift();
console.log(deslocarItemsfrutas);
console.log(frutas);

//Utilizando o metodo unshift()
let deslocarItemsFrutas2 = frutas.unshift("Melao");
console.log(frutas);
console.log(deslocarItemsFrutas2);

frutas[0] = "Kiwi";

console.log(frutas);

//Utilizando o lenght para adcionar items ao array
frutas[frutas.lenght] = "Laranja";

console.log(frutas);

//utilizando o metodo isArray()
console.log(Array.isArray(frutas));

//Utilizando o metodo delete()
// delete frutas [0];
// delete frutas [4];
// delete frutas [2];

frutas[0] = "Abacate";

console.log(frutas);

//Utilizando o metodo concat()
const motos = ["Hornet", "Ducati", "Yamaha", ];
const carros = ["Gol", "Onix", "Marea"];

const veiculos = motos.concat(carros);

console.log(veiculos);

//Utilizando o copyWhithin()
let copaItems = frutas.copyWithin(2, 0);
console.log(frutas);

//Exemplo de matriz em JavaScript
// const matriz = [
// //     [1,2],
// //     [3,4],
// //     [5,6],
// // ];

//Exemplo de vetor em JavaScript (array unidimensional)

const comida = ["pizza", "Arroz", "Macarrao"];

//Utilizando o metodo flat()
const matriz = [[1,2], [3,4], [5,6]];

const novaListaNumeros = ListaNumeros.flat();

console.log(ListaNumeros);
console.log(matriz[0][0]);

//Utilizando o flatMap()
const listaNumeros2 = [1,2,3,4,5,6,7,8,9,10];

const novaListaNumeros2 = listaNumeros2.flatMap();

console.log(novaListaNumeros2);

//Utilizando metodo splice()
console.log(frutas);
let novaListaFrutas = frutas.splice(2,2, "pera", "Carambola");
console.log(novaListaFrutas);

//Utilizando o toSpliced()
console.log(frutas);
const frutasToSpliced = frutas.toSpliced(0, 4);
console.log(frutasToSpliced);

//Utilizando o slice()
const copiaFrutas = frutas.toSpliced(0, 0);

const frutasSlice = copiaFrutas.slice(2);

console.log(copiaFrutas);

const frutasSlice2 = copiaFrutas.slice(1, 4);

console.log(frutasSlice2);

//