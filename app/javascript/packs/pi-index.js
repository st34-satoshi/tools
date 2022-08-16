// javascript for remember pi

let ANSWER = '';
let CURRENT_DIGIT = 0;

const WrongAudio = new Audio();
WrongAudio.src = 'remember-pi/Quiz-Wrong.mp3';

function setAnswer(){
    const ans = $('#pi-answer').text().replace(/[^0-9]/g, ''); // remove non-numeric characters
    ANSWER = ans;
}

function wrongSound(){
    WrongAudio.play();
}

function updateCurrentDigit(d){
    CURRENT_DIGIT = d;
    $('#current-digit').text(CURRENT_DIGIT);
}

function updateEnteredAnswer(n){
    // check if the answer is correct or not.
    if(ANSWER[CURRENT_DIGIT] === String(n)){
        // correct answer
        const current = $('#entered-answer').html();
        $('#entered-answer').html(current + n);

        updateCurrentDigit(CURRENT_DIGIT + 1);
    }else{
        // wrong answer
        wrongSound();
    }
}

function addEnteredAnser(type){
    const current = $('#entered-answer').html();
    if(type === 'newLine'){
        $('#entered-answer').html(current + '<br>');
    }else if(type === 'space'){
        $('#entered-answer').html(current + '&ensp;');
    }
}

function resetEnteredAnswer(from_number){
    const a = ANSWER.slice(0, from_number);
    let html = '';
    for(let i=0;i<a.length;i++){
        html += a[i];
        if(i % 30 === 29){
            html += '<br>'
        }
    }
    $('#entered-answer').html(html);
    updateCurrentDigit(from_number);
}

function setButtons(){
    // number button
    for(let i=0;i<=9;i++){
        $(`#button-${i}`).on('click', function() {
            updateEnteredAnswer(i);
        });
    }
    $('#button-new-line').on('click', function() {
        addEnteredAnser('newLine');
    });
    $('#button-space').on('click', function() {
        addEnteredAnser('space');
    });

    // start from button
    $('#start-from-update-button').on('click', function() {
        const from = $('#start-from-id').val();
        resetEnteredAnswer(Number(from));
    });
}

$(function() {
    setAnswer();
    setButtons();
});