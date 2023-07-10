let btnPlay = document.getElementById("play");

btnPlay.addEventListener("click", function() {
    const userNumber = parseInt(document.querySelector(".selected-number").value);
    const userOddEven = parseInt(document.querySelector(".even-odd").value); //1 se pari, 2 se dispari

    const randomNumber = randomGenerator();
    
    const sum = add(userNumber, randomNumber);
    document.querySelector(".sum-value").innerHTML = parseInt(sum);

    winCondition(sum, userOddEven);
  }
)

/**
 * Effects: Genera un numero intero randomico tra 1 e 5
 * 
 * @returns {number}
 */
function randomGenerator() {
  return Math.floor((Math.random() * 5) + 1);
}

/**
 * Effects: Ritorna la somma dei due numeri passati in input
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function add(num1, num2) {
  return num1 + num2;
}


/**
 * Effects: Ritorna true se il numero è pari, false altrimenti
 * 
 * @param {number} num
 * @returns {boolean}
 */
function evenOrOdd(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}


/**
 * Effect: 
 * se "number" è true e "userParitySelection" è 1(l'utente ha selezionato pari) allora l'utente vince
 * se "number" è false e "userParitySelection" è 2(l'utente ha selezionato dispari) allora l'utente vince
 * altrimenti l'utente perde
 * 
 * @param {number} number 
 * @param {number} userParitySelection 
 */
function winCondition(number, userParitySelection) {
  if ((evenOrOdd(number) && userParitySelection == 1) || (!evenOrOdd(number) && userParitySelection == 2)) {
    document.querySelector(".message").innerHTML = "Hai Vinto";
  } else {
    document.querySelector(".message").innerHTML = "Hai Perso";
  }
}