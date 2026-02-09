$(document).ready(function () {

    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var isOpen = false;

    envelope.click(function () {

        // First click → open envelope
        if (!isOpen) {
            envelope.addClass("open").removeClass("close");
            isOpen = true;
        } 
        // Second click → open new page
        else {
            window.location.href = "letter.html";
            // use window.open("letter.html", "_blank"); for new tab
        }
    });

    btn_open.click(function () {
        envelope.addClass("open").removeClass("close");
        isOpen = true;
    });

    btn_reset.click(function () {
        envelope.addClass("close").removeClass("open");
        isOpen = false;
    });

});
