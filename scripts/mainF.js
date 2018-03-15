/**
 * Main loop of the game
 */
function mainF() {
    var isFirst = false;
    var prevId;
    var prevCard;
    var destroy;
    var totalBlock = false;
    var flag = false;
    $(".card").mousedown(function () {
        flag = true;
    });
    $(".card").mouseup(function (event) {
        if (flag) {
            var id = event.currentTarget.id;
            var curCard = findInCards(id);
            if (totalBlock || !isAvalible[id]) {
                return;
            }
            isFirst = !isFirst;
            if (isFirst) {
                openCard(id);
                prevCard = curCard;
                prevId = id;
            } else {
                totalBlock = true;
                openCard(id);
                if (curCard.name == prevCard.name) {
                    destroy = true;
                } else {
                    destroy = false;
                }
                setTimeout(function () {
                    totalBlock = false;
                    act(id, prevId, destroy);
                }, 500);
            }
            flag = false;
        }
    });
}

/**
 * Destroy or close the cards
 * @param id card's id
 * @param prevId card's id
 * @param destroy flag
 */
function act(id, prevId, destroy) {
    if (destroy) {
        destroyCard(id);
        destroyCard(prevId);
        counter--;
        score += counter * K;
        if (counter == 0) {
            gameOver();
        }
    } else {
        closeCard(id);
        closeCard(prevId);
        score -= (9 - counter) * K;
    }
    if (score < 0) {
        score = 0;
    }
    $("#score").text(score);
}

/**
 * Send score to the next page
 */
function gameOver() {
    var page = "EndPage.html?" + score;
    location.href = page;
}

