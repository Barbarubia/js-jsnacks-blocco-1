/*
// INIZIO JSnack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// Chiedo all'utente di inserire un numero
let numero1 = parseInt(prompt('dimmi un numero'));

// Chiedo all'utente di inserire un altro numero
let numero2 = parseInt(prompt('dimmi un altro numero'));


// Genero un ciclo IF per confrontare i 2 numeri e visualizzare un popup con il numero più alto oppure un avviso che i 2 numeri sono uguali.
if (numero1 == numero2) {
    alert('i 2 numeri immessi sono uguali');
} else if (numero1 > numero2) {
    alert(`${numero1}`);
} else {
    alert(`${numero2}`);
}

// FINE JSnack 1
*/



/*
// INIZIO JSnack 2
// L'utente inserisce 2 parole in successione, con 2 prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo all'utente di scrivere una parola
let word1 = prompt(`Scrivi una parola:`);

// Chiedo all'utente di scrivere un'altra parola
let word2 = prompt(`Scrivi un'altra parola:`);

// Seleziono l'id html dove stamperò il messaggio
let message = document.getElementById('word');

// Genero un ciclo IF per confrontare la lunghezza delle parole inserite e stampare a video le parole in ordine di lunghezza (prima la più corta) o un avviso che la lunghezza è la stessa
if (word1.length == word2.length) {
    message.innerHTML = (`"${word1}" e "${word2}" hanno la stessa lunghezza`);
} else if (word1.length > word2.length) {
    message.innerHTML = (`"${word2}"<br>"${word1}"`);
} else {
    message.innerHTML = (`"${word1}"<br>"${word2}"`);
}

// FINE JSnack 2
*/



/*
// INIZIO JSnack 3
// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// definisco una variabile con valore iniziale uguale a 0
let sumNumbers = 0;

// Genero un ciclo FOR che chiede all'utente di inserire "i" numeri e ad ogni interazione incremento la variabile sumNumbers aggiungendo il numero inserito
for (i = 1; i <= 10; i++) {
    let number = parseInt(prompt("inserisci un numero:"));
    sumNumbers += number;
}

// Stampo a video il risultato della somma degli "i" elementi
document.getElementById('sum').innerHTML = `${sumNumbers}`;

// FINE JSnack 3
*/



/*
//INIZIO JSnack 4
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// Chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

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
let insertNameBox = document.getElementById('name');
// Definisco l'elemento HTML in cui l'utente immette il cognome
let insertSurnameBox = document.getElementById('surname');
// Definisco l'elemento bottone HTML che fa partire la funzione al click
let buttonVerify = document.getElementById('verify');
// Definisco l'area HTML in cui stamperò il risultato della funzione
let outputArea = document.getElementById('output');

// Genero l'evento al click sul bottono per verificare il nome e il cognome inseriti
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
    for (invitato = 0; invitato < listaInvitati.length; invitato++) {
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

// FINE JSnack 4
*/




// Snack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// Creo un array vuoto
let array = [];

// Stabilisco quante volte voglio chiedere all'utente di inserire un numero (ovvero da quanti elementi dovrà essere composto l'array alla fine)
const numElementi = 6;

// Genero un ciclo FOR che chiede all'utente di immettere un valore numerico per il numero di volte già stabilito
// Ogni valore immesso diventa un elemento dell'array
for (inserisci = 1; inserisci <= numElementi; inserisci++) {
    let number = parseInt(prompt('Inserisci un numero'));
    // Genero una condizione IF: se il numero inserito è dispari, lo inserisco nell'array
    if (number % 2 == 1) {
        array.push(number);
    }
}

// Stampo a video l'elenco degli elementi inseriti nell'array
document.getElementById('array').innerHTML = array;

// FINE JSnack 5



// Snack 6
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.