// 1. Function Declaration
const PI = 3.14;

function obim(poluprečnik) {
    const rezultat = 2 * PI * poluprečnik;
    console.log(`Obim kruga sa poluprečnikom ${poluprečnik} je: ${rezultat}`);
}

obim(5); // Poziv funkcije

// 2. Function Expression
const pravougaonik = function(a, b) {
    const povrsina = a * b;
    console.log(`Površina pravougaonika sa stranicama ${a} i ${b} je: ${povrsina}`);
};

pravougaonik(4, 6); // Poziv funkcije

// 3. Funkcija kvadrat
function kvadrat(a) {
    const obimKvadrata = function() {
        return 4 * a;
    };
    
    const povrsinaKvadrata = function() {
        return a * a;
    };
    
    console.log(`Obim kvadrata sa stranicom ${a} je: ${obimKvadrata()}`);
    console.log(`Površina kvadrata sa stranicom ${a} je: ${povrsinaKvadrata()}`);
}

kvadrat(3); // Poziv funkcije

// 4. Arrow funkcija
const obimPravougaonika = (a, b) => {
    const obim = 2 * (a + b);
    console.log(`Obim pravougaonika sa stranicama ${a} i ${b} je: ${obim}`);
};

obimPravougaonika(4, 5); // Poziv funkcije

// 5. IIFE funkcija
(function(ime) {
    console.log(`Pozdrav, ${ime}!`);
})("Marko"); // Poziv funkcije
