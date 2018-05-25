function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

Card.prototype.getURL = function () {
    let letter = this.suit[0].toUpperCase();
    let url = "../images/blackjack/".concat(this.point.toString(), letter, ".jpg");
    return url;
};

function Hand() {
    this.cards = [];
};

Hand.prototype.addCard = function (card) {
    this.cards.push(card);
}

Hand.prototype.getPoints = function () {
    let sum = 0;
    this.cards.forEach(function (e) {
        if (e.point > 10) {
            sum += 10;
        } else {
            sum += e.point;
        };
    })
    return sum;
}

Hand.prototype.bust = function () {
    return this.getPoints() > 21;
};

function Deck() {
    this.cards = [];
    this.createDeck();
}

Deck.prototype.createDeck = function () {
    for (points = 1; points <= 13; points++) {
        this.cards.push(new Card(points, "hearts"));
        this.cards.push(new Card(points, "diamonds"));
        this.cards.push(new Card(points, "spades"));
        this.cards.push(new Card(points, "clubs"));
    };
}

Deck.prototype.draw = function () {
    return this.cards.pop();
}

Deck.prototype.cardsLeft = function () {
    return this.cards.length;
}

Deck.prototype.shuffle = function () {
    let newArray = [];
    let tempArray = this.cards.slice();
    while (tempArray.length !== 0) {
        let roll = Math.floor(Math.random() * tempArray.length);
        newArray.push(tempArray[roll]);
        tempArray.splice(roll, 1);
    }
    this.cards = newArray;
}

Deck.prototype.restock = function () {
    if (this.cards.length == 1) {
        this.createDeck();
        this.shuffle();
    };
};

function clearTable() {
    $("#dealer-hand").empty();
    $("#player-hand").empty();;
    $("#dealer-points").empty();;
    $("#player-points").empty();;
    $("#messages").empty();
    $("#deal-button").empty().append("Play");
};

function render(cardURL, hand) {
    $("<img>", {
        "src": cardURL,
        "class": "card"
    }).appendTo($(hand));
};


function dealMe(dealer, player, deck) {
    // deal two cards each to the player and dealer if haven't already
    // deal the dealer first card face down
    dealer.addCard(deck.draw());
    $("<img>", {
        "src": "../images/blackjack/blue_back.jpg",
        "class": "dealer-temp-card"
    }).appendTo($("#dealer-hand"));

    deck.restock();

    let dealerCard2 = deck.draw();
    dealer.addCard(dealerCard2);
    render(dealerCard2.getURL(), "#dealer-hand");

    deck.restock();

    let playerCard1 = deck.draw();
    player.addCard(playerCard1);
    render(playerCard1.getURL(), "#player-hand");

    deck.restock();

    let playerCard2 = deck.draw();
    player.addCard(playerCard2);
    render(playerCard2.getURL(), "#player-hand");

    deck.restock();

    // display player points
    $("#player-points").append(player.getPoints());
};

function hitMe(player, deck) {
    // deal one card to the player when they click the "hit me" button
    let playerCard1 = deck.draw();
    player.addCard(playerCard1);
    render(playerCard1.getURL(), "#player-hand");
    $("#player-points").empty().append(player.getPoints());
    deck.restock();
};

function stay(dealer, deck) {
    // deal cards to the dealer until dealer points reach 17
    while (dealer.getPoints() < 17) {
        let dealerCard2 = deck.draw();
        dealer.addCard(dealerCard2);
        render(dealerCard2.getURL(), "#dealer-hand");
        deck.restock();
    };
};

function end(dealer, player, wins) {

    $("#deal-button").empty().append("Restart");

    // flip dealer hole card
    let newURL = dealer.cards[0].getURL();
    $(".dealer-temp-card").attr("src", newURL);

    $("#player-points").empty().append(player.getPoints());
    $("#dealer-points").append(dealer.getPoints());

    if ((dealer.bust() && player.bust()) || (dealer.getPoints() == 21 && player.getPoints() == 21)) {
        $("#messages").empty().append("It's a draw.");
    } else if (player.getPoints() == 21 || (dealer.bust() && player.getPoints() < 21) || (dealer.getPoints() < 21 && player.getPoints() < 21 && player.getPoints() > dealer.getPoints())) {
        wins++;
        $("#messages").empty().append("Player wins.");
    } else if (dealer.getPoints() == 21 || (player.bust() && dealer.getPoints() < 21) || (player.getPoints() < 21 && dealer.getPoints() < 21 && dealer.getPoints() > player.getPoints())) {
        $("#messages").empty().append("Dealer wins.");
    };

    $("#wins-button").empty().append(wins);

    return wins;
};

function playBlackjack() {

    var deck = new Deck();
    deck.shuffle();

    var player = new Hand();
    var dealer = new Hand();

    var stand = false;
    var deal = false;
    var wins = 0;
    var endGame = false;

    $("#deal-button").click(function () {
        if (deal == false && endGame == false) {
            dealMe(dealer, player, deck);
            deal = true;
            if (player.bust()) {
                wins = end(dealer, player, wins);
                endGame = true;
            };
        } else if (endGame == true) {
            clearTable();
            stand = false;
            deal = false;
            endGame = false;
            dealer = new Hand();
            player = new Hand();
        };
    });

    $("#hit-button").click(function () {
        if (deal == true && player.bust() == false && stand == false) {
            hitMe(player, deck);
            if (player.bust() == true) {
                stand = true;
                wins = end(dealer, player, wins);
                endGame = true;
            };
        };
    });

    $("#stand-button").click(function () {
        if (deal == true && stand == false) {
            stay(dealer, deck);
            stand = true;
            wins = end(dealer, player, wins);
            endGame = true;
        };
    });
};


playBlackjack();