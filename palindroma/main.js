let btnCheck = document.getElementById("check-btn");

btnCheck.addEventListener("click", function () {
    const userWord = document.querySelector(".input-word").value;

    isPalindrome(userWord);
  }
)

/**
 * Crea una stringa con le lettere della stringa in input invertite
 * 
 * @param {string} word 
 * @returns {string}
 */
function reverseString(word) {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  return reverseWord;
}


/**
 * Se la parola è palindroma stampa "la parola è palindroma", altrimenti stampa "la parola NON è palindroma"
 * 
 * @param {string} word 
 */
function isPalindrome(word) {
  if (word === reverseString(word)) {
    document.querySelector(".message").innerHTML = "La parola " + word + " è palindroma";
  } else {
    document.querySelector(".message").innerHTML = "La parola " + word + " NON è palindroma";
  }
}