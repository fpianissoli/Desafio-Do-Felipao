class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "não possui um ataque definido";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
} let meuHeroi1 = new Hero("Naruto", 18, "ninja");
  let meuHeroi2 = new Hero("Dumbledore", 27, "mago");
  let meuHeroi3 = new Hero("Aang", 27, "monge");
  let meuHeroi4 = new Hero("Ragnar", 27, "guerreiro");

meuHeroi1.attack();
meuHeroi2.attack();
meuHeroi3.attack();
meuHeroi4.attack();