/* Chiedi all’utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo */

//creo un array contentente gli indirizzi mail che possono accedere
const validMails = [
    'randomEmail1@yahoo.com',
    'randomEmail2@yahoo.com',
    'randomEmail3@yahoo.com',
    'randomEmail4@yahoo.com',
    'randomEmail5@yahoo.com',
    'randomEmail6@yahoo.com'
];
//chiedo all'user la sua mail e la assegno ad una variabile
const userMail = prompt('What is your email?');
//verifico che la mail sia presente nell'array
if (validMails.includes(userMail)) {
    //stampo un messaggio se l'utente può accedere
    console.log('Yay! You\'re allowed to access!');
} else {
    //altrimenti stampo un messaggio diverso
    console.log('Sorry! You\'re not allowed to access!')
}
