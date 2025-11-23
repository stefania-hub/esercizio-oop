class Beer extends Beverage {
    constructor(name, produttore, yob, quantity, alcohol){
        super(name,  produttore, yob, quantity, alcohol);
        this.type = type;
        this.color = color;
    }

    toString(){
 return `Birra: ${this.name}, Tipo: ${this.type}, Colore: ${this.color}, Produttore: ${this.produttore}, Anno: ${this.yob}, Alcol: ${this.alcohol}°, Bottiglie: ${this.bottleNumber}, Prezzo: ${this.price}€`;
    }
}
    