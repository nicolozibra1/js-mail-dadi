// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// MYCODE - EVENTMAIL

const guestList = [
    'jennifersmith24@gmail.com',
    'markandrews96@yahoo.com',
    'katewilson78@hotmail.com',
    'chrisroberts43@gmail.com',
    'melissawalker81@yahoo.com',
    'davidjones32@hotmail.com',
    'sarahparker64@gmail.com',
    'kevinmiller19@yahoo.com',
    'amycampbell47@hotmail.com',
    'brianbrown87@gmail.com',
    'lauramurphy72@yahoo.com',
    'johnanderson56@hotmail.com',
    'jessicalee29@gmail.com',
    'jasonwright18@yahoo.com',
    'elizabethdavis94@hotmail.com',
    'stevefoster63@gmail.com',
    'mariarodriguez71@yahoo.com',
    'aaronharris89@hotmail.com',
    'annettelee12@gmail.com',
    'tomwilson48@yahoo.com',
]

const btn = document.getElementById('search');

btn.addEventListener('click', function (e) { e.preventDefault();
   let guest = false;
   const userMail = document.getElementById('usermail').value;

   for(let i = 0; i < guestList.length; i++){
    if(guestList[i] === userMail) {
        guest = guestList[i];
    }
   }

   if(guest) {
    console.log('Complimenti! Sei nella lista degli invitati.')
   }
   else {
    console.log('Ci dispiace, ma non sei presente nella lista.');
   }

});