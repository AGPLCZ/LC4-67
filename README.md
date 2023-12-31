 
> [Online Encryptor](https://dobrodruzi.cz/lc467/lc4-6.html)


# LC4-67 cipher -  Encrypt and Decrypt Text
LC4-67 is a low-tech a symmetric cipher that can be computed by hand; but unlike many historical ciphers, LC4-67 is designed to resist potent computer attacks. It's designed for manual encryption and decryption. LC4-67 is inspired by the ElsieFour (LC4) cipher introduced by Alan Kaminsky. This cipher might be useful to you if you don't have access to a computer or you don't trust it, but need top-tier privacy protection.

### Improvements
The LC4-67 version introduces several improvements, the main advantagelies in its wisely chosen programming language - Javascript. One of the significant benefits of Javascript is its ubiquity; it runs on almost any device equipped with an internet browser. There's no need for installations, and the script operates offline. lc4-67.html

Other improvements; you can change the number of characters, 7x7 = 49. This makes it possible to encrypt various structured information, or to make manual decryption easier with fewer cards 6x6 = 36.

### Breaking the Cipher
A symmetric cipher with a key length of 138 bits offers immense resistance against attacks. If someone were to attempt to break such a cipher using the brute-force method, they would need to try 2^138 different combinations –

Now, let's imagine we have a supercomputer at our disposal capable of checking a trillion (10^18) LC4-67 keys per second. Even with this incredible speed, breaking the cipher would take approximately a billion years.


### If you trust your computer

> [!NOTE]
> If you trust your computer, there are several implementations around:  

#### LS47 - A very simple python implementation in available here in ls47.py:
- https://github.com/exaexa/ls47
- https://gitea.blesmrt.net/exa/ls47

> [!IMPORTANT]  
> LC4-67 was `created by translating the python script ls47.py` into javascript.


A much better version usuable as an actual binary (also supporting several versions of padding and the original ElsieFour cipher) was supplied by Bernhard Esslinger from the CrypTool project, available in lc4.py.
Javascript version (npm-compatible) of the cipher implementations was created by Ulysse McConnell, available at https://github.com/umcconnell/lc4


![app](web.jpg)


## Project Structure

---

#### Standalone Pair - (css, javascripr, html: combined into one file)
Files that are self-contained and <b> don't require any additional dependencies </b>:
- `index.html`
- `index7.html`
Should be used together (linked only by a button)
---

#### Modular Group
This set of files collaboratively delivers functionality and should be used together:

##### Web Pages:
- `lc4-6.html`
- `lc4-7.html`

##### Scripts:
- `script6.js`
- `script7.js`
- `translations.js`

##### Styles:
- `bootstrap.min.css`

---

# Instructions
### Character board

We have added some real punctuation, basic stuff for writing expressions,
punctuation and quotes. The letters of the board now look like this:

```
_ a b c d e f
g h i j k l m
n o p q r s t
u v w x y z .
0 1 2 3 4 5 6
7 8 9 , - + *
/ : ? ! ' ( )
```

Zoomed in, it's very practical to have extra position information written on
the tiles:

```
/-----\  /-----\  /-----\  /-----\  /-----\
|     |  |     |  |     |  |     |  |     |
| _  0|  | a  1|  | b  2|  | c  3|  | d  4|  ...
|   0 |  |   0 |  |   0 |  |   0 |  |   0 |
\-----/  \-----/  \-----/  \-----/  \-----/

/-----\  /-----\
|     |  |     |
| g  0|  | h  1|  ...
|   1 |  |   1 |
\-----/  \-----/
   .        .
   .        .
   .        .
```

To run (hand-run) the encryption/decryption, you will also need some kind of a
marker (e.g. a small shiny stone, bolt nut or similar kind of well-shaped
trash).

## How-To

You may as well see the paper [1], there are also pictures. This is somewhat more concentrated:

### Encryption

1. The symmetric key is the initial state of the board. Arrange your tiles to 7x7 square according to the key.
2. Put the marker on (0,0).
3. Find the next letter you want to encrypt on the board, its position is `P`.
4. Look at the marker; numbers written on the marked tile are coordinates `M`.
5. Compute position of the ciphertext as `C := P + M mod (7,7)`. Output the letter found on position `C` as ciphertext.
6. Rotate the row that contains the plaintext letter one position to the right, but do not carry the marker if present (it should stay on the same coordinates).
7. Rotate the column that now (after the first rotation) contains the ciphertext letter one position down, also not carrying the marker.
8. Update the position of the marker: `M := M + C' mod (7,7)` where `C'` are the numbers written on the ciphertext tile.
9. Repeat from 3 as many times as needed to encrypt the whole plaintext.

#### Encryption example with ascii images!

```
1,2. Symmetric key with         3,4. We want to encrypt 'y'.
     marker put on 'e'               Look at the marked tile:

  [e]f _ a b c d                     /-----\
   l m g h i j k                     |     |
   ( ) / : ? ! '                     | e  5|
   s t n o p q r                     |   0 |
   z . u v w x y                     \-----/
   5 6 0 1 2 3 4
   + * 7 8 9 , -

5. Ciphertext is 'w'            6. Rotate the plaintext 1 position
   (='y' moved by (5,0))           right, keep marker coordinates.

                               [e]f _ a b c d        [e]f _ a b c d
   Output 'w'!                  l m g h i j k         l m g h i j k
                                ( ) / : ? ! '         ( ) / : ? ! '
                                s t n o p q r         s t n o p q r
                                  z . u v w x y  >>   y z . u v w x
                                5 6 0 1 2 3 4         5 6 0 1 2 3 4
                                + * 7 8 9 , -         + * 7 8 9 , -


7. Rotate the ciphertext 1         Now look at the ciphertext tile:
   position down.

   [e]f _ a b , d                       /-----\
    l m g h i c k                       |     |
    ( ) / : ? j '                       | w  2|
    s t n o p ! r                       |   3 |
    y z . u v q x                       \-----/
    5 6 0 1 2 w 4
    + * 7 8 9 3 -

8. Update the marker position         9. GOTO 3.
   by ciphertext offset (2,3).


    e f _ a b , d
    l m g h i c k
    ( ) / : ? j '
    s t[n]o p ! r
    y z . u v q x
    5 6 0 1 2 w 4
    + * 7 8 9 3 -


```

### Decryption

Decryption procedure is basically the same, except that in step 5 you know `C`
and `M`, and need to produce `P` by subtraction: `P := C - M mod (7,7)`.
Otherwise (except that you input ciphertext and output plaintext) everything
stays the same.

### Key generation

Grab a bag full of tiles and randomly draw them one by one. Key is the 49-item permutation of them.


## Print

There's also a 3D-printable SCAD model of the whole thing.

![cc-by-sa-4](tiles.jpg)
image licence: cc-by-sa-4 - Martin Ptasek
We suggest printing the model using more than one filament color to make the letters easily recognizable. Thanks go to Martin Ptasek for providing the picture. 



## Modifications

### Key expansion from a password

Remembering 49-position random permutation that includes weird characters is
not very handy. You can instead derive the keys from an arbitrary string of
sufficient length.

"Sufficient" means "provides enough entropy". Full keys store around 208 bits
of entropy. To reach that, your password should have:

- at least around 61 decimal digits if made only from random decimal digits
- at least around 44 letters if made only from completely random letters
- at least around 40 alphanumeric characters if made randomly only from them

To have the "standard" 128 bits of entropy, the numbers reduce to roughly 39,
28 and 25, respectively.

Note that you can save the expanded tile board for later if you don't want to
expand the passwords before each encryption/decryption.

The actual expansion can be as simple as this:

1. initialize `I:=0`, put the tiles on the board sorted by their numbers (i.e. as on the picture above)
2. Take the first letter of the password and see the numbers on its tile; mark them `Px, Py`.
3. Rotate `I`-th row `Px` positions right
4. Rotate `I`th column `Py` positions down
5. `I := I + 1 mod 7`, repeat from 2 with next letter of the password.
6. Resulting tile positions are the expanded key

### Undistinguishable ciphertexts

To get a different ciphertext even if the same plaintext is encrypted
repeatedly; prepend it with a nonce. A nonce is a completely random sequence of
letters of a pre-negotiated length (e.g. N tiles drawn randomly from a bag,
adviseable value of N is at least 10).

You may also want to add a random number of spaces to the end of the ciphertext
-- it prevents the enemy from seeing the difference between ciphertexts of 'yes
please' and 'no', which would otherwise encrypt to gibberish that is easily
distinguishable by length, like `qwc3w_cs'(` and `+v`.

### Authenticated encryption

Because ciphertext may be altered in the transfer or during the error-prone
human processing, it is advised to append a simple "signature" to the end of
the message; which may look as simple as `__YourHonorableNameHere`. If the
signature doesn't match expectations (which happens with overwhelming
probability if there was any error in the process), either try again to see if
you didn't make a mistake, or discard the message and ask the sender to
re-transmit.

