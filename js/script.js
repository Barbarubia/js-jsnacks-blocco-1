// Definisco una variabile per i bottoni che attivano i vari JSnacks
let buttonJS1 = document.getElementById('button-active-js1');
let buttonJS2 = document.getElementById('button-active-js2');
let buttonJS3 = document.getElementById('button-active-js3');
let buttonJS4 = document.getElementById('button-active-js4');
let buttonJS5 = document.getElementById('button-active-js5');
let buttonJS6 = document.getElementById('button-active-js6');
let buttonJS19 = document.getElementById('button-active-js19');
let buttonJS21 = document.getElementById('button-active-js21');
let buttonJS21b = document.getElementById('button-active-js21b');
let buttonJS22 = document.getElementById('button-active-js22');
let buttonJS23 = document.getElementById('button-active-js23');

// Definisco un evento che al click su ciascun botton attiva le funzioni dei relativi JSnack (la cui prima istruzione è visualizzare l'HTML di quel JSnack)

buttonJS1.addEventListener('click', functionJSnack1);
buttonJS2.addEventListener('click', functionJSnack2);
buttonJS3.addEventListener('click', functionJSnack3);
buttonJS4.addEventListener('click', functionJSnack4);
buttonJS5.addEventListener('click', functionJSnack5);
buttonJS6.addEventListener('click', functionJSnack6);
buttonJS19.addEventListener('click', functionJSnack19);
buttonJS21.addEventListener('click', functionJSnack21);
buttonJS21b.addEventListener('click', functionJSnack21b);
buttonJS22.addEventListener('click', functionJSnack22);
buttonJS23.addEventListener('click', functionJSnack23);

// Definisco gli elementi HTML che contengono i vari JSnacks
let divJS1 = document.querySelector('.jsnack-01');
let divJS2 = document.querySelector('.jsnack-02');
let divJS3 = document.querySelector('.jsnack-03');
let divJS4 = document.querySelector('.jsnack-04');
let divJS5 = document.querySelector('.jsnack-05');
let divJS6 = document.querySelector('.jsnack-06');
let divJS19 = document.querySelector('.jsnack-19');
let divJS21 = document.querySelector('.jsnack-21');
let divJS21b = document.querySelector('.jsnack-21b');
let divJS22 = document.querySelector('.jsnack-22');
let divJS23 = document.querySelector('.jsnack-23');






/*
INIZIO JSNACK 1

L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

function functionJSnack1() {

// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 1 rimuovendo la classe display-none
divJS1.classList.remove('display-none');

// VERSIONE CON PROMPT E ALERT

// Chiedo all'utente di inserire un numero
let numero1 = parseInt(prompt('Digita un numero'));

// Chiedo all'utente di inserire un altro numero
let numero2 = parseInt(prompt('Digita un altro numero'));

// Definisco l'elemento HTML dove stamperò il risultato finale
let outputArea = document.getElementById('js1-output');


// Genero un ciclo IF per confrontare i 2 numeri e visualizzare un popup con il numero più alto oppure un avviso che i 2 numeri sono uguali.
if (isNaN(numero1) || isNaN(numero2)) {
    outputArea.innerHTML = `Devi inserire dei valori numerici`;  
} else if (numero1 == numero2) {
    outputArea.innerHTML = `I due numeri inseriti sono uguali`;
} else if (numero1 > numero2) {
    outputArea.innerHTML = `Il primo numero inserito è ${numero1}.<br>Il secondo numero inserito è ${numero2}.<br>${numero1} è il numero più grande.`;
} else {
    outputArea.innerHTML = `Il primo numero inserito è ${numero1}.<br>Il secondo numero inserito è ${numero2}.<br>${numero2} è il numero più grande.`;
}

// FINE VERSIONE CON PROMPT E ALERT


// VERSIONE HTML CON INPUT
/*
// Seleziono gli elementi HTML in cui l'utente inserisce i due numeri richiesti
let numero1Box = document.getElementById('js1-number1');
let numero2Box = document.getElementById('js1-number2');
// Definisco due variabili, inizialmente vuote, per i numeri inseriti dall'utente
let numeroInserito1 = '';
let numeroInserito2 = '';
// Definisco l'elemento bottone HTML che effettua il confronto tra i due numeri
let buttonConfronta = document.getElementById('js1-confronta');
// Definisco l'area HTML in cui stamperò il risultato del confronto
let outputArea = document.getElementById('js1-output');

// Genero l'evento al click sul bottone di confronto
buttonConfronta.addEventListener('click', function () {
    // Leggo i numeri inseriti dall'utente e li sovrascrivo alla variabile numeroInserito
    numeroInserito1 = numero1Box.value;
    numeroInserito2 = numero2Box.value;
    // Se i dati inseriti non sono valori numerici...
    if (isNaN(numeroInserito1) || isNaN(numeroInserito2)) {
        outputArea.innerHTML = `Devi inserire dei valori numerici`;
    } else if (numeroInserito1 > numeroInserito2) {
        outputArea.innerHTML = `${numeroInserito1} è il numero più grande`;
    } else if (numeroInserito1 < numeroInserito2) {
        outputArea.innerHTML = `${numeroInserito2} è il numero più grande`;
    } else {
        outputArea.innerHTML = `I due numeri inseriti sono uguali`;
    }
}
)
// FINE VERSIONE HTML CON INPUT
*/

}

