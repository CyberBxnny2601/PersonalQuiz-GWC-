/*Add your JavaScript here*/
var dogScore = 0;
var catScore = 0;
var questionCount = 0;
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var button = document.getElementById("");
q1a1.addEventListener(“click”, Harry);
q1a2.addEventListener(“click”, Voldemort);
q2a1.addEventListener(“click”, Voldemort);
q2a2.addEventListener(“click”, Harry);
q3a1.addEventListener(“click”, Voldemort);
q3a2.addEventListener(“click”, Harry);
function Harry(){
  harryScore+=1;
  questionCount+=1;
  console.log("questionCount = " + questionCount + "harryScore = " + harryScore);
}
function Voldemort(){
  voldemortScore+=1;
  questionCount+=1;
  console.log("questionCount = " + questionCount + "voldemortScore = " + voldemortScore);
}
if (questionCount == 3){
  console.log("The quiz is done!")
}
if (harryScore > voldemortScore){
  console.log("You are on Harry's Side! Congrats, you will fight on the side of good, your bravery and intelligence shines through!");
} else if {
  console.log("You are on Voldemort's Side! Congrats, you will fight on the side of evil, your evilness and lust for power are very apparent. ");
}