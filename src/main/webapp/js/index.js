$(function() {

    var INFO_MESSAGES = {
        '1' : "Successfully registered user. You can login now with that user."
    };

    var msg = $.url().param('msg');
    var infoMessage = INFO_MESSAGES[msg];
    var infoMessageElem = $('#info_message');
    if (infoMessage) {
        infoMessageElem.addClass('alert').addClass('alert-success').html(infoMessage);
    } else {
        infoMessageElem.removeClass('alert').removeClass('alert-success');
    }
});