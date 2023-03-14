// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// MYCODE - DICE GAME
const btnPlay = document.getElementById('playnow');
console.dir(btnPlay);

btnPlay.addEventListener('click', function() {
    let chooseNumber = document.getElementById('choose-number').value;
    console.log(chooseNumber); 
    
    // GENERATE NUMBER
    let botNumber = getRndNumber(1, 6);
    console.log(botNumber);

    // RESULT
    const result = document.querySelector('.box-result');
    if (chooseNumber > botNumber){
        result.innerHTML = `<h3>Il tuo numero: ${chooseNumber}</h3>
                            <h3>Il numero del Bot: ${botNumber}</h3>
                            <h1>Hai vinto</h1>`;
    }   
    else if (chooseNumber == botNumber){
        result.innerHTML = `<h3>Il tuo numero: ${chooseNumber}</h3>
                            <h3>Il numero del Bot: ${botNumber}</h3>
                            <h1>Pareggio</h1>`;
    }
    else if (chooseNumber < botNumber){
        result.innerHTML = `<h3>Il tuo numero: ${chooseNumber}</h3>
                            <h3>Il numero del Bot: ${botNumber}</h3>
                            <h1>Hai perso</h1>`;
    }
})  



