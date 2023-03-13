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

// richiamo dal DOM l'elemento form e lo assegno ad una variabile
const form = document.querySelector('form');
// richiamo dal DOM l'elemento div.container e lo assegno ad una variabile
const containerEl = document.querySelector('.container');

//creo un elemento span nel DOM e lo assegno ad una variabile 
const resultSpan = document.createElement('span');

// assegno al form un event listener al submit
form.addEventListener('submit', function(e) {
    // prevengo l'evento di default del submit di un form
    e.preventDefault();

    // richiamo dal DOM l'elemento input e lo assegno ad una variabile
    const emailInput = document.querySelector('input');
    // assegno il valore dell'input ad una variabile
    const userMail = emailInput.value;

    //assegno il valore iniziale false alla variabile che determina il permesso di accedere
    let hasAccess = false;

    // creo un loop che passi gli elementi dell'array
    for (let i = 0; i < validMails.length; i++) {
        //verifico se la mail inserita nell'input sia uguale ad una delle mail dell'array
        if (userMail == validMails[i]) {
            hasAccess = true;
        }
    }

    // creo un if statement con, come condizione, il valore della variabile hasAccess
    if (hasAccess) {
        //stampo un messaggio nello span creato se hasAccess è vera
        resultSpan.innerHTML = 'Yay! You\'re allowed to access!';
        resultSpan.style.color = 'var(--bs-success)'
    } else {
        //altrimenti stampo un messaggio diverso
        resultSpan.innerHTML = 'Sorry! You\'re not allowed to access!';
        resultSpan.style.color = 'var(--bs-danger)'
    }
    
    // inserisco nel container del DOM l'elemento span precedentemente creato
    containerEl.insertAdjacentElement('beforeend', resultSpan);
})


// assegno al form un event listener al reset
form.addEventListener('reset', function(e) {
    resultSpan.innerHTML = '';
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
