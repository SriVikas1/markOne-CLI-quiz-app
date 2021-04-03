//readline to interact with user via a console
var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;

//include all the questions 
var quizQues = [{
  question: "Do I love to interact? ",
  answer: true
},
{
  question: "Do I love Adventure Sports? ",
  answer: true
},
{
  question: "Can I paint? ",
  answer: false
},
{
  question: "Do I love to cook? ",
  answer: false
},
{
  question: "Am I Atheist? ",
  answer: true
},
{
  question: "What am I best at?",
  answer: 1,
  options: ["Organizing Events", "Writing", "Coding","Smart"]
},
{
  question: "What is my favorite location for trips?",
  answer: 1,
  options: ["Kheerganga Manali", "Goa", "Thailand"]
},
{
  question:"How are my people skills?",
  answer: 2,
  options:["Awesome","Average","Unsocial"]
},
{
  question: "How do you rate me on emotional level? ",
  answer: 2,
  options:["Too Emotional","Emotional","Not so Emotional"]
},
{
  question: "Who is my favorite writer? ",
  answer: 2,
  options:["Dan Brown","Paulo Coelho","SadhGuru"]
},
{
  question: "How many pets did I had? ",
  answer: 2,
  options:["One","Two","No pets"]
},
{
  question: "Who is my favorite singer? ",
  answer: 2,
  options:["Anuv Jain","Lucky Ali","Sonu Nigam"]
},
{
  question:"Who is my favourite superhero?",
  answer: 2,
  options:["Iron Man","Batman","Captain America","Spiderman"]
},
{
  question:"What is my best habit?",
  answer: 1,
  options:["Honesty","Compassion","Emotional Competency"]
},
{
  question:"What do I do when I am completely free?",
  answer: 2,
  options:["Meditate","Read Spiritual Books","Youtube Marathon"]
}]

//function block
function playQuiz(obj, i)
{
  console.log(chalk.red("Question " + (i+1) + " is :- "));
  if(i<5)
  {
    var userAnswer = readlineSync.keyInYNStrict(obj.question);
    console.log("You entered : " + (userAnswer? "Yes":"No"));
    console.log("Correct answer : "+obj.answer);
    if(userAnswer === obj.answer)
    {
            score++;
      console.log("Curretn score is " + score );
      console.log("\n");
    }else{
      console.log("Curretn score is " + score );
      console.log("\n");
    }
  }else{
    console.log(obj.question);
    var userAnswer=readlineSync.keyInSelect(obj.options,"Choose:-",{cancel: false});
    console.log("You entered : "+(userAnswer+1));
    console.log("Correct answer : "+(obj.options[obj.answer-1]));
    if((userAnswer+1)===obj.answer){
    score++;
      console.log("Curretn score is " + score );
      console.log("\n");
    }
    else{
      console.log("Curretn score is " + score );
      console.log("\n");
    }
  }
}




var userName = readlineSync.question(chalk.bold.bgMagenta("What is your name? \n\n"));

console.log("\n------------------------------------------------------------");
console.log("------------------------------------------------------------");
console.log("Welcome " + chalk.red(userName) + "! to the, " + chalk.green('"How well do you know me quiz?"'));
console.log("------------------------------------------------------------");
console.log("------------------------------------------------------------\n");
console.log(chalk.cyan("*********This quiz will be divided in three sections*********\n"));
console.log(chalk.italic.yellow("Section One: \n\n\t This Section will have 5 questions of Yes/No Type.\n\t If you answer 4 correctly you will be directed to next section.\n  \nSection Two: \n\n\t This section will have 10 questions of Multiple Choice.\n\t If you answer 8 correctly you will be directed to next section.\n \nSection Three: \n\n\t This section will have 5 questions of Personality Traits.\n\t If you answer 4 correctly, you really know me Well!!\n"));



//loop and calling the function

for(i = 0; i < 5; i++){
playQuiz(quizQues[i],i)
}
if(score>=4)
{
  console.log("Welcome to level 2");
  for(i=5;i<15;i++){
  playQuiz(quizQues[i],i);
  }
  }else{
    console.log("Sorry");
    process.exit();
  }

if(score>=12)
{
  console.log("Welcome to level 3");
  for(i=15;i<20;i++){
    playQuiz(quizQues[i],i);
  }
}else{
  console.log("Sorry");
  process.exit();
}
if(i!=20)
{
  console.log("Reached Out of Limit")
}