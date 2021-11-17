// Mail
let fakeEmailDatabase = ['liberodiessere@libero.it','diavoletta87@hotmail.it','fidab54345@erpipo.com'];

// Chiedi all’utente la sua email,
let userEmail = prompt('Inserisci la tua email');

// controlla che sia nella lista di chi può accedere,
let emailFound = false;

for (let i=0 ; i < fakeEmailDatabase.length  ; i++) {
    
    const thisEmail = fakeEmailDatabase[i];
    
    if (userEmail === thisEmail) {
        emailFound = true;
    }
}

// stampa un messaggio appropriato sull’esito del controllo.
if (emailFound) {
    alert  ('La tua email è nel database'); 
} else {
    alert  ('Mi dispiace, la tua email non è nel database');
}