This works because the cipher output is message-dependent: Having a wrong bit
somewhere in the middle causes avalanche effect and erases any meaning from the
text after several characters.

### Alternative board with playing cards ♥♦♠♣

If you find the above tiles complicated to obtain or create, you can very
easily use playing cards.

To simplify things a bit, we will use the following layout:


| Card value | ♦ | ♣ | ♥ | ♠ |
|------------|---|---|---|---|
| A          | a | b | c | 1 |
| 2          | d | e | f | 2 |
| 3          | g | h | h | 3 |
| 4          | i | j | k | 4 |
| 5          | l | m | n | 5 |
| 6          | o | p | q | 6 |
| 7          | r | s | t | 7 |
| 8          | u | v | w | 8 |
| 9          | x | y | z | 9 |
| 10         |   | . | _ | 0 |
| J          |   |   |   | . |
| Q          |   |   |   |   |
| K          |   |   |   |   |


## References

[1] *Kaminsky, Alan. "ElsieFour: A Low-Tech Authenticated Encryption Algorithm For Human-to-Human Communication." IACR Cryptology ePrint Archive 2017 (2017): 339.*  



# Symetrická šifra LC4-67 ElsieFour - cipher
LC4-67 je šifra v podobě kostiček, která obstojí vůči výkonným počítačům a umožňuje jak šifrování, tak dešifrování ručně. Vychází z šifry ElsieFour (LC4), kterou popsal Alan Kaminsky. Tato šifra se vám může hodit, pokud nemáte k dispozici počítač nebo mu nedůvěřujete, ale potřebujete zabezpečit své soukromí na maximální úrovni.

