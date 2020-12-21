$(document).ready(function() {

    $("#right-list").click(function() {
        $("#left-list").css("background-color", "#ffffff");
        $("#l-item-list").hide();
        $("#right-list").css("background-color", "#efefef");
        $("#r-item-list").show();
    });

    $("#left-list").click(function() {
        $("#right-list").css("background-color", "#ffffff");
        $("#r-item-list").hide();
        $("#left-list").css("background-color", "#efefef");
        $("#l-item-list").show();
    });

    $("#open-menu-responsive").click(function() {

        $("#menu-responsive").toggle();

    });

    $("#lightslider").lightSlider({
        item: 1,
        loop: true,
        auto: true,
        speed: 1500,
        pauseOnHover: true,
        controls: false,
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