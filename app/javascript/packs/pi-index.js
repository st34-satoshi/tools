// javascript for remember pi

let ANSWER = '';

function setAnswer(){
    const ans = $('#pi-answer').text().replace(/[^0-9]/g, ''); // remove non-numeric characters
    ANSWER = ans;
}

$(function() {
    console.log('hello js');
    setAnswer();
});