Verze LC4-67 přináší několik vylepšení, můžete měnit počet znaků, 6x6 = 36, 7x7 = 42. Díky tomu je možné šifrovat různé strukturované informace, nebo udělat ruční dešifrování snazším - méně kartiček.

### Prolomení šifry 
Symetrická šifra s klíčem o délce 138 bitů nabízí ohromnou odolnost proti útokům. Pokud by se někdo pokusil prolomit takovou šifru metodou brute-force, musel by vyzkoušet 2^138 různých kombinací –

Nyní představme si, že máme k dispozici superpočítač, který by byl schopný prověřit trilion (10^18) klíčů LC4-67 za sekundu. Dokonce i s touto neuvěřitelnou rychlostí by trvalo prolomení šifry přibližně miliardu let.


### Znaková tabulka
Hvězdička (násobení) * v novější verzi nahrazena @

```
_ a b c d e f
g h i j k l m
n o p q r s t
u v w x y z .
0 1 2 3 4 5 6
7 8 9 , - + *
/ : ? ! ' ( )
```

Kostičky při přiblížení vypadají takto, je na nich napsaná původní poloha tzv. offset, která se bude využívat k šifrování a dešifrování.

```
/-----\  /-----\  /-----\  /-----\  /-----\
|     |  |     |  |     |  |     |  |     |
| _  0|  | a  1|  | b  2|  | c  3|  | d  4|  ...
|   0 |  |   0 |  |   0 |  |   0 |  |   0 |
\-----/  \-----/  \-----/  \-----/  \-----/

/-----\  /-----\
|     |  |     |
| g  0|  | h  1|  ...
|   1 |  |   1 |
\-----/  \-----/
   .        .
   .        .
   .        .
```

