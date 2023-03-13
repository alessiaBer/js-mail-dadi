/***** MAIL *****/ 
/* Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo */

/** mail bonus **/
//Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

//creo un array contentente gli indirizzi mail che possono accedere
const validMails = [
    'randomEmail1@yahoo.com',
    'randomEmail2@yahoo.com',
    'randomEmail3@yahoo.com',
    'randomEmail4@yahoo.com',
    'randomEmail5@yahoo.com',
    'randomEmail6@yahoo.com'
];

/* chiedo all'user la sua mail e la assegno ad una variabile
const userMail = prompt('What is your email?'); */

// richiamo dal DOM l'elemento form e lo assegno ad una variabile
const form = document.querySelector('form');

// assegno al form un event listener al submit
form.addEventListener('submit', function(e) {
    // prevengo l'evento di default del submit di un form
    e.preventDefault();

    // richiamo dal DOM l'elemento input e lo assegno ad una variabile
    const emailInput = document.querySelector('input');
    // assegno il valore dell'input ad una variabile
    const userMail = emailInput.value;
    console.log(userMail)
    //verifico che la mail sia presente nell'array
    if (validMails.includes(userMail)) {
    //stampo un messaggio se l'utente può accedere
        console.log('Yay! You\'re allowed to access!');
    } else {
    //altrimenti stampo un messaggio diverso
        console.log('Sorry! You\'re not allowed to access!')
    }
})





/***** GIOCO DEI DADI *****/ 
/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

//genero un un numero random per il giocatore e lo assegno ad una variabile
const playerNumber = Math.ceil((Math.random() * 5) + 1);
console.log(playerNumber);
//genero un un numero random per il computer e lo assegno ad una variabile
const computerNumber = Math.ceil((Math.random() * 5) + 1);
console.log(computerNumber);

// stabilisco il vincitore 
if (playerNumber > computerNumber) {
    //stampo un messaggio se il numero del giocatore è maggiore di quello del computer
    console.log('User wins!')
} else if (computerNumber > playerNumber) {
    //stampo un messaggio diverso se il numero del computer è maggiore di quello del giocatore
    console.log('Computer wins!')
} else {
    //stampo un messaggio diverso se nessuna delle due condizioni si avvera
    console.log('Retry! Nobody wins!')
}
