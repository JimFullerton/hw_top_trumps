class Game {

  constructor(deckOfCards, player1, player2, category) {
    this.deckOfCards = deckOfCards;
    this.player1 = player1;
    this.player2 = player2;
    this.category = category;
  }

  dealCard(player) {
    player.acceptCard(this.deckOfCards.shift());
  }

  askForCard(player) {
    return player.playCard();
  }

  decideWinnerRound(category) {
    let card1 = this.askForCard(this.player1);
    let card2 = this.askForCard(this.player2);
    if (card1.category >= card2.category) {
      return this.player1;
    } else {
      return this.player2;
    }
  }


}

module.exports = Game;