K ručnímu šifrování je zapotřebí ještě takzvaný "Marker" značka, může to být libovolný předmět, kamínek či kroužek. 

### Jak na to

Kostičky si rozložíme před sebe do čtverce, jejich permutace je tajný klíč k zašifrování a dešifrování. Tudíš kostičky můžete libovolně zamíchat, ale znalost rozložení kostiček je klíčové k dešifrování zprávy, proto si permutaci poznamenejte. Další možností je využít expanzní klíč, to je algoritmus, který funguje na bázi hesla, aby jste si nemuseli pamatovat rozložení kostiček, o tom si povíme až na konci.  

Vstupní písmena: Yes
První vstupní písmeno je "Y"



### 4 kroky k zašifrování písmene
1. Vstupní písmeno + offset [značky] = šifrované písmeno
2. Řádek se vstupním písmenem rotujeme o 1 doprava
3. Sloupec se zašifrovaným písmenem o 1 dolů
4. [Značku] posuneme o offset z kostičky se zašifrovaným písmenem

!!! Marker při posunu s kostičkama neposouváme.

# Pro vysvětlení si ukážeme příklad šifrování za pomocí obrázků:

Takto vypadá náš tajný klíč, podle kterého zašifrujeme a dešifrujeme zprávu. Ten si poznačte. Značku Marker [] položíme při začátku šifrování či dešifrování doleva nahoru.

```
  [e]f _ a b c d                                             
   l m g h i j k                                           
   ( ) / : ? ! '                                            
   s t n o p q r                                            
   z . u v w x y                                            
   5 6 0 1 2 3 4
   + * 7 8 9 , -
``` 


#### Najděte pozici vstupního písmena
Chceme-li zašifrovat písmeno: `Y`, najděte takzvané `vstupní písmeno` či `vstupní pozici` = písmeno Y


```

   [e]f _ a b c d                                             
   l m g h i j k                                           
   ( ) / : ? ! '                                            
   s t n o p q r                                            
   z . u v w x (y)                                            
   5 6 0 1 2 3 4
   + * 7 8 9 , -
   
```      


        
#### Značka (Marker)  []
Podívejte se nyní na kostičku se značkou (Marker) `[ ]`
Kostička označená značkou Marker s písmenem `E` má na sobě `offset` to je původní poloha kostičky `(5,0)` 

```
 /---------\
 |         |
 |    e  5 |
 |         |
 |    0    |
 \---------/
```

#### Vstupní písmeno
Nyní zašifrujeme písmeno Y
- Od jeho polohy nalezneme zašifrované písmeno.
- Od vstupního písmene počítejte cestu k zašifrovanému písmeni.
- Offset písmene E je (5,0), to znamená že od písmene Y se posuňme po kostičkách o 5 do prava.

Definice: Najděte `pozici vstupního písmene`, od toho písmene přičtěte `offset` z pozice kde se nachází značka (marker) = pozice zašifrovaného písmena


```

  [e]f _ a b c d                                             
   l m g h i j k                                           
   ( ) / : ? ! '                                            
   s t n o p q r                                            
   z . u v w x y    Y 1. 2. 3. 4. 5. -> W                                     
   5 6 0 1 2 3 4
   + * 7 8 9 , -
   
   Zašifrované písmeno je 'w'     (='y' pohyb (5 v pravo, 0 dolů)       Vyšlo 'w'!  
```       

