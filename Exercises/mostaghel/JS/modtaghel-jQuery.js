$(document).ready(function() {



    $("#lightslider").lightSlider({
        item: 1,
        keypress: true,
    });



    $(".second-bottom-list").slimScroll({
        height: '700px',
        size: '5px',
        position: 'right',
        color: '#952328',
        // alwaysVisible: true,
        railVisible: true,
        railColor: '#222',
        railOpacity: 0.3,
        // wheelStep: 10,
        allowPageScroll: true,
        disableFadeOut: true
    });
});