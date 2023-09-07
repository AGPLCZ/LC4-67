

function setLanguage(lang) {
    console.log("Nastavuji jazyk na:", lang);
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            console.log("Nastavuji text pro", key, "na", translations[lang][key]);
            el.textContent = translations[lang][key];
        }
    });

    const options = document.querySelectorAll('[data-translate-option]');
    options.forEach(opt => {
        const key = opt.getAttribute('data-translate-option');
        if (translations[lang][key]) {
            console.log("Nastavuji option pro", key, "na", translations[lang][key]);
            opt.textContent = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    });

    // Aktualizujte hodnotu rozbalovacího menu
    document.getElementById('languageSelect').value = lang;
}







const letters = "_abcdefghijklmnopqrstuvwxyz123456789";

const tiles = Array.from(letters).map((letter, index) => [letter, [Math.floor(index / 6), index % 6]]);
const padding_size = 0;

function checkKey(key) {
    if (key.length !== letters.length) {
        throw new Error('Wrong key size');
    }
    let cnts = {};
    for (let c of letters) {
        cnts[c] = 0;
    }
    for (let c of key) {
        if (!cnts.hasOwnProperty(c)) {
            throw new Error('Letter ' + c + ' not in LS36!');
        }
        cnts[c]++;
        if (cnts[c] > 1) {
            throw new Error('Letter ' + c + ' duplicated in key!');
        }
    }
}

function findIx(letter) {
    const m = tiles.filter(l => l[0] === letter);
    if (m.length !== 1) {
        throw new Error('Letter ' + letter + ' not in LS36!');
    }
    return m[0][1];
}

function findPos(key, letter) {
    const p = key.indexOf(letter);
    if (p >= 0 && p < 6 * 6) {
        return [Math.floor(p / 6), p % 6];
    }
    throw new Error('Letter ' + letter + ' not in key?!');
}

function addPos(a, b) {
    return [(a[0] + b[0]) % 6, (a[1] + b[1]) % 6];
}

function subPos(a, b) {
    return [(a[0] - b[0] + 6) % 6, (a[1] - b[1] + 6) % 6];
}

function findAtPos(key, coord) {
    return key[coord[1] + coord[0] * 6];
}

function rotateRight(key, row, n) {
    const mid = key.substring(6 * row, 6 * (row + 1));
    n = (6 - n % 6) % 6;
    return key.substring(0, 6 * row) + mid.slice(n) + mid.substring(0, n) + key.substring(6 * (row + 1));
}

function rotateDown(key, col, n) {
    const lines = Array.from({ length: 6 }, (_, i) => key.substring(i * 6, (i + 1) * 6));
    const lefts = lines.map(l => l.substring(0, col));
    const mids = lines.map(l => l[col]);
    const rights = lines.map(l => l.substring(col + 1));
    n = (6 - n % 6) % 6;
    const newMids = mids.slice(n).concat(mids.slice(0, n));
    return lines.map((_, i) => lefts[i] + newMids[i] + rights[i]).join('');
}

function rotateMarkerRight(m, row, n) {
    if (m[0] !== row) {
        return m;
    } else {
        return [m[0], (m[1] + n) % 6];
    }
}

function rotateMarkerDown(m, col, n) {
    if (m[1] !== col) {
        return m;
    } else {
        return [(m[0] + n) % 6, m[1]];
    }
}

function deriveKey(password) {
    let i = 0;
    let k = letters;
    for (let c of password) {
        const [row, col] = findIx(c);
        k = rotateDown(rotateRight(k, i, col), i, row);
        i = (i + 1) % 6;
    }
    return k;
}


function encrypt(key, plaintext) {
    checkKey(key);
    let mp = [0, 0];
    let ciphertext = '';
    for (let p of plaintext) {
        const pp = findPos(key, p);
        const mix = findIx(findAtPos(key, mp));
        const cp = addPos(pp, mix);
        const c = findAtPos(key, cp);
        ciphertext += c;

        key = rotateRight(key, pp[0], 1);
        const newCp = findPos(key, c);
        key = rotateDown(key, newCp[1], 1);
        mp = addPos(mp, findIx(c));
    }
    return ciphertext;
}

function decrypt(key, ciphertext) {
    checkKey(key);
    let mp = [0, 0];
    let plaintext = '';
    for (let c of ciphertext) {
        const cp = findPos(key, c);
        const mix = findIx(findAtPos(key, mp));
        const pp = subPos(cp, mix);
        const p = findAtPos(key, pp);
        plaintext += p;

        key = rotateRight(key, pp[0], 1);
        const newCp = findPos(key, c);
        key = rotateDown(key, newCp[1], 1);
        mp = addPos(mp, findIx(c));
    }
    return plaintext;
}

function encryptPad(key, plaintext, signature) {
    checkKey(key);
    const padding = Array.from({ length: padding_size }, _ => letters[Math.floor(Math.random() * letters.length)]).join('');
    return encrypt(key, padding + plaintext + signature);
}

function decryptPad(key, ciphertext) {
    checkKey(key);
    return decrypt(key, ciphertext).substring(padding_size);
}


function handleAction() {
    const keyInput = document.getElementById('keyInput').value;
    const method = document.getElementById('methodSelect').value;
    const messageInput = document.getElementById('messageInput').value;
    const action = document.querySelector('input[name="action"]:checked').value;

    let key;
    if (method === 'deriveKey') {
        key = deriveKey(keyInput || "tohle_je_tajne_heslo");
    } else if (method === 'manual') {
        key = keyInput || "_abcdefghijklmnopqrstuvwxyz123456789";
    }

    if (action === "encrypt") {
        const enc = encryptPad(key, messageInput, '');
        document.getElementById('used-key-output').textContent = key;
        document.getElementById('result-output').textContent = '' + enc;
    } else if (action === "decrypt") {
        const dec = decryptPad(key, messageInput);
        document.getElementById('used-key-output').textContent = key;
        document.getElementById('result-output').textContent = '' + dec;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('copyButton').addEventListener('click', function () {
        const resultTextarea = document.getElementById('result-output');
        resultTextarea.select();
        document.execCommand('copy');
        //alert('Výsledek byl zkopírován do schránky!');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Stránka byla načtena. Nastavuji výchozí jazyk.");

    // Získává preferovaný jazyk prohlížeče
    let userLang = navigator.language || navigator.languages[0];

    // Ořeže regionální kód (např. 'en-US' se změní na 'en')
    userLang = userLang.split('-')[0];

    // Kontroluje, zda je jazyk podporován (přidejte další jazyky podle potřeby)
    if(['en', 'cs', 'ru', 'zh', 'de', 'es', 'fr'].includes(userLang)) {
        setLanguage(userLang);
    } else {
        // Pokud není preferovaný jazyk podporován, nastaví se angličtina jako výchozí
        setLanguage('en');
    }
});