### Rotace
2.`Řádek` se vstupním písmenem `rotujeme o 1 doprava`


```
Rotujte o jednu pozici celý řádek a sloupec

e]f _ a b c d        [e]f _ a b c d
l m g h i j k         l m g h i j k
( ) / : ? ! '         ( ) / : ? ! '
s t n o p q r         s t n o p q r
z . u v w x y  >>   y z . u v w x              Y se orotovalo do prava o jednu pozici
5 6 0 1 2 3 4         5 6 0 1 2 3 4
+ * 7 8 9 , -         + * 7 8 9 , -
```

3.`Sloupec` se `šifrovaným písmenem` rotuje o 1 dolů

```
Zde je hotová rotace o jedna dolů u sloupce kde se nacházelo W - zašifrované písmeno.

   [e]f _ a b , d                      
    l m g h i c k                   
    ( ) / : ? j '           
    s t n o p ! r                         
    y z . u v q x                     
    5 6 0 1 2 w 4
    + * 7 8 9 3 -
```
### 4. Značka
```

 /-----\
 |     |          Značku (Marker) posuneme o offset na kostičce se zašifrovaným písmenem
 | w  2|          Nyní se podívejte na zašifrovanou kostičku - W a značku posnuňte o offset (2,3)
 |   3 |          Značku posouváte od značky. Ke značce připočítejte offset zašifrovaného písmene.
 \-----/

```
Aktualizujte polohu značky (markeru) na pozici podle offsetu na zašifrovaném písmeni to je nyní `W = (2,3).`

```
     Marker je nyní na jiné pozici, a tudíš má i jiný offset.
    e f _ a b , d
    l m g h i c k
    ( ) / : ? j '
    s t[n]o p ! r
    y z . u v q x
    5 6 0 1 2 w 4
    + * 7 8 9 3 -
```
`HOTOVO` Máte zašifrované písmeno `Y`  `Výstup:W` Chcemeli zašifrovat slovo `YES`, opakujete proces od začátku, vstupní písmeno bude nyní `E` 


### Dešifrování
Proces dešifrování je podobný, především offset se `odečítá`. 
1. Od pozice vstupního písmene odečti offset z pozice značky = pozice dešifrovaného písmena
2. Řádek s rozluštěným písmenem rotujeme o 1 doprava
3. Sloupec se vstupním písmenem o 1 dolů
4. Značku (Marker) posuneme o offset na kostičce se nerozluštěným písmenem


### Expanzní klíč - heslo
Kostičky si rozložíme před sebe do čtverce, jejich permutace je tajný klíč k zašifrování a dešifrování. Můžete využít algoritmus, který funguje na bázi hesla, aby jste si nemuseli pamatovat rozložení kostiček.  

Heslo šifry = nástroj na vytvoření klíče
Podle pozice (offsetu) na vstupním písmeni, posuň první řádek do prava a sloupec se vstupním písmenem dolů.


Heslo: `ahoj`
První vstupní písmeno = "A", jeho původní pozice (offset) = 1,0
- Podivám se na první písmeno A a zjistím z něj offset 
- Posunu první řádek a sloupec o offset na písmeni A (do prava a pak dolů)
- Podivám se na druhé písmeno H a zjistím z něj offset 
- Posunu druhý řádek a sloupec o offset na písmeni B
- Podivám se na třetí písmeno O a zjistím z něj offset 
- Posunu třetí řádek a sloupec o offset na písmeni O
Posouváte se ze šikma dolů...

Heslo by mělo mít alespoň `dvacet znaků` abychom dosáhli dostatečné entropie.



## References

[1] *Kaminsky, Alan. "ElsieFour: A Low-Tech Authenticated Encryption Algorithm For Human-to-Human Communication." IACR Cryptology ePrint Archive 2017 (2017): 339.*
