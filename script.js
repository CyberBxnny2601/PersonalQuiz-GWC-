/*Add your JavaScript here*/
var harryScore = 0;
var voldemortScore = 0;
var questionCount = 0;
var result = document.getElementById("result");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
q1a1.addEventListener("click" , Harry);
q1a2.addEventListener("click" , Voldemort);
q2a1.addEventListener("click" , Voldemort);
q2a2.addEventListener("click", Harry);
q3a1.addEventListener("click", Voldemort);
q3a2.addEventListener("click", Harry);
result.addEventListener("click", restart);
function Harry(){
  harryScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "harryScore = " + harryScore);
  if (questionCount == 3){
    console.log("The quiz is done!")
    updateResult();
  }
}
function Voldemort(){
  voldemortScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "voldemortScore = " + voldemortScore);
  if (questionCount == 3){
    console.log("The quiz is done!")
    updateResult();
  }
}

function updateResult(){
  if (harryScore >= 2){
    result.innerHTML = "You are on Harry’s side - congrats you will fight on the side of good, your bravery and intelligence shines through!";
    console.log("You are on Harry’s side - congrats you will fight on the side of good, your bravery and intelligence shines through!");
  } else if (voldemortScore >= 2){
    result.innerHTML = "You are on Voldemort’s side - congrats you will fight on the side of evil, your bravery and intelligence shines through!";
    console.log("You are on Voldemort’s side - congrats you will fight on the side of evil, your bravery and intelligence shines through!");
  }
}

function restart(){
  result.innerHTML = "Your result is...";
  consolde.log("Your result is...");
  harryScore == 0;
  voldemortScore == 0;
  questionCount == 0;
}