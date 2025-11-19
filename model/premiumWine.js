class PremiumWine extends Wine{
        constructor(name, produttore, yob, quantity, alcohol, vite, location, certification) {
        super(name, produttore, yob, quantity, alcohol, vite, location);
        this.certification = certification;
    }

    toString(){

    }
}