class Player {

  constructor(cards) {
    this.cards = cards;
  }

  pickCategory() {
    // code;
  }

  playCard() {
    return this.cards.shift();
  }

  acceptCard(card) {
    this.cards.push(card);
  }


}

module.exports = Player;
