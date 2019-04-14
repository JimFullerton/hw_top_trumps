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
    game = new Game(deckOfCards, player1, player2);
  });

  test('the game should initialise with full deck of cards', () => {
    expect(game.deckOfCards).toBe(deckOfCards);
  });

  test('card should have a name', () => {
    expect(card1.name).toBe('Superman');
  });

  test('a card should have an intelligence rating', () => {
    expect(card2.intelligence).toBe(7);
  });

  test('a card should have a strength rating', () => {
    expect(card3.strength).toBe(6);
  });

  test('a card should have an agility rating', () => {
    expect(card6.agility).toBe(6);
  });

  test('a player should be able to accept a card', () => {
    player1.acceptCard(card5);
    expect(player1.cards[0]).toBe(card5);
  });

  test('the game should be able to deal a card from its deck', () => {
    game.dealCard(player2);
    expect(player2.cards[0]).toBe(card1);
  });

  test('a player should be able to play a card', () => {
    game.dealCard(player1);
    game.dealCard(player1);
    player1.playCard();
    expect(player1.cards.length).toBe(1);
  });

  test('the game should be able to ask a player to play a card', () => {
    game.dealCard(player2);
    expect(game.askForCard(player2)).toBe(card1);
  });

  test('a player should be able to choose a category', () => {
    game.dealCard(player2);
    expect(player2.pickCategory()).toBe("strength");
  });

  test('the game should be able to decide on a winner for a round', () => {
    game.dealCard(player1);
    game.dealCard(player2);
    expect(game.decideWinnerRound("agility")).toEqual(player1);
  });





});
