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
let numero1JS1 = parseInt(prompt('Digita un numero'));

// Chiedo all'utente di inserire un altro numero
let numero2JS1 = parseInt(prompt('Digita un altro numero'));

// Definisco l'elemento HTML dove stamperò il risultato finale
let outputAreaJS1 = document.getElementById('js1-output');


// Genero un ciclo IF per confrontare i 2 numeri e visualizzare un popup con il numero più alto oppure un avviso che i 2 numeri sono uguali.
if (isNaN(numero1JS1) || isNaN(numero2JS1)) {
    outputAreaJS1.innerHTML = `Devi inserire dei valori numerici`;  
} else if (numero1JS1 == numero2JS1) {
    outputAreaJS1.innerHTML = `I due numeri inseriti sono uguali`;
} else if (numero1JS1 > numero2JS1) {
    outputAreaJS1.innerHTML = `Il primo numero inserito è ${numero1JS1}.<br>Il secondo numero inserito è ${numero2JS1}.<br>${numero1JS1} è il numero più grande.`;
} else {
    outputAreaJS1.innerHTML = `Il primo numero inserito è ${numero1JS1}.<br>Il secondo numero inserito è ${numero2JS1}.<br>${numero2JS1} è il numero più grande.`;
}

// FINE VERSIONE CON PROMPT E ALERT


