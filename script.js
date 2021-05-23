var btntextInput = document.querySelector('#textInput');
var btnTranslate = document.querySelector('#translateBtn');
var btntextOutput = document.querySelector('#textOutput');

var translatorAPI = 'https://api.funtranslations.com/translate/minion.json';

function getTranslatedURL(text){
    return translatorAPI + "?text=" + text;
}
function errorHandler(error){
    console.log('Error occured', error);
}
function clickHandler(){
    var textInput = btntextInput.value;
    //call server for processing
    fetch(getTranslatedURL(textInput))
    .then(response => response.json())
    .then(data => btntextOutput.innerText= data.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener('click', clickHandler);
