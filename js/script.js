// Mail
let fakeEmailDatabase = ['liberodiessere@libero.it','diavoletta87@hotmail.it','fidab54345@erpipo.com'];
// Chiedi all’utente la sua email,
let userEmail = prompt('Inserisci la tua email');

// controlla che sia nella lista di chi può accedere,
for (i=0 ; i < fakeEmailDatabase.length ; i++) {
    
    if (userEmail === fakeEmailDatabase[i]){
        console.log ('La tua email è nel database');
    }

}

// stampa un messaggio appropriato sull’esito del controllo.

