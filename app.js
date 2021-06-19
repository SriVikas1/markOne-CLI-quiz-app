var btnTranslate =  document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json?text=Hello%2C%20I%20am%20hungry%21"

function getTranslationURL(input) {
  return serverURL + "?" + "text" + input
}

function errorHandler(error){
  console.log("Error occured", error);
  alert("Something wrong with server! try again after sometime")
}

function clickHandler(){
var inputText = textInput.value;

fetch(getTranslationURL(inputText))
  .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
  })
  .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler);