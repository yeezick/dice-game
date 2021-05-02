//declare random numbers
var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);

//create array of images
var imageArray = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png' , 'dice5.png', 'dice6.png']
var newImage1 = "images/" + imageArray[randomNumber1];
var newImage2 = "images/" + imageArray[randomNumber2];

// rolls dice & applies message function
function rollDice() {
  document.querySelector('.img1').setAttribute('src', newImage1);
  document.querySelector('.img2').setAttribute('src', newImage2);
  winnerMsg();
}

//messages
function winnerMsg() {
  if (imageArray[randomNumber1] > imageArray[randomNumber2]) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  } else if (imageArray[randomNumber1] < imageArray[randomNumber2]) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
  } else if (imageArray[randomNumber1] === imageArray[randomNumber2]){
    document.querySelector("h1").innerHTML = "Draw! Try again!"
  }
}