// FINE JSnack 1



/*
INIZIO JSNACK 2

L'utente inserisce 2 parole in successione, con 2 prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

function functionJSnack2() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 2 rimuovendo la classe display-none
divJS2.classList.remove('display-none');

// Chiedo all'utente di scrivere una parola
let word1 = prompt(`Scrivi una parola:`);

// Chiedo all'utente di scrivere un'altra parola
let word2 = prompt(`Scrivi un'altra parola:`);

// Seleziono l'id html dove stamperò il messaggio
let message = document.getElementById('js2-word');

// Definisco una variabile per avvisare l'utente che può usare esclusivamente caratteri alfabetici
var caratteriConsentiti = /^[a-zA-Z]+$/;

// Genero un ciclo IF per confrontare la lunghezza delle parole inserite e stampare a video le parole in ordine di lunghezza (prima la più corta) o un avviso che la lunghezza è la stessa
if (caratteriConsentiti.test(word1) == false || caratteriConsentiti.test(word2) == false) {
    message.innerHTML = `Puoi inserire soltanto caratteri alfabetici senza spazi`;
} else if (word1.length == word2.length) {
    message.innerHTML = `Le parole "${word1}" e "${word2}" hanno la stessa lunghezza (${word1.length} caratteri).`;
} else if (word1.length > word2.length) {
    message.innerHTML = `Le parole inserite, in ordine di lunghezza dalla più corta alla più lunga, sono:<br>"${word2}" (${word2.length} caratteri)<br>"${word1}" (${word1.length} caratteri)`;
} else {
    message.innerHTML = `Le parole inserite, in ordine di lunghezza dalla più corta alla più lunga, sono:<br>"${word1}" (${word1.length} caratteri)<br>"${word2}" (${word2.length} caratteri)`;
}
}

// FINE JSnack 2



/*
INIZIO JSNACK 3

Il software deve chiedere per 10 volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

function functionJSnack3() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 3 rimuovendo la classe display-none
divJS3.classList.remove('display-none');

// definisco una variabile con valore iniziale uguale a 0
let sumNumbers = 0;

// Genero un ciclo FOR che chiede all'utente di inserire "i" numeri e ad ogni interazione incremento la variabile sumNumbers aggiungendo il numero inserito
for (i = 1; i <= 10; i++) {
    let number = parseInt(prompt("inserisci un numero:"));
    sumNumbers += number;
}

// Stampo a video il risultato della somma degli "i" elementi
document.getElementById('js3-sum').innerHTML = `La somma dei numeri inseriti è ${sumNumbers}.`;
}

// FINE JSNACK 3




/*
INIZIO JSNACK 4

In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
Chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

function functionJSnack4() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 4 rimuovendo la classe display-none
divJS4.classList.remove('display-none');

// Definisco l'array con la lista degli invitati (= componenti della classe 56: studenti e prof)
const listaInvitati = [
    "Adelin Dumitru Tanasa",
    "Aldo Cocurullo",
    "Alessandro Ballabio",
    "Alessandro Tucci",
    "Alessandro Uva",
    "Alessio Vitiello",
    "Anthony Cecconi",
    "Antonio Straziota",
    "Camilla Palombi",
    "Chiara Passaro",
    "Cristian Bricicaru",
    "Daniele De Simone",
    "Erika Sarleti",
    "Federico Mura",
    "Gabriel Spanu",
    "Giacomo Passariello",
    "Giovanni Calia",
    "Giuseppe Mirizzi",
    "Henri Kapidani",
    "Khongor Gerelchimeg",
    "Kristian Llambro",
    "Laura Margherita",
    "Luca Andaloro",
    "Luca Lo Bianco",
    "Luigi Bardella Gerbi",
    "Maria Giuliana Pasinetti",
    "Mario Martino",
    "Marzio Della Rocca",
    "Massimo Battinelli",
    "Matteo Segattini",
    "Mattia La Selva",
    "Mauro Costantinescu",
    "Michela Colangelo",
    "Mirko Moschella",
    "Paolo Calafiore",
    "Piergiorgio Piras",
    "Salvatore Praticò",
    "Samuele Della Rocca",
    "Simone Tartaglia",
    "Stefano Stortini"
]

// Definisco l'elemento HTML in cui l'utente immette il nome
let insertNameBox = document.getElementById('js4-name');
// Definisco l'elemento HTML in cui l'utente immette il cognome
let insertSurnameBox = document.getElementById('js4-surname');
// Definisco l'elemento bottone HTML che fa partire la funzione al click
let buttonVerify = document.getElementById('js4-verify');
// Definisco l'area HTML in cui stamperò il risultato della funzione
let outputArea = document.getElementById('js4-output');

// Genero l'evento al click sul bottone per verificare il nome e il cognome inseriti
buttonVerify.addEventListener('click', function () {
    // Leggo il nome inserito dall'utente
    let userName = insertNameBox.value;
    // Leggo il cognome inserito dall'utente
    let userSurname = insertSurnameBox.value;
    // Unisco nome e cognome dell'utente
    let userNameSurname = `${userName} ${userSurname}`;

    // Creo una variabile per verificare la presenza in lista con valore iniziale uguale a FALSO
    let isUserPresent = false;

    // Genero un ciclo FOR che confronta il nome e cognome dell'utente con la lista degli invitati e, se lo trova trasforma in VERO la variabile creata
    for (let invitato = 0; invitato < listaInvitati.length; invitato++) {
        if (listaInvitati[invitato].toLowerCase() == userNameSurname.toLowerCase()) {
            isUserPresent = true;
        }
    }

    // Genero una condizione IF che stampa a video se l'utente è invitato alla festa oppure no
    if (isUserPresent == true) {
        outputArea.innerHTML = `Ciao <span class="capitalize">${userName}</span>!<br>Sei nella lista degli invitati.<br>BUON DIVERTIMENTO!`;
    } else {
        outputArea.innerHTML = `Mi dispiace, <span class="capitalize">${userName}</span>.<br>Non sei nella lista degli invitati.`;
    }

    // Cancello i dati inseriti negli input
    insertNameBox.value = '';
    insertSurnameBox.value= '';
}
)
}

// FINE JSnack 4



/*
INIZIO JSNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
*/

