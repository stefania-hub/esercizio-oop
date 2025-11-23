class Wine extends Beverage {

    constructor(name, produttore, yob, quantity, alcohol, vite, location) {
        super(name, produttore, yob, quantity, alcohol);
        this.vite = vite;
        this.location = location;
    }

    toString(){
 return `Vino: ${this.name}, Vitigno: ${this.vite}, Zona: ${this.location}, Produttore: ${this.produttore}, Anno: ${this.yob}, Alcol: ${this.alcohol}°, Bottiglie: ${this.bottleNumber}, Prezzo: ${this.price}€`;
    }
}


