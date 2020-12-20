$(document).ready(function() {

    $("#open-menu-responsive").click(function() {

        $("#menu-responsive").toggle();

    });

    $("#lightslider").lightSlider({
        item: 1,
        keypress: true,
    });

    $(".second-bottom-list").slimScroll({
        height: '700px',
        size: '5px',
        position: 'right',
        color: '#952328',
        railVisible: true,
        railColor: '#222',
        railOpacity: 0.3,
        allowPageScroll: true,
        disableFadeOut: true
    });
});