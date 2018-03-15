/**
 * Write the score
 */
$(document).ready(function () {
    var mess = location.search;
    mess = mess.replace("?", " ");
    $("#score").text(mess);
});
