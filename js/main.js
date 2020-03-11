$(document).ready(function () {
    /* *** Navbar and side navbar elements and actions *** */

    /* Copy contents to the side navbar from the main navbar */
    let navMenu = document.querySelectorAll('.navbar-container')[0].cloneNode(true);
    let sideNavbar = document.getElementById("side-navbar");
    navMenu.classList.remove("navbar-container");
    navMenu.classList.add("side-navbar-container");
    navMenu.childNodes[1].classList.remove("navbar-item");
    navMenu.childNodes[1].classList.add("side-navbar-item");
    sideNavbar.appendChild(navMenu);


    /* Set active menu in both bars at the same time*/
    $(".navbar ul:first-of-type li a, .sidenav ul:first-of-type li a").click(function (e) {
        $(".navbar ul:first-of-type li a , .sidenav ul:first-of-type li a").removeClass('active-link');
        $(".navbar ul:first-of-type li a[name=" + "'" + e.currentTarget.name + "'" + "]").addClass('active-link');
        $(".sidenav ul:first-of-type li a[name=" + "'" + e.currentTarget.name + "'" + "]").addClass('active-link');
    });

    /* Navbar toggle button effect */
    $('#navbar-toggle-btn').click(function () {
        if (!$(this).hasClass('navbar-toggle-active')) {
            $(this).toggleClass('navbar-toggle-active');
            $(this).removeClass('navbar-toggle-inactive');
            setSideNavbar();
        } else {
            $(this).addClass('navbar-toggle-inactive');
            $(this).removeClass('navbar-toggle-active');
            setSideNavbar();
            setTimeout(function () {
                $('#navbar-toggle-btn').removeClass('navbar-toggle-inactive');
            }, 500);
        }
    });
    function setSideNavbar() {
        if ($('#navbar-toggle-btn').hasClass('navbar-toggle-active')) {
            sideNavbar.style.width = "120px";
        } else {
            sideNavbar.style.width = "0";
        }
    }
});