function functionJSnack5() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 5 rimuovendo la classe display-none
divJS5.classList.remove('display-none');

// Creo un array vuoto
let array = [];

// Stabilisco quante volte voglio chiedere all'utente di inserire un numero (ovvero da quanti elementi dovrà essere composto l'array alla fine)
const numElementi = 6;

// Genero un ciclo FOR che chiede all'utente di immettere un valore numerico per il numero di volte già stabilito
// Ogni valore immesso diventa un elemento dell'array
for (let inserisci = 1; inserisci <= numElementi; inserisci++) {
    let number = parseInt(prompt('Inserisci un numero'));
    // Genero una condizione IF: se il numero inserito è dispari, lo inserisco nell'array
    if (number % 2 == 1) {
        array.push(number);
    }
}

// Stampo a video l'elenco degli elementi inseriti nell'array
document.getElementById('js5-array').innerHTML = `L'array è composto dai seguenti elementi:<br> [${array}]`;
}

// FINE JSnack 5





/*
INIZIO JSNACK 6

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

function functionJSnack6() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 6 rimuovendo la classe display-none
divJS6.classList.remove('display-none');

// Seleziono l'elemento HTML in cui l'utente inserisce il numero
let inputBox = document.getElementById('js6-number');

// Seleziono l'elemento HTML bottone che al click selezionerà il calcolo richiesto
let calcButton = document.getElementById('js6-calculate');

// Seleziono l'elemento HTML in cui visualizzerò il risultato
let outputArea = document.getElementById('js6-output');

// Definisco una variabile che userò per richiamare per il numero inserito dall'utente
let numeroInserito = '';

// Creo una variabile somma con valore iniziale pari a zero
let somma = 0

// Genero la funzione al click sul bottone
calcButton.addEventListener('click', function () {
    
    // Attribuisco alla variabile numeroInserito il valore del numero immesso dall'utente
    numeroInserito = inputBox.value;
   

    // Genero un avviso se il numero è composto da meno di 4 cifre
    if (numeroInserito.length != 4) {
        outputArea.innerHTML = `Devi inserire un numero di 4 cifre numeriche`;
    } else {
        // Genero un ciclo FOR con un contatore che pesca le singole cifre del numero inserito e le aggiunge al valore precedente della variabile somma precedentemente creata
        for (let contatore = 0; contatore < numeroInserito.length; contatore++) {
            somma += parseInt(numeroInserito[contatore]);
        }

        // Stampo il risultato a video
        outputArea.innerHTML = `La somma delle cifre inserite è ${somma}!`
        }

        // Resetto il valore di somma a zero
        somma = 0;

}
)
}

// FINE JSNACK 6




/*
INIZIO JSNACK 1.9

Calcola la somma e la media dei primi 10 numeri.
*/

