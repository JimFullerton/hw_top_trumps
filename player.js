class Player {

  constructor(cards) {
    this.cards = cards;
  }

  pickCategory() {
  /* this is a kludge */

    let bestRating = 0;
    let category = null;
    if (this.cards[0].intelligence > bestRating) {
      bestRating = this.cards[0].intelligence;
      category = "intelligence";
    }
      if (this.cards[0].strength > bestRating) {
        bestRating = this.cards[0].strength;
        category = "strength";
      } else {
        bestRating = this.cards[0].agility;
        category = "agility";
      }
    return category
  }

  playCard() {
    return this.cards.shift();
  }

  acceptCard(card) {
    this.cards.push(card);
  }


}

module.exports = Player;
