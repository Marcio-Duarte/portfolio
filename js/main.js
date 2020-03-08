$(document).ready(function () {

    $(".navbar ul:first-of-type li a").click(function () {
        $(".navbar ul:first-of-type li a").removeClass('active');
        $(this).toggleClass('active');
    });

});
