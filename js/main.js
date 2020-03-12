$(document).ready(function () {
    /* *** Navbar and side navbar elements and actions *** */

    $('#navbar-photo').click(function () {
        $(this).css("position", "absolute").css('top', '100px');
        /* let t = document.getElementById("side-navbar");
        t.style.width = '200px'; */
    });

    /* Copy contents from the main navbar to the side navbar */
    let sideNavbar = document.getElementById("side-navbar");
    sideNavbar.appendChild(document.querySelectorAll('.navbar-container')[0].cloneNode(true));

    /* To set the class active menu in both nav bars at the same time*/
    $("nav ul:first-of-type li a").click(function () {
        $("nav ul:first-of-type li a").removeClass('active-link');
        $(`nav ul:first-of-type li a[name=${this.name}]`).addClass('active-link');
    });

    /* Navbar toggle button effect */
    $('#navbar-toggle-btn').click(function () {
        if (!$(this).hasClass('navbar-toggle-active')) {
            $(this).toggleClass('navbar-toggle-active');
            $(this).removeClass('navbar-toggle-inactive');
            sideNavbar.style.width = "100%";
        } else {
            $(this).addClass('navbar-toggle-inactive');
            $(this).removeClass('navbar-toggle-active');
            sideNavbar.style.width = "0";
            setTimeout(function () {
                $('#navbar-toggle-btn').removeClass('navbar-toggle-inactive');
            }, 500);
        }
    });
});

