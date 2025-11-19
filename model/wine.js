class Wine extends Beverage {

    constructor(name, produttore, yob, quantity, alcohol, vite, location) {
        super(name, produttore, yob, quantity, alcohol);
        this.vite = vite;
        this.location = location;
    }

    toString(){

    }
}