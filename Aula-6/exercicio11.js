// Exercicio 11: faca um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar que um ano tem 365 dias e um mes tem 30 dias.

alert("Idade em Dias");

let anos = parseInt(prompt("Digite a idade em anos: "));
let meses = parseInt(prompt("Digite a idade em meses: "));
let dias = parseInt(prompt("Digite a idade em dias: "));

let idadeEmDias = (anos * 365) + (meses * 30) + dias;

alert("A idade expressa em dias é: " + idadeEmDias);