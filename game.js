class Game {

  constructor(deckOfCards) {
    this.deckOfCards = deckOfCards;
  }

  dealCard(player) {
    player.acceptCard(this.deckOfCards.shift());
  }


}

module.exports = Game;
