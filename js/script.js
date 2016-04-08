'use strict';

//put global variables here
var score=0;
var questionNum=3;
var questionArray = [];

//create first question object

//questionOne
var questionOne = {
    text: 'Mars is home to the tallest mountain in the solar system, Olympus Mons, a shield volcano. But how tall and wide is Olympus Mons?',
    number: 1,
    answerA: '14km high and 300km wide',
    answerB: '21km high and 600km wide',
    answerC: '28km high and 900km wide',
    correct: 'B'
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

//questionThree
questionThree.text = "A Martian year (the time it takes Mars to complete one full orbit of the Sun) is considerably longer than one on Earth. How long is it?";
questionThree.number = 3;
questionThree.answerA = "451 days";
questionThree.answerB = "589 days";
questionThree.answerC = "687 days";
questionThree.correct = "C";

//questionFour
questionFour.text = "If you were able to visit Mars you'd find the gravity there much weaker than on Earth. How much higher could you jump into the air on Mars than on Earth?";
questionFour.number = 4;
questionFour.answerA = "Three times higher";
questionFour.answerB = "Four times higher";
questionFour.answerC = "Five times higher";
questionFour.correct = "A";

//questionFive
questionFive.text = "Mars is known as The Red Planet, but what chemical element abundant in the Martian soil provides this distinctive colouring?";
questionFive.number = 5;
questionFive.answerA = "Zinc";
questionFive.answerB = "Iron";
questionFive.answerC = "Boron";
questionFive.correct = "B";

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
    });

    $('#B').click(function(){
        console.log('B clicked');
    });

    $('#C').click(function(){
        console.log('C clicked');
    });





});

//put functions below here
function loadContent(){
    console.log("loadContent function executing");
    console.log("loading question number: " + questionArray[questionNum].number);
    $('.q-and-a h2').text("Question #" + questionArray[questionNum].number);
    $('.q-and-a p').text(questionArray[questionNum].text);
    $('p#A').next().text(questionArray[questionNum].answerA);
    $('p#B').next().text(questionArray[questionNum].answerB);
    $('p#C').next().text(questionArray[questionNum].answerC);
    if (questionNum == 0){
        $('#one').attr("class", "active");
    }
    else if (questionNum ==1){
        $('#two').attr("class", "active");
    }
    else if (questionNum ==2){
        $('#three').attr("class", "active");
    }
    else if (questionNum ==3){
        $('#four').attr("class", "active");
    }
    else if (questionNum ==4){
        $('#five').attr("class", "active");
    }


}
