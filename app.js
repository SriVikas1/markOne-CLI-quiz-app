var input = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#txt-output");

function translatedURL(text) {
  return "https://api.funtranslations.com/translate/minion.json" + "?text=" + text
}

function errorHandler() {
  console.log("Somethinng went wrong!!")
  alert("Sorry, something went wrong. Please investigate!!")
}

function clickHandler() {
  var inputText = input.value
  // console.log("Input text is " + inputText)
  fetch(translatedURL(inputText))
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);