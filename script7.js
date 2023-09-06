const letters = "_abcdefghijklmnopqrstuvwxyz.0123456789,-+*/:?!'()";
const tiles = Array.from(letters).map((letter, index) => [letter, [Math.floor(index / 7), index % 7]]);
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
            throw new Error('Letter ' + c + ' not in LS47!');
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
        throw new Error('Letter ' + letter + ' not in LS47!');
    }
    return m[0][1];
}

function findPos(key, letter) {
    const p = key.indexOf(letter);
    if (p >= 0 && p < 7 * 7) {
        return [Math.floor(p / 7), p % 7];
    }
    throw new Error('Letter ' + letter + ' not in key?!');
}

function addPos(a, b) {
    return [(a[0] + b[0]) % 7, (a[1] + b[1]) % 7];
}

function subPos(a, b) {
    return [(a[0] - b[0] + 7) % 7, (a[1] - b[1] + 7) % 7];
}

function findAtPos(key, coord) {
    return key[coord[1] + coord[0] * 7];
}

function rotateRight(key, row, n) {
    const mid = key.substring(7 * row, 7 * (row + 1));
    n = (7 - n % 7) % 7;
    return key.substring(0, 7 * row) + mid.slice(n) + mid.substring(0, n) + key.substring(7 * (row + 1));
}

function rotateDown(key, col, n) {
    const lines = Array.from({length: 7}, (_, i) => key.substring(i * 7, (i + 1) * 7));
    const lefts = lines.map(l => l.substring(0, col));
    const mids = lines.map(l => l[col]);
    const rights = lines.map(l => l.substring(col + 1));
    n = (7 - n % 7) % 7;
    const newMids = mids.slice(n).concat(mids.slice(0, n));
    return lines.map((_, i) => lefts[i] + newMids[i] + rights[i]).join('');
}

function rotateMarkerRight(m, row, n) {
    if (m[0] !== row) {
        return m;
    } else {
        return [m[0], (m[1] + n) % 7];
    }
}

function rotateMarkerDown(m, col, n) {
    if (m[1] !== col) {
        return m;
    } else {
        return [(m[0] + n) % 7, m[1]];
    }
}

function deriveKey(password) {
    let i = 0;
    let k = letters;
    for (let c of password) {
        const [row, col] = findIx(c);
        k = rotateDown(rotateRight(k, i, col), i, row);
        i = (i + 1) % 7;
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
    const padding = Array.from({length: padding_size}, _ => letters[Math.floor(Math.random() * letters.length)]).join('');
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
        key = keyInput || "_abcdefghijklmnopqrstuvwxyz.0123456789,-+*/:?!'()";
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


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copyButton').addEventListener('click', function() {
        const resultTextarea = document.getElementById('result-output');
        resultTextarea.select();
        document.execCommand('copy');
        //alert('Výsledek byl zkopírován do schránky!');
    });
});

