class Heroi {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    atacar() {
        let atack;
        switch (this.type.toLowerCase()) {
            case "mago":
                atack = "magia";
                break;
            case "guerreiro":
                atack = "espada";
                break;
            case "monge":
                atack = "artes marciais";
                break;
            case "ninja":
                atack = "shuriken"
                break;
        }
        console.log(`O ${this.type} de nome ${this.name} e idade ${this.age + " anos"} atacou usando ${atack}`);
    }

}
const heroi1 = new Heroi("Raian", 19, "mago")
const heroi2 = new Heroi("Felipe", 27, "guerreiro")
const heroi3 = new Heroi("Amanda", 18, "monge")
const heroi4 = new Heroi("João", 33, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()