// VERSIONE HTML CON INPUT
/*
// Seleziono gli elementi HTML in cui l'utente inserisce i due numeri richiesti
let numero1BoxJS1 = document.getElementById('js1-number1');
let numero2BoxJS1 = document.getElementById('js1-number2');
// Definisco due variabili, inizialmente vuote, per i numeri inseriti dall'utente
let numeroInserito1JS1 = '';
let numeroInserito2JS1 = '';
// Definisco l'elemento bottone HTML che effettua il confronto tra i due numeri
let buttonConfrontaJS1 = document.getElementById('js1-confronta');
// Definisco l'area HTML in cui stamperò il risultato del confronto
let outputAreaJS1 = document.getElementById('js1-output');

// Genero l'evento al click sul bottone di confronto
buttonConfrontaJS1.addEventListener('click', function () {
    // Leggo i numeri inseriti dall'utente e li sovrascrivo alla variabile numeroInserito
    numeroInserito1JS1 = numero1BoxJS1.value;
    numeroInserito2JS1 = numero2BoxJS1.value;
    // Se i dati inseriti non sono valori numerici...
    if (isNaN(numeroInserito1JS1) || isNaN(numeroInserito2JS1)) {
        outputAreaJS1.innerHTML = `Devi inserire dei valori numerici`;
    } else if (numeroInserito1JS1 > numeroInserito2JS1) {
        outputAreaJS1.innerHTML = `${numeroInserito1JS1} è il numero più grande`;
    } else if (numeroInserito1JS1 < numeroInserito2JS1) {
        outputAreaJS1.innerHTML = `${numeroInserito2JS1} è il numero più grande`;
    } else {
        outputAreaJS1.innerHTML = `I due numeri inseriti sono uguali`;
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
let word1JS2 = prompt(`Scrivi una parola:`);

// Chiedo all'utente di scrivere un'altra parola
let word2JS2 = prompt(`Scrivi un'altra parola:`);

// Seleziono l'id html dove stamperò il messaggio
let messageJS2 = document.getElementById('js2-word');

// Definisco una variabile per avvisare l'utente che può usare esclusivamente caratteri alfabetici
var caratteriConsentitiJS2 = /^[a-zA-Z]+$/;

// Genero un ciclo IF per confrontare la lunghezza delle parole inserite e stampare a video le parole in ordine di lunghezza (prima la più corta) o un avviso che la lunghezza è la stessa
if (caratteriConsentitiJS2.test(word1JS2) == false || caratteriConsentitiJS2.test(word2JS2) == false) {
    messageJS2.innerHTML = `Puoi inserire soltanto caratteri alfabetici senza spazi`;
} else if (word1JS2.length == word2JS2.length) {
    messageJS2.innerHTML = `Le parole "${word1JS2}" e "${word2JS2}" hanno la stessa lunghezza (${word1JS2.length} caratteri).`;
} else if (word1JS2.length > word2JS2.length) {
    messageJS2.innerHTML = `Le parole inserite, in ordine di lunghezza dalla più corta alla più lunga, sono:<br>"${word2JS2}" (${word2JS2.length} caratteri)<br>"${word1JS2}" (${word1JS2.length} caratteri)`;
} else {
    messageJS2.innerHTML = `Le parole inserite, in ordine di lunghezza dalla più corta alla più lunga, sono:<br>"${word1JS2}" (${word1JS2.length} caratteri)<br>"${word2JS2}" (${word2JS2.length} caratteri)`;
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
let sumNumbersJS3 = 0;

// Genero un ciclo FOR che chiede all'utente di inserire "i" numeri e ad ogni interazione incremento la variabile sumNumbers aggiungendo il numero inserito
for (iJS3 = 1; iJS3 <= 10; iJS3++) {
    let numberJS3 = parseInt(prompt("inserisci un numero:"));
    sumNumbersJS3 += numberJS3;
}

// Stampo a video il risultato della somma degli "i" elementi
document.getElementById('js3-sum').innerHTML = `La somma dei numeri inseriti è ${sumNumbersJS3}.`;
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
const listaInvitatiJS4 = [
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
let insertNameBoxJS4 = document.getElementById('js4-name');
// Definisco l'elemento HTML in cui l'utente immette il cognome
let insertSurnameBoxJS4 = document.getElementById('js4-surname');
// Definisco l'elemento bottone HTML che fa partire la funzione al click
let buttonVerifyJS4 = document.getElementById('js4-verify');
// Definisco l'area HTML in cui stamperò il risultato della funzione
let outputAreaJS4 = document.getElementById('js4-output');

// Genero l'evento al click sul bottone per verificare il nome e il cognome inseriti
buttonVerifyJS4.addEventListener('click', function () {
    // Leggo il nome inserito dall'utente
    let userNameJS4 = insertNameBoxJS4.value;
    // Leggo il cognome inserito dall'utente
    let userSurnameJS4 = insertSurnameBoxJS4.value;
    // Unisco nome e cognome dell'utente
    let userNameSurnameJS4 = `${userNameJS4} ${userSurnameJS4}`;

    // Creo una variabile per verificare la presenza in lista con valore iniziale uguale a FALSO
    let isUserPresentJS4 = false;

    // Genero un ciclo FOR che confronta il nome e cognome dell'utente con la lista degli invitati e, se lo trova trasforma in VERO la variabile creata
    for (let invitatoJS4 = 0; invitatoJS4 < listaInvitatiJS4.length; invitatoJS4++) {
        if (listaInvitatiJS4[invitatoJS4].toLowerCase() == userNameSurnameJS4.toLowerCase()) {
            isUserPresentJS4 = true;
        }
    }

    // Genero una condizione IF che stampa a video se l'utente è invitato alla festa oppure no
    if (isUserPresentJS4 == true) {
        outputAreaJS4.innerHTML = `Ciao <span class="capitalize">${userNameJS4}</span>!<br>Sei nella lista degli invitati.<br>BUON DIVERTIMENTO!`;
    } else {
        outputAreaJS4.innerHTML = `Mi dispiace, <span class="capitalize">${userNameJS4}</span>.<br>Non sei nella lista degli invitati.`;
    }

    // Cancello i dati inseriti negli input
    insertNameBoxJS4.value = '';
    insertSurnameBoxJS4.value= '';
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
let arrayJS5 = [];

// Stabilisco quante volte voglio chiedere all'utente di inserire un numero (ovvero da quanti elementi dovrà essere composto l'array alla fine)
const numElementiJS5 = 6;

// Genero un ciclo FOR che chiede all'utente di immettere un valore numerico per il numero di volte già stabilito
// Ogni valore immesso diventa un elemento dell'array
for (let inserisciJS5 = 1; inserisciJS5 <= numElementiJS5; inserisciJS5++) {
    let numberJS5 = parseInt(prompt('Inserisci un numero'));
    // Genero una condizione IF: se il numero inserito è dispari, lo inserisco nell'array
    if (numberJS5 % 2 == 1) {
        arrayJS5.push(numberJS5);
    }
}

// Stampo a video l'elenco degli elementi inseriti nell'array
document.getElementById('js5-array').innerHTML = arrayJS5;
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
let inputBoxJS6 = document.getElementById('js6-number');

// Seleziono l'elemento HTML bottone che al click selezionerà il calcolo richiesto
let calcButtonJS6 = document.getElementById('js6-calculate');

// Seleziono l'elemento HTML in cui visualizzerò il risultato
let outputAreaJS6 = document.getElementById('js6-output');

// Definisco una variabile che userò per richiamare per il numero inserito dall'utente
let numeroInseritoJS6 = '';

// Creo una variabile somma con valore iniziale pari a zero
let sommaJS6 = 0

// Genero la funzione al click sul bottone
calcButtonJS6.addEventListener('click', function () {
    
    // Attribuisco alla variabile numeroInserito il valore del numero immesso dall'utente
    numeroInseritoJS6 = inputBoxJS6.value;
   

    // Genero un avviso se il numero è composto da meno di 4 cifre
    if (numeroInseritoJS6.length != 4) {
        outputAreaJS6.innerHTML = `Devi inserire un numero di 4 cifre numeriche`;
    } else {
        // Genero un ciclo FOR con un contatore che pesca le singole cifre del numero inserito e le aggiunge al valore precedente della variabile somma precedentemente creata
        for (let contatoreJS6 = 0; contatoreJS6 < numeroInseritoJS6.length; contatoreJS6++) {
            sommaJS6 += parseInt(numeroInseritoJS6[contatoreJS6]);
        }

        // Stampo il risultato a video
        outputAreaJS6.innerHTML = `La somma delle cifre inserite è ${sommaJS6}!`
        }

        // Resetto il valore di somma a zero
        sommaJS6 = 0;

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
const numElementsJS19 = 10;

// Definisco il valore minimo = 1
const minNumJS19 = 1;

// Definisco il valore massimo = 10
const maxNumJS19 = 10;

// Definisco la variabile somma con valore iniziale pari a 0
let sumJS19 = 0;

// Definisco una variabile contatore con valore iniziale pari al valore minimo e la userò per il ciclo while
let contatoreJS19 = minNumJS19;

// Genero un ciclo while che incrementa di volta in volta il valore della variabile somma
while (contatoreJS19 <= maxNumJS19) {
    sumJS19 += contatoreJS19;
    contatoreJS19++;
}

// Definisco una variabile per il calcolo della media
let avarageJS19 = sumJS19 / numElementsJS19;

// Stampo a video il risultato della somma e della media
document.getElementById('js19-output').innerHTML = `La somma dei numeri da ${minNumJS19} a ${maxNumJS19} è ${sumJS19}, mentre il loro valore medio è ${avarageJS19}.`;

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
let numPromptsJS21 = 5;

// Definisco una variabile contatore che parte da 1 per il numero di prompts
let contatoreJS21 = 1;

// Definisco una variabile somma con valore iniziale pari a zero
let sumJS21 = 0;

// Definisco l'elemento HTML dove stamperò il risultato
let outputAreaJS21 = document.getElementById('js21-output');

// Genero un ciclo while che chiede "n" volte all'utente di inserire un numero e effettua la somma
while (contatoreJS21 <= numPromptsJS21) {
    // Chiedo all'utente di inserire un numero
    let numeroInseritoJS21 = parseInt(prompt('Digita un numero'));
    // Incremento il valore della variabile somma con il numero inserito
    sumJS21 += numeroInseritoJS21;
    // Incremento il contatore
    contatoreJS21++;
}

// Verifico con una condizione IF se il valore ottenuto è numerico e, se true, stampo il risultato a video
if (!isNaN(sumJS21)) {
    outputAreaJS21.innerHTML = `La somma dei numeri inseriti è ${sumJS21}!`;
} else {
    outputAreaJS21.innerHTML = `Sono accettati esclusivamente input numerici.`;
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
let numPromptsJS21b = 5;

// Definisco una variabile somma con valore iniziale pari a zero
let sumJS21b = 0;

// Definisco l'elemento HTML dove stamperò il risultato
let outputAreaJS21b = document.getElementById('js21b-output');

// Genero un ciclo for che chiede "n" volte all'utente di inserire un numero e effettua la somma
for (let contatoreJS21b = 1; contatoreJS21b <= numPromptsJS21b; contatoreJS21b++) {
    let numeroInseritoJS21b = parseInt(prompt('Digita un numero'));
    sumJS21b += numeroInseritoJS21b;
}

// Verifico con una condizione IF se il valore ottenuto è numerico e, se true, stampo il risultato a video
if (!isNaN(sumJS21b)) {
    outputAreaJS21b.innerHTML = `La somma dei numeri inseriti è ${sumJS21b}!`;
} else {
    outputAreaJS21b.innerHTML = `Sono accettati esclusivamente input numerici.`;
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
let numInseritoJS22 = prompt('Digita un numero intero');

// Definisco l'elemento HTML dove stampo il risultato
let outputAreaJS22 = document.getElementById('js22-output');

if (isNaN(numInseritoJS22) || (numInseritoJS22 - parseInt(numInseritoJS22) != 0)) {
    outputAreaJS22.innerHTML = `Devi digitare un valore numerico intero.`;
} else if (numInseritoJS22 % 2 == 0) {
    outputAreaJS22.innerHTML = `Hai digitato il numero ${numInseritoJS22}, che è un numero pari.`;
} else {
    numInseritoJS22++
    outputAreaJS22.innerHTML = `Il numero che hai digitato è dispari. Il numero successivo a quello digitato è ${numInseritoJS22}, che è un numero pari.`;
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

const listaNomiJS23 = [
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

const listaCognomiJS23 = [
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

const nomiCognomiRealiJS23 = [
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
const numeroInvitatiRandomJS23 = 3;

// Definisco un contatore degli invitati
let contatoreInvitatiJS23 = 1;

// Definisco una variabile per un invitato con nome e cognome random
let invitatoRandomJS23

// Definisco un array, inizialmente vuoto, per le combinazioni nome+cognome che genererò
let listaInvitatiRandomJS23 = [];

while (contatoreInvitatiJS23 <= numeroInvitatiRandomJS23) {
    // Pesco un nome a caso dall'array dei nomi
    let posizioneRandomNomeJS23 = Math.floor(Math.random() * listaNomiJS23.length);
    let nomeRandomJS23 = listaNomiJS23[posizioneRandomNomeJS23];
    
    // Pesco un cognome a caso dall'array dei cognomi
    let posizioneRandomCognomeJS23 = Math.floor(Math.random() * listaCognomiJS23.length);
    let cognomeRandomJS23 = listaCognomiJS23[posizioneRandomCognomeJS23];
    
    // Genero un nome + cognome casuale
    invitatoRandomJS23 = nomeRandomJS23 + ' ' + cognomeRandomJS23;

    // Incremento il contatore
    contatoreInvitatiJS23++;

    // Inserisco i nomi generati in un array
    listaInvitatiRandomJS23.push(invitatoRandomJS23);
  
}


// Stampo i nomi generati
document.getElementById('js23-output').innerHTML = `${listaInvitatiRandomJS23[0]}<br>${listaInvitatiRandomJS23[1]}<br>${listaInvitatiRandomJS23[2]}`;


}

// FINE JSNACK 2.3