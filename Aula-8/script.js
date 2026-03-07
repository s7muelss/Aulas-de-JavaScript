// Utilizacao do metodo padStart()
let texto = "7";
texto = texto.padStart(3, "0");

console.log(texto);

// Utilizacao do metodo padENd()
let texto2 = "7";
texto2 = texto2.padEnd(3, "0");

console.log(texto2);

//Utilizacao do metodo repeat()
let fruta = "Laranja";
let repeticao = fruta.repeat(4);

console.log(repeticao);

//Utilizacao do metodo replace()
let carro = "Impala";
let novoCarro = carro.replace("Impala", "Chevrolet");

console.log(novoCarro); // Output: Chevrolet

//Utilizacao do metodo replaceAll()
let frase = "Gato gato gato";

frase = frase.replaceAll("gato", "cachorro");

console.log(frase); // Output: cachorro cachorro cachorro

// Utilizacao do metodo split()
let nome = "Samuel,Joao,Maria";
let exSplit = nome.split(" ");

console.log(exSplit);

//Utilizacao do metodo indexOf(), e lastIndexOf() e Search()
let exemplo = "Por favor localize onde 'localize' ocorre.";

let exIndexOf = exemplo.indexOf('localize'); 

let exLastIndexOf = exemplo.lastIndexOf('localize');

let exSearch = exemplo.search('favor')

console.log(exIndexOf);
console.log(exLastIndexOf);
console.log(exSearch);

//Utilizacao do metodo includes()
let olaMundo = "Ola, mundo. Bem-vindo ao universo.";
let exIncludes = olaMundo.includes('mundo');

console.log(exIncludes);

//Utilizacao do metodo startsWidth
let olaMundo2 = 'Ola, mundo. Bem-vindo ao universo.';
let exStartsWidth = olaMundo2.startsWith('Ola');
let exStartsWidth2 = olaMundo2.startsWith('universo');

console.log(exStartsWidth);
console.log(exStartsWidth2);

//Utilizacao do metodo endsWidth()
let nome2 = 'Samuel Sousa';
let exEndsWidth = nome2.endsWith('Sousa');

console.log(exEndsWidth);

//String
let string = new String();

console.log(string);

