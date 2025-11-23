class Beverage {

    constructor(name, produttore, yob, quantity, alcohol){
        this.name = name;
        this.produttore = produttore;
        this.yob = yob;
        this.quantity = quantity;
        this.alcohol = alcohol;
    }

    toString(){

    }

}

class Beverage {

    constructor(name, produttore, yob, quantity, alcohol) {
        this.name = name;
        this.produttore = produttore;
        this.yob = yob;
        this.quantity = quantity;
        this.alcohol = alcohol;

        this.bottleNumber = quantity; // numero bottiglie disponibili

        this._price = 0; // protetta
    }

    // GETTER prezzo
    get price() {
        return this._price;
    }

    // SETTER prezzo (non negativo)
    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        } else {
            console.error("Il prezzo non può essere negativo.");
        }
    }

    // metodo vendita
    sellBottles(n) {
        if (n <= this.bottleNumber) {
            this.bottleNumber -= n;
        } else {
            console.error("Bottiglie insufficienti per completare la vendita.");
        }
    }

    toString() {
        return `Bevanda: ${this.name}, Produttore: ${this.produttore}, Anno: ${this.yob}, Gradazione: ${this.alcohol}°, Bottiglie: ${this.bottleNumber}, Prezzo: ${this.price}€`;
    }
}
