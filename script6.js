// Slovník s překlady
const translations = {
    en: {
        languageSelect: "Choose language:",
        enOption: "English",
        csOption: "Czech",
        ruOption: "Russian",
        zhOption: "Chinese",
        deOption: "German",
        esOption: "Spanish",
        frOption: "French",
        layout6x6: "Layout 6x6",
        layout7x7: "Layout 7x7",
        keyLabel: "Encryption key:",
        keyPlaceholder: "Enter a password (recommended 20 characters) or key",
        methodLabel: "Method:",
        deriveOption: "Generate key from password",
        manualOption: "Manual key entry",
        messageLabel: "Message:",
        messagePlaceholder: "Enter a message for encryption or decryption",
        encryptLabel: "Encrypt",
        decryptLabel: "Decrypt",
        executeButton: "Execute",
        usedKeyTitle: "Used key:",
        resultTitle: "Result:",
        copyButton: "Copy result"
    },
    cs: {
        languageSelect: "Vyberte jazyk:",
        enOption: "Angličtina",
        csOption: "Čeština",
        ruOption: "Ruština",
        zhOption: "Čínština",
        deOption: "Němčina",
        esOption: "Španělština",
        frOption: "Francouzština",
        layout6x6: "Rozložení 6x6",
        layout7x7: "Rozložení 7x7",
        keyLabel: "Klíč šifry:",
        keyPlaceholder: "Zadejte heslo (doporučeno 20 znaků) nebo klíč",
        methodLabel: "Metoda:",
        deriveOption: "Vygeneruje klíč podle hesla",
        manualOption: "Manuální zadání klíče",
        messageLabel: "Zpráva:",
        messagePlaceholder: "Zadejte zprávu k šifrování nebo dešifrování",
        encryptLabel: "Šifrovat",
        decryptLabel: "Dešifrovat",
        executeButton: "Spustit",
        usedKeyTitle: "Použitý klíč:",
        resultTitle: "Výsledek:",
        copyButton: "Kopírovat výsledek"

    },
    ru: {
        languageSelect: "Выберите язык:",
        languageSelect: "Выберите язык:",
        enOption: "Английский",
        csOption: "Чешский",
        ruOption: "Русский",
        zhOption: "Китайский",
        deOption: "Немецкий",
        esOption: "Испанский",
        frOption: "Французский",
        layout6x6: "Макет 6x6",
        layout7x7: "Макет 7x7",
        keyLabel: "Ключ шифрования:",
        keyPlaceholder: "Введите пароль (рекомендуется 20 символов) или ключ",
        methodLabel: "Метод:",
        deriveOption: "Сгенерировать ключ из пароля",
        manualOption: "Ручной ввод ключа",
        messageLabel: "Сообщение:",
        messagePlaceholder: "Введите сообщение для шифрования или дешифрования",
        encryptLabel: "Зашифровать",
        decryptLabel: "Расшифровать",
        executeButton: "Запустить",
        usedKeyTitle: "Используемый ключ:",
        resultTitle: "Результат:",
        copyButton: "Копировать результат"
    },
    zh: {
        languageSelect: "请选择语言：",
        enOption: "英文",
        csOption: "捷克文",
        ruOption: "俄文",
        zhOption: "中文",
        deOption: "德文",
        esOption: "西班牙文",
        frOption: "法文",
        layout6x6: "6x6布局",
        layout7x7: "7x7布局",
        keyLabel: "加密密钥：",
        keyPlaceholder: "请输入密码（建议20个字符）或密钥",
        methodLabel: "方法：",
        deriveOption: "根据密码生成密钥",
        manualOption: "手动输入密钥",
        messageLabel: "消息：",
        messagePlaceholder: "输入要加密或解密的消息",
        encryptLabel: "加密",
        decryptLabel: "解密",
        executeButton: "执行",
        usedKeyTitle: "使用的密钥：",
        resultTitle: "结果：",
        copyButton: "复制结果"
    },

    de: {
        languageSelect: "Sprache auswählen:",
        enOption: "Englisch",
        csOption: "Tschechisch",
        ruOption: "Russisch",
        zhOption: "Chinesisch",
        deOption: "Deutsch",
        esOption: "Spanisch",
        frOption: "Französisch",
        layout6x6: "Layout 6x6",
        layout7x7: "Layout 7x7",
        keyLabel: "Verschlüsselungsschlüssel:",
        keyPlaceholder: "Geben Sie ein Passwort (empfohlen 20 Zeichen) oder einen Schlüssel ein",
        methodLabel: "Methode:",
        deriveOption: "Schlüssel aus Passwort generieren",
        manualOption: "Manuelle Schlüsseleingabe",
        messageLabel: "Nachricht:",
        messagePlaceholder: "Geben Sie eine Nachricht zum Verschlüsseln oder Entschlüsseln ein",
        encryptLabel: "Verschlüsseln",
        decryptLabel: "Entschlüsseln",
        executeButton: "Ausführen",
        usedKeyTitle: "Verwendeter Schlüssel:",
        resultTitle: "Ergebnis:",
        copyButton: "Ergebnis kopieren"
    },
    es: {
        languageSelect: "Elija un idioma:",
        enOption: "Inglés",
        csOption: "Checo",
        ruOption: "Ruso",
        zhOption: "Chino",
        deOption: "Alemán",
        esOption: "Español",
        frOption: "Francés",
        layout6x6: "Diseño 6x6",
        layout7x7: "Diseño 7x7",
        keyLabel: "Clave de cifrado:",
        keyPlaceholder: "Introduzca una contraseña (recomendado 20 caracteres) o una clave",
        methodLabel: "Método:",
        deriveOption: "Generar clave a partir de contraseña",
        manualOption: "Entrada manual de clave",
        messageLabel: "Mensaje:",
        messagePlaceholder: "Introduzca un mensaje para cifrar o descifrar",
        encryptLabel: "Cifrar",
        decryptLabel: "Descifrar",
        executeButton: "Ejecutar",
        usedKeyTitle: "Clave utilizada:",
        resultTitle: "Resultado:",
        copyButton: "Copiar resultado"
    },

    fr: {
        languageSelect: "Choisissez une langue:",
        enOption: "Anglais",
        csOption: "Tchèque",
        ruOption: "Russe",
        zhOption: "Chinois",
        deOption: "Allemand",
        esOption: "Espagnol",
        frOption: "Français",
        layout6x6: "Disposition 6x6",
        layout7x7: "Disposition 7x7",
        keyLabel: "Clé de chiffrement:",
        keyPlaceholder: "Entrez un mot de passe (recommandé 20 caractères) ou une clé",
        methodLabel: "Méthode:",
        deriveOption: "Générer une clé à partir du mot de passe",
        manualOption: "Saisie manuelle de la clé",
        messageLabel: "Message:",
        messagePlaceholder: "Entrez un message pour crypter ou décrypter",
        encryptLabel: "Crypter",
        decryptLabel: "Décrypter",
        executeButton: "Exécuter",
        usedKeyTitle: "Clé utilisée:",
        resultTitle: "Résultat:",
        copyButton: "Copier le résultat"
    }


  
};


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