function functionJSnack19() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 6 rimuovendo la classe display-none
divJS19.classList.remove('display-none');

// Definisco il numero di elementi
const numElements = 10;

// Definisco il valore minimo = 1
const minNum = 1;

// Definisco il valore massimo = 10
const maxNum = 10;

// Definisco la variabile somma con valore iniziale pari a 0
let sum = 0;

// Definisco una variabile contatore con valore iniziale pari al valore minimo e la userò per il ciclo while
let contatore = minNum;

// Genero un ciclo while che incrementa di volta in volta il valore della variabile somma
while (contatore <= maxNum) {
    sum += contatore;
    contatore++;
}

// Definisco una variabile per il calcolo della media
let avarage = sum / numElements;

// Stampo a video il risultato della somma e della media
document.getElementById('js19-output').innerHTML = `La somma dei numeri da ${minNum} a ${maxNum} è ${sum}, mentre il loro valore medio è ${avarage}.`;

}

// FINE JSNACK 1.9









/*
INIZIO JSNACK 2.1 (WHILE)

Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

function functionJSnack21() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 2.1 (while) rimuovendo la classe display-none
divJS21.classList.remove('display-none');

// Definisco quante volte voglio che il programma chieda all'utente di inserire un numero tramite prompt
let numPrompts = 5;

// Definisco una variabile contatore che parte da 1 per il numero di prompts
let contatore = 1;

// Definisco una variabile somma con valore iniziale pari a zero
let sum = 0;

// Definisco l'elemento HTML dove stamperò il risultato
let outputArea = document.getElementById('js21-output');

// Genero un ciclo while che chiede "n" volte all'utente di inserire un numero e effettua la somma
while (contatore <= numPrompts) {
    // Chiedo all'utente di inserire un numero
    let numeroInserito = parseInt(prompt('Digita un numero'));
    // Incremento il valore della variabile somma con il numero inserito
    sum += numeroInserito;
    // Incremento il contatore
    contatore++;
}

// Verifico con una condizione IF se il valore ottenuto è numerico e, se true, stampo il risultato a video
if (!isNaN(sum)) {
    outputArea.innerHTML = `La somma dei numeri inseriti è ${sum}!`;
} else {
    outputArea.innerHTML = `Sono accettati esclusivamente input numerici.`;
}

}

// FINE JSNACK 2.1 (WHILE)




/*
INIZIO JSNACK 2.1 (FOR)

Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

function functionJSnack21b() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 2.1 (for) rimuovendo la classe display-none
divJS21b.classList.remove('display-none');

// Definisco quante volte voglio che il programma chieda all'utente di inserire un numero tramite prompt
let numPrompts = 5;

// Definisco una variabile somma con valore iniziale pari a zero
let sum = 0;

// Definisco l'elemento HTML dove stamperò il risultato
let outputArea = document.getElementById('js21b-output');

// Genero un ciclo for che chiede "n" volte all'utente di inserire un numero e effettua la somma
for (let contatore = 1; contatore <= numPrompts; contatore++) {
    let numeroInserito = parseInt(prompt('Digita un numero'));
    sum += numeroInserito;
}

// Verifico con una condizione IF se il valore ottenuto è numerico e, se true, stampo il risultato a video
if (!isNaN(sum)) {
    outputArea.innerHTML = `La somma dei numeri inseriti è ${sum}!`;
} else {
    outputArea.innerHTML = `Sono accettati esclusivamente input numerici.`;
}

}

// FINE JSNACK 2.1 (FOR)






/*
INIZIO JSNACK 2.2

Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

function functionJSnack22() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 2.2 rimuovendo la classe display-none
divJS22.classList.remove('display-none');

// Chiedo all'utente di digitare un numero intero
let numInserito = prompt('Digita un numero intero');

// Definisco l'elemento HTML dove stampo il risultato
let outputArea = document.getElementById('js22-output');

if (isNaN(numInserito) || (numInserito - parseInt(numInserito) != 0)) {
    outputArea.innerHTML = `Devi digitare un valore numerico intero.`;
} else if (numInserito % 2 == 0) {
    outputArea.innerHTML = `Hai digitato il numero ${numInserito}, che è un numero pari.`;
} else {
    numInserito++
    outputArea.innerHTML = `Il numero che hai digitato è dispari. Il numero successivo a quello digitato è ${numInserito}, che è un numero pari.`;
}

}

 // FINE JSNACK 2.2





 /*
INIZIO JSNACK 2.3

Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

function functionJSnack23() {
    
// Pulisco la sezione main dell'HTML da eventuali precedenti JSnacks visualizzati
divJS1.classList.add('display-none');
divJS2.classList.add('display-none');
divJS3.classList.add('display-none');
divJS4.classList.add('display-none');
divJS5.classList.add('display-none');
divJS6.classList.add('display-none');
divJS19.classList.add('display-none');
divJS21.classList.add('display-none');
divJS21b.classList.add('display-none');
divJS22.classList.add('display-none');
divJS23.classList.add('display-none');

// Abilito la visualizzazione dello JSnack 2.3 rimuovendo la classe display-none
divJS23.classList.remove('display-none');

// Definisco un array con la lista di nomi

const listaNomi = [
    "Adelin Dumitru",
    "Aldo",
    "Alessandro",
    "Alessio",
    "Anthony",
    "Antonio",
    "Camilla",
    "Chiara",
    "Cristian",
    "Daniele",
    "Erika",
    "Federico",
    "Gabriel",
    "Giacomo",
    "Giovanni",
    "Giuseppe",
    "Henri",
    "Khongor",
    "Kristian",
    "Laura",
    "Luca",
    "Luigi",
    "Maria Giuliana",
    "Mario",
    "Marzio",
    "Massimo",
    "Matteo",
    "Mattia",
    "Mauro",
    "Michela",
    "Mirko",
    "Paolo",
    "Piergiorgio",
    "Salvatore",
    "Samuele",
    "Simone",
    "Stefano"
]

// Definisco un array con la lista di cognomi

const listaCognomi = [
    "Tanasa",
    "Cocurullo",
    "Ballabio",
    "Tucci",
    "Uva",
    "Vitiello",
    "Cecconi",
    "Straziota",
    "Palombi",
    "Passaro",
    "Bricicaru",
    "De Simone",
    "Sarleti",
    "Mura",
    "Spanu",
    "Passariello",
    "Calia",
    "Mirizzi",
    "Kapidani",
    "Gerelchimeg",
    "Llambro",
    "Margherita",
    "Andaloro",
    "Lo Bianco",
    "Bardella Gerbi",
    "Pasinetti",
    "Martino",
    "Battinelli",
    "Segattini",
    "La Selva",
    "Costantinescu",
    "Colangelo",
    "Moschella",
    "Calafiore",
    "Piras",
    "Praticò",
    "Della Rocca",
    "Tartaglia",
    "Stortini"
]

const nomiCognomiReali = [
    "Adelin Dumitru Tanasa",
    "Aldo Cocurullo",
    "Alessandro Ballabio",
    "Alessandro Tucci",
    "Alessandro Uva",
    "Alessio Vitiello",
    "Anthony Cecconi",
    "Antonio Straziota",
    "Camilla Palombi",
    "Chiara Passaro",
    "Cristian Bricicaru",
    "Daniele De Simone",
    "Erika Sarleti",
    "Federico Mura",
    "Gabriel Spanu",
    "Giacomo Passariello",
    "Giovanni Calia",
    "Giuseppe Mirizzi",
    "Henri Kapidani",
    "Khongor Gerelchimeg",
    "Kristian Llambro",
    "Laura Margherita",
    "Luca Andaloro",
    "Luca Lo Bianco",
    "Luigi Bardella Gerbi",
    "Maria Giuliana Pasinetti",
    "Mario Martino",
    "Marzio Della Rocca",
    "Massimo Battinelli",
    "Matteo Segattini",
    "Mattia La Selva",
    "Mauro Costantinescu",
    "Michela Colangelo",
    "Mirko Moschella",
    "Paolo Calafiore",
    "Piergiorgio Piras",
    "Salvatore Praticò",
    "Samuele Della Rocca",
    "Simone Tartaglia",
    "Stefano Stortini"
]

// Definisco quanti nomi casuali voglio generare
const numeroInvitatiRandom = 3;

// Definisco un contatore degli invitati
let contatoreInvitati = 1;

// Definisco una variabile per un invitato con nome e cognome random
let invitatoRandom

// Definisco un array, inizialmente vuoto, per le combinazioni nome+cognome che genererò
let listaInvitatiRandom = [];

while (listaInvitatiRandom.length < numeroInvitatiRandom) {
    // Pesco un nome a caso dall'array dei nomi
    let posizioneRandomNome = Math.floor(Math.random() * listaNomi.length);
    let nomeRandom = listaNomi[posizioneRandomNome];
    
    // Pesco un cognome a caso dall'array dei cognomi
    let posizioneRandomCognome = Math.floor(Math.random() * listaCognomi.length);
    let cognomeRandom = listaCognomi[posizioneRandomCognome];
    
    // Genero un nome + cognome casuale
    invitatoRandom = nomeRandom + ' ' + cognomeRandom;

    // Genero una condizione IF per confrontare il nome casuale con i nomi reali, in quanto il mio obiettivo è che i nomi casuali siano diversi da quelli reali
    // Inoltre (2nda condizione if) verifico che non ci siano combinazioni random identiche
    if (!nomiCognomiReali.includes(invitatoRandom) && !listaInvitatiRandom.includes(invitatoRandom)) {
        // Incremento il contatore
        contatoreInvitati++;

        // Inserisco i nomi generati nell'array delle combinazioni random
        listaInvitatiRandom.push(invitatoRandom);
    }
  
}



// Stampo i nomi generati
document.getElementById('js23-output').innerHTML = `Gatsby ha generato la seguente lista di nomi falsi:<ul><li>${listaInvitatiRandom[0]}</li><li>${listaInvitatiRandom[1]}</li><li>${listaInvitatiRandom[2]}</li></ul>`;


}

// FINE JSNACK 2.3