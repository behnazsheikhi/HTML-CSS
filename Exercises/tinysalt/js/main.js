$(document).ready(function() {

    var todayFlag = false;
    var weekFlag = false;
    var monthFlag = false;

    $("#lightslider").lightSlider({
        item: 1,
        slideMove: 1,
        // loop: true,
        // auto: true,
        // speed: 1500,
        pauseOnHover: true,
        controls: true,
    });


    $("#open-menu-responsive").click(function() {

        $("#menu-responsive").toggle();

    });

    $("#today-link").css("color", '#000000');
    $("#today-link").css("text-decoration", 'underline');
    $("#week-link").css("color", '#b2b2b2');
    $("#month-link").css("color", '#b2b2b2');

    $("#today-link").hover(function() {

        $("#today-link").css("color", '#000000');
        $("#today-link").css("text-decoration", 'underline');
    });

    $("#today-link").mouseleave(function() {
        if (todayFlag != true) {
            $("#today-link").css("color", '#b2b2b2');
            $("#today-link").css("text-decoration", 'none');
        }

    });

    $("#today-link").click(function() {
        todayFlag = true;
        $('#week').hide();
        weekFlag = false;
        $('#month').hide();
        monthFlag = false;
        $('#today').show();
        $("#today-link").css("color", '#000000');
        $("#today-link").css("text-decoration", 'underline');
        $("#week-link").css("color", '#b2b2b2')
        $("#month-link").css("color", '#b2b2b2')
    });

    $("#week-link").hover(function() {

        $("#week-link").css("color", '#000000');
        $("#week-link").css("text-decoration", 'underline');
    });

    $("#week-link").mouseleave(function() {
        if (weekFlag != true) {
            $("#week-link").css("color", '#b2b2b2');
            $("#week-link").css("text-decoration", 'none');
        }
    });

    $("#week-link").click(function() {
        weekFlag = true;
        $('#today').hide();
        todayFlag = false;
        $('#month').hide();
        monthFlag = false;
        $('#week').show();
        $("#week-link").css("color", '#000000');
        $("#week-link").css("text-decoration", 'underline');
        $("#today-link").css("color", '#b2b2b2');
        $("#month-link").css("color", '#b2b2b2');
    });

    $("#month-link").hover(function() {

        $("#month-link").css("color", '#000000');
        $("#month-link").css("text-decoration", 'underline');
    });

    $("#month-link").mouseleave(function() {
        if (monthFlag != true) {
            $("#month-link").css("color", '#b2b2b2');
            $("#month-link").css("text-decoration", 'none');
        }
    });


    $("#month-link").click(function() {
        monthFlag = true;
        $('#today').hide();
        todayFlag = false;
        $('#week').hide();
        weekFlag = false;
        $('#month').show();
        $("#month-link").css("color", '#000000');
        $("#month-link").css("text-decoration", 'underline');
        $("#today-link").css("color", '#b2b2b2');
        $("#week-link").css("color", '#b2b2b2');
    });
});