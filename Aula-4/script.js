// Exemplo de Condicao Logica: if e Else //
let x = 8;

if (x == 5) {
    console.log("x é igual a 5");
} else {
    console.log("x não é igual a 5");
}

// Exemplo de Condicao Logica: if, else if//
let y = 3;

if (y < 3) {
    console.log("y é maior que 3");
} else if (y == 3) {
    console.log("y e igual a 3");
} else {
    console.log("y é diferente das verificacoes.");
}

// Exemplo de if
const elemento = document.getElementById("ex1")
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ":" + String(pegarMinutos);



if (pegarHoras < 18) {
    elemento.innerHTML = "Bom dia! Agora são " + hora;
} else {
    elemento.innerHTML = "Boa noite! Agora são " + hora;
}

// Exemplo if 2
let idade = 18;
let texto = "Você é menor de idade";

if (idade >= 18) {
    texto = "Você é maior de idade";
}

document.getElementById("ex2").innerHTML = texto;

// Exemplo if Alinhado
let idade2 = 18;
let pais = "Brasil";
let mensagem = "Você nao pode votar";

if (idade2 >= 16) {
    if (pais == "Brasil") {
        mensagem = "Você pode votar";
    }
}

document.getElementById("ex3").innerHTML = mensagem;

//Exemplo de if Alinhado com operador logico AND (&&)
let idade3 = 18;
let pais2 = "Brasil";
let mensagem2 = "Você nao pode votar";

if (idade3 >= 16 && pais2 == "Brasil") {
    mensagem2 = "Você pode votar";
}

document.getElementById("ex3").innerHTML = mensagem2;
