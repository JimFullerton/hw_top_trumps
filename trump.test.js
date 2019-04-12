const Game = require('./game')
const Card = require('./card')
const Player = require('./player')

describe('Trumps', () => {

  let game;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let player1;
  let player2;

  beforeEach(() => {
    player1 = new Player([]);
    player2 = new Player([]);
    card1 = new Card('Superman', 6, 9, 7);
    card2 = new Card('Scarlet Witch', 7, 10, 5);
    card3 = new Card('Black Widow', 8, 6, 9);
    card4 = new Card('The Flash', 7, 4, 10);
    card5 = new Card('Wonder Woman', 8, 7, 5);
    card6 = new Card('Batman', 10, 5, 6);
    deckOfCards = [card1, card2, card3, card4, card5, card6];
    game = new Game(deckOfCards);
  });

  test('game should initialise with full deck of cards', () => {
    expect(game.deckOfCards).toBe(deckOfCards);
  });


});
