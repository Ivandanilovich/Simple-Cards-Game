/**
 * Function of starting the game
 */
function startGame() {
    openAll();
    setTimeout(function () {
        closeAll();
    }, 5000);
}

/**
 * Open the card
 * @param id card's id
 */
function openCard(id) {
    var s_id = "#" + id;
    $(s_id).css("width", "113px");
    $(s_id).css("height", "157px");
    $(s_id).css("transform", "rotate3d(0.8,0.8,0.0,-70deg)");
    setTimeout(function () {
        $(s_id).attr("src", "resources/cards/" + findInCards(id).name);
        $(s_id).css("transform", "rotate3d(0,0,0.0,70deg)");
    }, 100);
    $(s_id).attr("data-tid", "Card-flipped");
    $(s_id).css("cursor", "default");
    isAvalible[id] = false;
    cardSound.play();
}

/**
 * Close the card
 * @param id card's id
 */
function closeCard(id) {
    var s_id = "#" + id;
    $(s_id).css("width", "113px");
    $(s_id).css("height", "157px");
    $(s_id).css("transform", "rotate3d(0.8,0.8,0.0,-70deg)");
    setTimeout(function () {
        $(s_id).attr("src", "resources/cards/DEF.png");
        $(s_id).css("transform", "rotate3d(0.0,0.0,0.0,70deg)");
    }, 100);
    $(s_id).attr("data-tid", "Card");
    $(s_id).css("cursor", "pointer");
    isAvalible[id] = true;
    cardSound.play();
}

/**
 * Destroy the card
 * @param id card's id
 */
function destroyCard(id) {
    var s_id = "#" + id;
    $(s_id).css("opacity", "0");
    $(s_id).css("transform", "translateX(-10px) translateY(-40px)");
    delSound.play();
    setTimeout(function () {
        $(s_id).detach();
    }, 100);
    isAvalible[id] = false;
}

/**
 * Open all cards
 */
function openAll() {
    for (var i = 0; i < 18; i++) {
        openCard(i);
    }
}

/**
 * Close all cards
 */
function closeAll() {
    for (var i = 0; i < 18; i++) {
        closeCard(i);
    }
}

/**
 * Find card by index
 * @param index card's index
 * @returns {*} card
 */
function findInCards(index) {
    for (var i = 0; i < 9; i++) {
        if (index == cards[i].pos1 || index == cards[i].pos2) {
            return cards[i];
        }
    }
}