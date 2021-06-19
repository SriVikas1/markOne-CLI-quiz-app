var btnTranslate =  document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");

function clickHandler(){
  console.log("Clicked");
  console.log(textInput.value);
}

btnTranslate.addEventListener("click", clickHandler);