'use strict';

//put global variables here
var score=0;
var questionNum=0;
var questionArray = [];

//create first question object

//questionOne
var questionOne = {
    text: 'Mars is home to the tallest mountain in the solar system, Olympus Mons, a shield volcano. But how tall and wide is Olympus Mons?',
    number: 1,
    answerA: '14km high and 300km wide',
    answerB: '21km high and 600km wide',
    answerC: '28km high and 900km wide',
    correct: 'B',
    correctText: 'Correct, 21km high and 600km wide - a truly massive mountain',
    errorText: 'Sorry, the correct answer is B - 21km high and 600km wide'
};

//create the remaining question objects based on questionOne

var questionTwo = Object.create(questionOne);
var questionThree = Object.create(questionOne);
var questionFour = Object.create(questionOne);
var questionFive = Object.create(questionOne);

//add content to the remaining questions objects

//questionTwo
questionTwo.text = "Our Sun looks to be a different size on Mars than it does on Earth (due to the difference in distance from the Sun of the Earth and Mars respectively). On Mars the Sun looks...";
questionTwo.number = 2;
questionTwo.answerA = "...half the size?";
questionTwo.answerB = "...twice the size?";
questionTwo.answerC = "...one quarter the size?";
questionTwo.correct = "A";
questionTwo.correctText = "Yup, the Sun looks half the size on Mars than it does on the Earth! Weird!!";
questionTwo.errorText = "No, the Sun actually looks about half the size on Mars than it does on the Earth.";

//questionThree
questionThree.text = "A Martian year (the time it takes Mars to complete one full orbit of the Sun) is considerably longer than one on Earth. How long is it?";
questionThree.number = 3;
questionThree.answerA = "451 days";
questionThree.answerB = "589 days";
questionThree.answerC = "687 days";
questionThree.correct = "C";
questionThree.correctText = "Correct, a Martian year is nearly twice as long as an Earth year!";
questionThree.errorText = "Sorry, the correct answer is 687 days, almost twice as long as an Earth year!";

//questionFour
questionFour.text = "If you were able to visit Mars you'd find the gravity there much weaker than on Earth. How much higher could you jump into the air on Mars than on Earth?";
questionFour.number = 4;
questionFour.answerA = "Three times higher";
questionFour.answerB = "Four times higher";
questionFour.answerC = "Five times higher";
questionFour.correct = "A";
questionFour.correctText = "Yes, you could leap up to three times higher due to Mars' low gravity";
questionFour.errorText = "No, that's a little over-optimistic, you could jump about three times higher.";

//questionFive
questionFive.text = "Mars is known as The Red Planet, but what chemical element abundant in the Martian soil provides this distinctive colouring?";
questionFive.number = 5;
questionFive.answerA = "Zinc";
questionFive.answerB = "Iron";
questionFive.answerC = "Boron";
questionFive.correct = "B";
questionFive.correctText = "Iron is correct, its basically rust that makes Mars red!";
questionFive.errorText = "Nope - its oxides of Iron in the soil, essentially rust, that make Mars red";

//load all questions into questionArray

questionArray.push(questionOne);
questionArray.push(questionTwo);
questionArray.push(questionThree);
questionArray.push(questionFour);
questionArray.push(questionFive);

//main body
$(document).ready(function() {
    loadContent();



    //event listeners for answer clicks here
    $('#A').click(function(){
        console.log('A clicked');
        checkAnswer('A');
    });

    $('#B').click(function(){
        console.log('B clicked');
        checkAnswer('B')
    });

    $('#C').click(function(){
        console.log('C clicked');
        checkAnswer('C');
    });





});

//put functions below here
function loadContent(){
    if (questionNum >4) {
        console.log('End of game code start here');
        $('.q-and-a h2').text("Game Over");
        $('.q-and-a p').text("Thanks for playing. You scored " + score + "!");
        $('.multiple-choice').hide();
    }
    else {
        console.log("loadContent function executing");
        console.log("loading question number: " + questionArray[questionNum].number);
        $('.multiple-choice').show();
        $('.q-and-a h2').text("Question #" + questionArray[questionNum].number);
        $('.q-and-a p').text(questionArray[questionNum].text);
        $('p#A').next().text(questionArray[questionNum].answerA);
        $('p#B').next().text(questionArray[questionNum].answerB);
        $('p#C').next().text(questionArray[questionNum].answerC);
        if (questionNum == 0) {
            $('#one').attr("class", "active");
        }
        else if (questionNum == 1) {
            $('#two').attr("class", "active");
        }
        else if (questionNum == 2) {
            $('#three').attr("class", "active");
        }
        else if (questionNum == 3) {
            $('#four').attr("class", "active");
        }
        else if (questionNum == 4) {
            $('#five').attr("class", "active");
        }
    }
}

function checkAnswer(answer) {
    if (questionArray[questionNum].correct == answer) {
        $('.q-and-a p').text(questionArray[questionNum].correctText);
        $('.multiple-choice').hide();
        score++;
    }
    else {
        $('.q-and-a p').text(questionArray[questionNum].errorText);
        $('.multiple-choice').hide();
    }
    questionNum++;
    //delay loading new content so user has time to view the message on the screen
    setTimeout(loadContent, 5000);
}
