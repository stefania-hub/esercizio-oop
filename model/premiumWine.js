

class PremiumWine extends Wine {

    constructor(name, produttore, yob, quantity, alcohol, vite, location, certification) {
        super(name, produttore, yob, quantity, alcohol, vite, location);
        this.certification = certification;
    }

    // Sovrascrivo il getter del prezzo
    get price() {
        const base = super.price;
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.yob;

        return base + (base / 10 * age);
    }

    toString() {
        return `Vino Premium: ${this.name}, Vitigno: ${this.vite}, Zona: ${this.location}, Certificazione: ${this.certification}, Anno: ${this.yob}, Alcol: ${this.alcohol}°, Bottiglie: ${this.bottleNumber}, Prezzo Premium: ${this.price.toFixed(2)}€`;
    }
}
