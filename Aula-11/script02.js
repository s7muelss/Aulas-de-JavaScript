//Criacao de metodos
const casa = {
    portas: 10,
    janelas: 20,
    telhado: true,
    laje: true,
    pets: {
        cachorro: {
            nome: "Snoop",
            raca: "Vira-lata",
            latir: function(){
                return this.nome + " Latiu: Au Au";
            },
        },
    },
}

console.log(casa.pets.cachorro.latir());

let texto = new String ("Snoop");

console.log(texto);