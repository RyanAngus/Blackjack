
let player = {
    name: "Ryan",
    chips: 500
};
let cards = [ ];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

function startGame() {
    
    playerEl.textContent = ` ${player.name}: $${player.chips} `; 
    isAlive = true; 
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard ;

    runGame();
};

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1;

    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
};

function runGame() {

    sumEl.textContent = "Sum: " + sum;
    
    cardsEl.textContent = `Cards: `;
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += ` ${cards[i]} `
    };
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You Lose!"
        isAlive = false
    }
    messageEl.textContent = message
};

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        messageEl.textContent = `Drawing a new card from the deck!`;

        let card = getRandomCard();
    
        sum += card; 
    
        cards.push(card);
    
        runGame();

    }


};

