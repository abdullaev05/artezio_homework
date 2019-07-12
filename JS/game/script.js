const cards = document.querySelectorAll('.card');
let flipped = false;
let notFliped = true;
let firstCard, secondCard;

function flipCard(){
 if(this === firstCard) return;
 this.classList.add('flip');
 if (!flipped){
  flipped = true;
  firstCard = this;
  return;
 }
 secondCard = this;
 flipped = false;
 
 matchCards();
};

function matchCards(){
 if (firstCard.dataset.info === secondCard.dataset.info){
  console.log(this.firstCard, this.secondCard);
  deleteCard.call(firstCard);
  deleteCard.call(secondCard);
  }
  else{
   unflipCards();
  }

 }
cards.forEach(card => card.addEventListener('click', flipCard));


function deleteCard(){
 console.log(this);setTimeout(() => {
 this.classList.add('hidden');
}, 1000);
} 

function unflipCards(){
 let first = firstCard;
 let second = secondCard;
 setTimeout(() => {
  first.classList.remove('flip');
  second.classList.remove('flip');
}, 1000);
}