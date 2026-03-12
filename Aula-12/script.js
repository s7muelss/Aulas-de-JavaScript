//Criando um construtor
function Pessoa(primeiroNome, UltimoNome, idade, pais){
    this.primeiroNome = primeiroNome;
    this.UltimoNome = UltimoNome;
    this.idade = idade;
    this.pais = pais;
}

const euMesmo = new Pessoa("Samuel", "Sousa", 18, "Brasil");

const meuIrmao = new Pessoa("Howard", "Rick", 5, "Brasil");

// console.log(euMesmo);
// console.log(meuIrmao);

//Reforcando criacao de construtores de objetos
function Veiculo(marca, modelo, motorPotencia, cor, ano, roda){
this.marca = marca;
this.modelo = modelo;
this.motorPotencia = motorPotencia;
this.cor = cor;
this.rodas = this.rodas;
this.acelerar = function(){
    return this.modelo + " acelerou ";

}
}

const minhaMoto = new  Veiculo("Ducati", "Panigale", "216cv", "Vermelha", 2019, 2);
console.log(minhaMoto);

const meuCarro = new Veiculo ("Porsche", "911 turbo", "240cv", "Branco", 1988, 4);

console.log(meuCarro)

Veiculo.prototype.chassi = 123456789;

console.log(meuCarro);

meuCarro.placa = "0000-9999";

meuCarro.frear = function() {
    return this.modelo + "freou."
};

console.log(meuCarro.frear());

console.log(meuCarro.placa)

Veiculo.prototype.parar = function(){
    return this.marca + "parou."
}

console.log(meuCarro.parar());