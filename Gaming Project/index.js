//selected all the 16 cards 
const cards = document.querySelectorAll(".card");//this .card is a class name 
console.log(cards);//this will give the output of nodelist-16 !

//variables
var isFlipped = false;
var firstCard;
var secondCard;

//cards are in the form of array we can traverse and access each of the array 
//adding flip to each card using add evnt listener on clicking it will flip 
cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //console.log("Card flipped");
  //console.log(this);
  this.classList.add("flip");//this is to pointing particularly to that object 
  //now checking and putting some condition over it 
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    
    checkIt();//after this calling checkit function 
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    //comparing the data-image of the firstcard and the secondcard !
    success();//calling the success function 
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);//that it may not flip as sson as it results to success 
  secondCard.removeEventListener("click", flip);
  reset();//again reseting 
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);//adding settimeout to manage and adjust the timestamp 
}

//after that adding function reset to again reset the values of three variables for the remaining cards !
function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle
//adding the shuffling function to shuffle the card 
(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);//this will shuffle the cards with various indexes in random order
    card.style.order = index;//in that order the indexes have been put upon or assign to different cards !
  });
})();
