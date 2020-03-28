
var randomNumber1=Math.round(Math.random()*5)+1; //random NUmber for image 1
var randomNumber2=Math.round(Math.random()*5)+1; // random number for image 2
var randomImage1="dice"+randomNumber1+".png";
var randomImage2="dice"+randomNumber2+".png";
var randomImageSource1="images/"+randomImage1;
var randomImageSource2="images/"+randomImage2;
document.querySelector(".dice .img1").setAttribute("src",randomImageSource1);
document.querySelector(".dice .img2").setAttribute("src",randomImageSource2);
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="Refresh Me";
}
