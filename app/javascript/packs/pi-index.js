// javascript for remember pi

let ANSWER = '';
let CURRENT_DIGIT = 0;

function setAnswer(){
    const ans = $('#pi-answer').text().replace(/[^0-9]/g, ''); // remove non-numeric characters
    ANSWER = ans;
}

function updateEnteredAnswer(n){
    // check if the answer is correct or not.
    if(ANSWER[CURRENT_DIGIT] === String(n)){
        // correct answer
        const current = $('#entered-answer').text();
        $('#entered-answer').text(current + n);

        CURRENT_DIGIT += 1;
        $('#current-digit').text(CURRENT_DIGIT);
    }else{
        // wrong answer
        // TODO: wrong sound
        console.log('wrong');
    }
}

function setButtons(){
    // number button
    for(let i=0;i<=9;i++){
        $(`#button-${i}`).on('click', function() {
            console.log('button is clicked' + i);
            updateEnteredAnswer(i);
        });
    }
}

$(function() {
    console.log('hello js i');
    setAnswer();
    setButtons();
});