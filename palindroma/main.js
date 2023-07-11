let btnCheck = document.getElementById("check-btn");

btnCheck.addEventListener("click", function () {
    const userWord = document.querySelector(".input-word").value;

    if (isPalindrome(userWord)) {
      document.querySelector(".message").innerHTML = "La parola " + userWord + " è palindroma";
    } else {
      document.querySelector(".message").innerHTML = "La parola " + userWord + " NON è palindroma";
    }
  }
)

/**
 * Crea una stringa con le lettere della stringa in input invertite. Es: "ciao"->"oaic"
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
 * Se la parola è palindroma ritorna true, altrimenti false
 * 
 * @param {string} word 
 */
function isPalindrome(word) {
  return word === reverseString(word);
}