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
    correct: 'B'
};

//create the remaining question objects based on questionOne

var questionTwo = Object.create(questionOne);
var questionThree = Object.create(questionOne);
var questionFour = Object.create(questionOne);
var questionFive = Object.create(questionOne);

//add content to the remaining questions objects

//questionTwo
questionTwo.text = "Our Sun looks to be a different size on Mars than it does on Earth (due to the difference in distance of Earth and Mars respectively from the Sun). On Mars the sun looks...";
questionTwo.number = 2;
questionTwo.answerA = "...half the size?";
questionTwo.answerB = "...twice the size?";
questionTwo.answerC = "...quarter the size?";
questionTwo.correct = "A";

//questionThree
questionThree.text = "Our Sun looks to be a different size on Mars than it does on Earth (due to the difference in distance of Earth and Mars respectively from the Sun). On Mars the sun looks...";
questionThree.number = 3;
questionThree.answerA = "...half the size?";
questionThree.answerB = "...twice the size?";
questionThree.answerC = "...quarter the size?";
questionThree.correct = "A";





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



}
