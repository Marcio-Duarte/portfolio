$(document).ready(function () {

    /* *** Navbar elements and actions *** */
    /* Set active menu */
    $(".navbar ul:first-of-type li a").click(function () {
        $(".navbar ul:first-of-type li a").removeClass('active-link');
        $(this).toggleClass('active-link');
    });

    /* Navbar toggle button effect */
    $('#navbar-toggle-btn').click(function () {
        if (!$(this).hasClass('navbar-toggle-active')) {
            $(this).toggleClass('navbar-toggle-active');
            $(this).removeClass('navbar-toggle-inactive');
        } else {
            $(this).addClass('navbar-toggle-inactive');
            $(this).removeClass('navbar-toggle-active');
            setTimeout(function () {
                $('#navbar-toggle-btn').removeClass('navbar-toggle-inactive');
            }, 300);
        }
    });

});
