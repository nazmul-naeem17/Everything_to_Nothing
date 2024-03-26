const inputString = document.getElementById("inputString");
const popBtn = document.getElementById("pop");
const output = document.getElementById("output");
let charactersArray = [];

inputString.addEventListener("input", function () {
  charactersArray = inputString.value.trim().split("");
});

popBtn.addEventListener("click", function () {
  if (charactersArray.length > 0) {
    charactersArray.shift(); // Remove the first character from the array
    const poppedWord = charactersArray.join(""); // Join the remaining characters into a word
    output.textContent = poppedWord; // Display the popped word
  } else {
    output.textContent = "No more characters to pop";
  }
});
