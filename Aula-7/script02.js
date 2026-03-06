// Utilizacao do metodo charAt() para acessar caracteres de uma string

let texto = "Abacate";
let caractere = texto.charAt(0); // Retorna o primeiro caractere
let caractere2 = texto.charAt(3); // Retorna o quarto caractere
let caractere3 = texto.charAt(6); // Retorna o sétimo caractere

console.log(caractere); // Saída: "A"
console.log(caractere2); // Saída: "c"
console.log(caractere3); // Saída: "t"

// utilizacao do metodo codePointAt() 

let exCodePointAt = texto.codePointAt(6);
console.log(exCodePointAt); // Saída: 116 (código Unicode do caractere 't')

// Utilizacao do metodo at()
let exAt = texto.at(6);
console.log(exAt); // Saída: "t"

// Utilizacao do metodo concat()
let texto2 = " verde";
let texto3 = texto.concat(texto2);
console.log(texto3); // Saída: "verde"

// Utilizacao do metodo slice()
let frutas = "Maçã, Banana, Laranja, Uva";
let exSlice = frutas.slice(0, 5); // Retorna "Maçã,"

console.log(exSlice);

// Utilizacao de toUpperCase() e toLowerCase()

let carro = "Fusca";
let carro2 = "Gol Quadrado";

let exLowerCase = carro.toLowerCase();
let exUpperCase = carro2.toUpperCase();

console.log(exLowerCase); // Saída: "fusca"
console.log(exUpperCase); // Saída: "GOL QUADRADO"

// Utilizacao do metodo isWellFormed() para verificar se uma string é bem formada

let saudacao = "Olá, seja bem-vindo!";
let isWellFormed = saudacao.isWellFormed();

console.log(isWellFormed); // Saída: true

//Utilizacao do metodo trim() para remover espaços em branco no início e no final de uma string

let samuel = "      "; // O samuel gosta do palmeiras

let exTrim = samuel.trim();

console.log(exTrim); // Saída: "" (string vazia)

