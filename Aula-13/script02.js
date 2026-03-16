//Definindo uma array global
const times = ["Sao paulo", "Corinthians", "Palmeiras", "Santos"]

//Utilizando IndexOf()
let posicaoItem = times.indexOf("Palmeiras");

console.log(times);
console.log(posicaoItem);

//Utilizando o lastIndexOf();
const times2 = ["Sao Paulo", "Corinthians", "Palmeiras"]

let posicaoItem2 = times2.lastIndexOf("Sao Paulo");

console.log(times2);
console.log(posicaoItem);

//Utilizando o metodo includes()
let verificadoExistenciaItem = times.includes ("Palmeiras");

console.log(verificadoExistenciaItem);