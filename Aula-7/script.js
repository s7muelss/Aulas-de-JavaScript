// Exemplo de utilizacao do length em strings

let texto = "Olá, mundo!";
let tamanho = texto.length;

const elemento = document.querySelector("ex1");

elemento.innerHTML = `
<style>
    .container {
        display: flex;
        gap : 30px;
        background-color: #b31616;
    }

    .container div {
        font-size: 20px;
        color: white;
        font-weight: bold;
    }
</style> 

<h1>Esse e um novo h1</h1>
<div class="container"> 
    <div>item 1</div>
    <div>item 2</div>
    <div>item 3</div>
</div>
`;



// Exemplo de utilizacao do caracter de escape 

alert("O caracter de escape é utilizado para representar caracteres especiais, como por exemplo: \n - Aspas duplas: \" \n - Aspas simples: \' \n - Barra invertida: \\ \n - Nova linha: \\n \n - Tabulação: \\t");

let texto2 = "Exemplo de texto com aspas duplas: \"Olá, mundo!\"";
let texto3 = 'Exemplo de texto com aspas simples: \'Olá, mundo!\'';
let texto4 = "Exemplo de texto com barra invertida: C:\\Users\\Usuario\\Documents";
let texto5 = "Exemplo de texto com nova linha:\nLinha 1\nLinha 2\nLinha 3";
let texto6 = "Exemplo de texto com tabulação:\tTexto com tabulação";

// console.log(texto2);
// console.log(texto3);
// console.log(texto4);
// console.log(texto5);
// console.log(texto6);

// Exemplo de Template strings

let nome = "Samuel";
let idade = 18;
let frase = `Meu nome é ${nome} e eu tenho ${idade} anos.`;

console.log(frase);

// Exemplo de adicao de HTML com template strings em JS

const elemento2 = document.querySelector("ex2");

console.log(elemento2);

elemento2.innerHTML = `
<style>
    .container {
        display: flex;
        gap : 30px;
        background-color: #b31616;
        justify-content: center;
    }

    .container div {
        font-size: 20px;
        color: white;
        font-weight: bold;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<div class="container">
<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
</div>
`;