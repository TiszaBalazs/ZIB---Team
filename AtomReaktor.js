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