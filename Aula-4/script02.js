// Exemplo de If Else
// const horas = new Date().getHours();
// const minutos = new Date().getMinutes();
// const horario = String(horas) + ":" + String(minutos);
// let saudacao;

// if (horas < 18) {
//     saudacao = "Boa noite!";
// } else {
//     saudacao = "Bom dia!";
// }

// document.getElementById("ex1").innerHTML = saudacao + " Agora são " + horario;
// document.getElementById("ex2").innerHTML = saudacao + " Agora são " + horario;

// Exemplo if Else if
const hora = 18;
const minutos = new Date().getMinutes();
const horario = String(horas) + ":" + String(minutos);
let saudacao;

if (hora > 18) {
    saudacao = "Boa noite!";
} else if (hora > 12) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Bom dia!";
}

document.getElementById("ex1").innerHTML = saudacao ;
document.getElementById("ex2").innerHTML = saudacao + " Agora são " + horario;