// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// MYCODE - EVENTMAIL

const guestList = [
    'clecliafradella@gmail.com',
    'marcoacciari@gmail.com',
    'samuelpanicucci@gmail.com'
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

   const cardCheckGuest = document.querySelector('.card-checkguest')
   const checkResult = document.querySelector('.check-result')

   if(guest) {  
    cardCheckGuest.classList.add('d-none')
    checkResult.innerHTML = `<h1 class="text-white text-center">Complimenti! Sei nella lista degli invitati.</h1>`;
   }
   else {
    cardCheckGuest.classList.add('d-none')
    checkResult.innerHTML = `<h1 class="text-white text-center">Ci dispiace, non sei presente nella lista.</h1>`;
   }

});

const btnList = document.querySelector('.info-guestlist');

btnList.addEventListener('click', function () {
    const canvas = document.querySelector('.canvas');
    canvas.classList.toggle('d-none');
})