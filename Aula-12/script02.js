//Primeiro array
// const frutas = ["Laranja", "Melancia", "Melao", "Uva"];

console.log(frutas);

//Adcionando temas array
const carros = [];

carros[0] = "Volkswagen";
carros[1] = "Fiat";
carros[2] = "Honda";

console.log(carros);

//Criando array com new Array()
const cores = new Array ("vermelho", "Amarelo", "Laranja");

console.log(cores);

console.log(cores[0]);

//Alterando elementos de Array
const fruta = ["Laranja", "Melancia", "Melao", "Uva"];

fruta[0] = "Tangerina";

console.log(frutas[0]);

//Convertendo Array em String
let stringFrutas = frutas.toString();

console.log(stringFrutas);
console.log(typeof frutas);

//Exemplo de elementos em array
const pessoa = {
  primeiroNome: "Richard",
  ultimoNome: "Oliveira",
  idade: 19,
  pais: "Brasil",
}
function minhaFuncao() {
    return "Ola";
}

const meuArray = [];

meuArray[0] = 123;
meuArray[1] = pessoa;
meuArray[2] = minhaFuncao;

console.log(meuArray);

//Acessando a propriedade length
const frutas = ["Laranja", "Melancia", "Melao", "Uva"];

let fruta = frutas

console.log(frutas);

//Usando forEach em Array
const elemento = document.querySelector(" .ex1");
const comida = ["Pizza", "Sushi", "Macarrao", "Salada", "Carne"];

let texto = "<ul>";

comida.forEach(retornaItem);

texto = texto + "</ul>"

function retornaItem(item){
 texto = texto + "<li>" + item + "</li>";
}
