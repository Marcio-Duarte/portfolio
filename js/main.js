$(document).ready(function () {

    /* var modal = document.getElementById("modal-photo"); */
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    $("#navbar-photo").click(function () {
        let modal = $('#modal-photo');
        modal.css({ "display": "flex" });

        /* $('body').css({
            overflow: 'hidden',
            height: '100%'
        }); */

        $(modal).children().click(function () {
            modal.css({ "display": "none" });
            /*  $('body').css({
                 overflow: 'scroll',
                 height: '100%'
             }); */
        });

        /*  var modal = document.getElementById("modal-photo");
         let img = $(this).children(); */
        /* $(modal).attr('display', 'flex');
        $(modal).addClass('showModal'); */
        /* modal.style.display = "flex"; */


        /* $(selector).attr(attributeName); */
        /* modal.style.display = "block";
        modalImg.src = img.attr('src');
        captionText.innerHTML = "this.alt";

        $(modal).click(function (e) {
            modal.style.display = "none";

        }); */
    });

    // Get the <span> element that closes the modal
    /* var span = document.getElementsByClassName("close")[0]; */

    // When the user clicks on <span> (x), close the modal
    /*  span.onclick = function () {
         modal.style.display = "none";
     } */


    /*  var modal = document.getElementById("myModal"); */

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    /* var img = document.getElementById("navbar-photo");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        console.log(img);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
 */








    /* *** Navbar and side navbar elements and actions *** */

    /*  $('#navbar-photo').click(function () {
         let t = $(this).clone();
         t.removeClass("rounded-border").children().removeClass("rounded-border")
         t.css({
             "position": "absolute",
             "transition": "0.6s",
             "top": "50%"
         });
 
 
     console.log(t.position);
     $('body').append(t); */
    /* $(this).css("position", "absolute").css('top', '100px'); */
    /* let t = document.getElementById("side-navbar");
    t.style.width = '200px'; */


    /*  var i = 0;
     let interval = setInterval(time, 0.1);
     function time() {
         i++
         if (i < 50) {
             t.css({
                 'top': `${i}%`,
                 'left': `${i}%`
             });
 
         } else {
             clearInterval(interval);
         }
         console.log(i);
     }
 
     time(); */

    /* }); */

    /* img.style.transform = `rotate(${i}deg)`; */


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
        if (!$(this).hasClass('burger-btn-active')) {
            $(this).toggleClass('burger-btn-active');
            $(this).removeClass('burger-btn-inactive');
            sideNavbar.style.width = "100%";
        } else {
            $(this).addClass('burger-btn-inactive');
            $(this).removeClass('burger-btn-active');
            sideNavbar.style.width = "0";
            setTimeout(function () {
                $('#navbar-toggle-btn').removeClass('burger-btn-inactive');
            }, 500);
        }
    });
});

