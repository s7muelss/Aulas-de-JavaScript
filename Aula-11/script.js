//Utilizando o operador in
const pessoa = {
    primeiroNome: "Richard",
    ultimoNome: "Oliveira",
    idade:19,
    pais: "Brasil"
};

let exIn = ("idade" in pessoa);

console.log(exIn);

// Criacao de objetos alinhados
const pessoa2 = {
    primeiroNome: "Samuel",
    segundoNome: "Alves",
    carros:{
        carro1: "Porsche",
        carro2: "Volvo",
        carro3: "Audi"
    },
    motos: {
        moto1: "Ducati",
        moto2: "BMW"
    }
};

let moto1 = "moto1";

console.log(pessoa2.carros.carro3);
