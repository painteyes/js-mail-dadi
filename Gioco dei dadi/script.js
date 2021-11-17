// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let userRandomNumber = Math.floor(Math.random() * 6) + 1;
let computerRandomNumber = Math.floor(Math.random() * 6) + 1;

console.log(userRandomNumber);
console.log(computerRandomNumber);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userRandomNumber > computerRandomNumber){
    alert ('L\'utente ha vinto');
} else if (computerRandomNumber > userRandomNumber){
    atert ('Il computer ha vinto');
} else {
    alert ('L\'utente e il computer hanno pareggiato');
}


