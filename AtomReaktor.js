let reaktorMukodik = false;
let jelenlegiHomerseklet = 0;
let jelenlegiEnergia = 0;

const reaktorStatuszElem = document.getElementById('reaktorStatusz');
const homersekletElem = document.getElementById('homerseklet');
const energiaElem = document.getElementById('energia');
const reaktorInditasGomb = document.getElementById('reaktorInditasGomb');
const reaktorLeallitasGomb = document.getElementById('reaktorLeallitasGomb');
const hutovizGomb = document.getElementById('hutovizGomb');

// Véletlenszerű szám generálása egy adott tartományban
function veletlenSzam(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reaktor beindítása
reaktorInditasGomb.addEventListener('click', () => {
    if (!reaktorMukodik) {
        reaktorMukodik = true;
        reaktorStatuszElem.textContent = 'Működik...';
        reaktorInditasGomb.disabled = true;
        reaktorLeallitasGomb.disabled = false;
        hutovizGomb.disabled = false;

        setTimeout(() => {
            // Hőmérséklet és energia véletlenszerű generálása
            jelenlegiHomerseklet = veletlenSzam(40, 100);
            homersekletElem.textContent = jelenlegiHomerseklet;

            let ujEnergia = veletlenSzam(jelenlegiEnergia + 1, jelenlegiEnergia + 10);
            jelenlegiEnergia = ujEnergia;
            energiaElem.textContent = jelenlegiEnergia;
        }, 2000); // 2 másodperces késleltetés
    }
});

// Reaktor leállítása
reaktorLeallitasGomb.addEventListener('click', () => {
    if (jelenlegiHomerseklet < 70) {
        reaktorMukodik = false;
        reaktorStatuszElem.textContent = 'Leállítva';
        reaktorInditasGomb.disabled = false;
        reaktorLeallitasGomb.disabled = true;
        hutovizGomb.disabled = true;
        homersekletElem.textContent = '-';
        energiaElem.textContent = '-';
        jelenlegiEnergia = 0;  // Reseteljük az energiát a következő indításhoz
    } else {
        alert('Nem lehet leállítani a reaktort, a hőmérséklet túl magas! Hűtés szükséges.');
    }
});

// Hűtővíz beengedése
hutovizGomb.addEventListener('click', () => {
    jelenlegiHomerseklet = 40;
    homersekletElem.textContent = jelenlegiHomerseklet;
    alert('A reaktor hőmérséklete 40°C-ra hűlt.');
});
