console.log("esercizio oop");

//creare una classe Beverage con le seguenti proprietà: name, produttore, yob, quantity, alcohol
//creare una classe Beer che estende Beverage con le seguenti proprietà: type,color
//creare una classe Wine che estende Beverage con le seguenti proprietà: vite, location
//creare una classe PremiumWine che estende Wine con le seguenti proprietà: certification
//creare i toString di tutte le classi
//aggiungo proprietà chiamata bottleNumber a Beverage e un metodo chiamato sellBottles che prende come input le bottiglie da vendere e se ci sono abbastanza bottiglie le rimuove dal nr totale altrimenti non fa nulla e logga l'errore
//aggiungere una proprietà non esposta (protetta) a beverage chiamata _price (che è esposta in lettura tramite il getter, _price è espostain scrittura tramitesetter che controlla che il nuovo prezzo non sia negativo)
//

const moretti = new Beer("moretti ipa", "moretti s.p.a.", 2024, 65, 4, "ipa", "blonde");
const dolcetto = new Wine ("dolcetto bella vita", "cantine bella vita",2020, 75, 11, "dolcetto", "alba" ); 
const barolo = new PremiumWine("brunatebarolo", "Francesco Borgogno", 2021, 75, 14, "nebbiolo da barolo", "piemonte", "D.O.C.G");

console.log(moretti.toString());
console.log(dolcetto.toString());
console.log(barolo.toString());






