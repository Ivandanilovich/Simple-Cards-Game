/**
 * Initialization of all parameters
 */
function initialize() {
    counter = 9;
    var num = getRandomNfromM(9, 52);
    cards = initCards();
    for (var i = 0; i < 9; i++) {
        cards[i].name = indexToCard(num[i]);
    }
    // console.log(cards);
    cardSound = new Audio();
    cardSound.src = "resources/sounds/cardSound.wav";
    delSound = new Audio();
    delSound.src = "resources/sounds/delSound.wav";
}

/**
 * Convert card's index to name of card's file
 * @param i card's index
 * @returns {string} name of card's file
 */
function indexToCard(i) {
    var suit;
    var rank;
    switch (i % 13) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            rank = i % 13 + 2;
            break;
        case 8:
            rank = 0;
            break;
        case 9:
            rank = "J";
            break;
        case 10:
            rank = "Q";
            break;
        case 11:
            rank = "K";
            break;
        case 12:
            rank = "A";
            break;
    }
    switch (Math.floor(i / 13)) {
        case 0:
            suit = "C";
            break;
        case 1:
            suit = "S";
            break;
        case 2:
            suit = "D";
            break;
        case 3:
            suit = "H";
            break;
    }
    return rank + suit + ".png";
}

/**
 * Generates an array of random unique integers
 * @param N amount of integers
 * @param M upper bound
 * @returns {any[]}
 */
function getRandomNfromM(N, M) {
    var a = new Array();
    var s = new Array();
    for (var i = 0; i < M; i++) {
        a[i] = i;
    }
    var size = M;
    for (var i = 0; i < N; i++) {
        var index = getRandomInt(size);
        s[i] = a[index];
        for (var j = index + 1; j < size; j++) {
            a[j - 1] = a[j];
        }
        size--;
    }
    return s;
}

/**
 * Initializes random card positions
 * @returns {any[]} cards array
 */
function initCards() {
    var a = new Array();
    var s = new Array();
    for (var i = 0; i < 18; i++) {
        a[i] = i;
    }
    var size = 18;
    for (var i = 0; i < 9; i++) {
        var index = getRandomInt(size);
        s[i] = new Card(i);
        s[i].pos1 = a[index];
        for (var j = index + 1; j < size; j++) {
            a[j - 1] = a[j];
        }
        size--;
    }
    for (var i = 9; i < 18; i++) {
        var index = getRandomInt(size);
        s[i % 9].pos2 = a[index];
        for (var j = index + 1; j < size; j++) {
            a[j - 1] = a[j];
        }
        size--;
    }
    return s;
}

/**
 * Returns a random integer value from 0 to max
 * @param max upper bound
 * @returns {number} random value
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}