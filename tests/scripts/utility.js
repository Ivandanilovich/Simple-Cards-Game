/**
 * Entry point
 */
$(document).ready(function () {
    testIt();
    makeConclusions();
});

/**
 * Global var
 */
var passedCount = 0;
var totalCount = 0;
var failedCount = 0;

/**
 * validation, refresh counter
 * @param val value
 * @returns {boolean} true if val==true
 */
function isT(val) {
    totalCount++;
    if (val) {
        passedCount++;
        return true;
    }
    failedCount++;
    return false;
}

/**
 * equality test, refresh counter
 * @param val1 value1
 * @param val2 value2
 * @returns {boolean} true if val1==val2
 */
function isE(val1, val2) {
    totalCount++;
    if (val1 == val2) {
        passedCount++;
        return true;
    }
    failedCount++;
    return false;
}

/**
 * equality test
 * @param val1 value1
 * @param val2 value2
 * @param message message to display
 */
function testE(val1, val2, message) {
    var r = isE(val1, val2);
    $('<tr>', {id: totalCount}).appendTo('#tests');
    $('<td>', {id: totalCount + 'd'}).appendTo('#' + totalCount);
    $('<td>', {id: totalCount + 'd', text: totalCount}).appendTo('#' + totalCount);
    $('<td>', {id: totalCount + 'd', text: message}).appendTo('#' + totalCount);
    if (r) {
        $('<p>', {class: 'Gsquare'}).appendTo('#' + totalCount + 'd');
    } else {
        $('<p>', {class: 'Rsquare'}).appendTo('#' + totalCount + 'd');
    }
}

/**
 * validation
 * @param val value
 * @param message message to display
 */
function testTrue(val, message) {
    var r = isT(val);
    $('<tr>', {id: totalCount}).appendTo('#tests');
    $('<td>', {id: totalCount + 'd'}).appendTo('#' + totalCount);
    $('<td>', {id: totalCount + 'd', text: totalCount}).appendTo('#' + totalCount);
    $('<td>', {id: totalCount + 'd', text: message}).appendTo('#' + totalCount);
    if (r) {
        $('<p>', {class: 'Gsquare'}).appendTo('#' + totalCount + 'd');
    } else {
        $('<p>', {class: 'Rsquare'}).appendTo('#' + totalCount + 'd');
    }
}

/**
 * final functoin
 */
function makeConclusions() {
    $('#total').text(totalCount);
    $('#passed').text(passedCount);
    $('#failed').text(failedCount);
    if (failedCount == 0) {
        $('h3').text("All tests passed");
        $("#main").css("background-color", "#ACFFA8");
    } else {
        $('h3').text("Some problem...");
        $("#main").css("background-color", "#F7BBBB");
    }
}

/**
 *
 * @param array check
 * @param len length of array
 * @returns {boolean} true if all is ok
 */
function checkArray(arr, len) {
    if (arr.length == len && isDuplicate(arr)) {
        return true;
    }
    return false;
}

/**
 * Check duplicate in the array
 * @param a array
 * @returns {boolean} true if there are no duplicate
 */
function isDuplicate(a) {
    for (var j = 0; j < a.length; j++) {
        for (var i = j + 1; i < a.length; i++) {
            if (a[j] == a[i]) return false;
        }
    }
    return true;
}