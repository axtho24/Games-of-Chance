function Card (suit, value) {
	this.suit = suit
	this.value = value
}

Card.prototype.display = function () {
	return `${this.value} of ${this.suit}`
}

function Deck () {
  var suits = [ "Clubs", "Spades", "Hearts", "Diamonds" ]
  var values = [ "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King" ]

  var cards = []
  suits.forEach(suit => {
    values.forEach(value => {
	  Card.call(this, suit, value)
      var card = new Card(suit, value)
      cards.push(card)
    })
  })
  this.cards = cards
}

Deck.prototype = Object.create(Card.prototype)
Deck.prototype.deal = function () {
	this.dealt = []
	var cardSelector = this.cards.splice(Math.floor(Math.random()*this.cards.length), 1)[0]
	var cardSelector2 = this.cards.splice(Math.floor(Math.random()*this.cards.length), 1)[0]
	this.dealt.push(cardSelector)
	this.dealt.push(cardSelector2)
}

var deck = new Deck()


function hitme () {
deck.deal()
function Hand (player) {
	this.player = player
	this.cardInHand = deck.dealt
}

Hand.prototype.show = function () {
	return `${this.player}'s hand has ${this.cardInHand[0].display()}, and ${this.cardInHand[1].display()}`
}

var name = new Hand ($('input').val())

var showcards = $('<p>')
showcards.append(name.show())
$('#display').append(showcards)
$('input').val('')
}
