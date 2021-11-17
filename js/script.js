// Mail

// let fakeEmailDatabase = ['liberodiessere@libero.it','diavoletta87@hotmail.it','fidab54345@erpipo.com'];

// // Chiedi all’utente la sua email,
// let userEmail = prompt('Inserisci la tua email');

// // controlla che sia nella lista di chi può accedere,
// for (i=0 ; i < fakeEmailDatabase.length ; i++) {
//     // stampa un messaggio appropriato sull’esito del controllo.
//     let thisEmail = fakeEmailDatabase[i];
//     if (userEmail === thisEmail){
//         console.log ('La tua email è nel database');
//     }
// }

// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let userRandomNumber = Math.floor(Math.random() * 6) + 1;
let computerRandomNumber = Math.floor(Math.random() * 6) + 1;

console.log(userRandomNumber);
console.log(computerRandomNumber);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userRandomNumber > computerRandomNumber){
    console.log('L\'utente ha vinto');
} else if (computerRandomNumber > userRandomNumber){
    console.log('Il computer ha vinto');
} else {
    console.log('L\'utente e il computer hanno pareggiato');
}


