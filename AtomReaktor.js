let reaktorMukodik = false;
let jelenlegiHomerseklet = 0;
let jelenlegiEnergia = 0;

const reaktorStatuszElem = document.getElementById('reaktorStatusz');
const homersekletElem = document.getElementById('homerseklet');
const energiaElem = document.getElementById('energia');
const homersekletSzalag = document.getElementById('homersekletSzalag');
const energiaSzalag = document.getElementById('energiaSzalag');
const reaktorInditasGomb = document.getElementById('reaktorInditasGomb');
const reaktorLeallitasGomb = document.getElementById('reaktorLeallitasGomb');
const hutovizGomb = document.getElementById('hutovizGomb');

// Véletlenszerű szám generálása egy adott tartományban
function veletlenSzam(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Adatok frissítése a sávokon
function frissitSzalag(szalag, ertek, maxErtek) {
    const szazalek = (ertek / maxErtek) * 100;
    szalag.style.width = szazalek + '%';
}

// Reaktor beindítása
reaktorInditasGomb.addEventListener('click', () => {
    if (!reaktorMukodik) {
        reaktorMukodik = true;
        reaktorStatuszElem.textContent = 'Működik...';
        reaktorInditasGomb.disabled = true;
        reaktorLeallitasGomb.disabled = false;
        hutovizGomb.disabled = false;

        // Hőmérséklet és energia egyszeri generálása
        jelenlegiHomerseklet = veletlenSzam(40, 100);
        homersekletElem.textContent = jelenlegiHomerseklet;
        frissitSzalag(homersekletSzalag, jelenlegiHomerseklet, 100);

        jelenlegiEnergia = veletlenSzam(1, 100);
        energiaElem.textContent = jelenlegiEnergia;
        frissitSzalag(energiaSzalag, jelenlegiEnergia, 100);
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
        homersekletSzalag.style.width = '0';
        energiaSzalag.style.width = '0';
        jelenlegiEnergia = 0;
    } else {
        alert('Nem lehet leállítani a reaktort, a hőmérséklet túl magas! Hűtés szükséges.');
    }
});

// Hűtővíz beengedése
hutovizGomb.addEventListener('click', () => {
    if (reaktorMukodik && jelenlegiHomerseklet > 40) {
        jelenlegiHomerseklet = 40; // Hőmérséklet csökkentése 40°C-ra
        homersekletElem.textContent = jelenlegiHomerseklet;
        frissitSzalag(homersekletSzalag, jelenlegiHomerseklet, 100);
        alert('A reaktor hőmérséklete 40°C-ra hűlt.');
    } else if (!reaktorMukodik) {
        alert('A reaktor nem működik, a hűtés nem szükséges.');
    } else {
        alert('A hőmérséklet már elég alacsony.');
    }
});
