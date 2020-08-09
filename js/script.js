// // Preloader
// $(window).on('load', function () {
//     $("#preloader").delay(600).fadeOut();
// });

//change menu color
const menuPage=document.querySelector('#menuPage');
if(menuPage===null){
    window.onscroll = function() {
        "use strict";
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("nav").classList.add("scroll");
            document.querySelector('.logo').classList.add("scroll");
        }
        else {
            document.getElementById("nav").classList.remove("scroll");
            document.querySelector('.logo').classList.remove("scroll");
        }

        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.getElementById("back-to-top").style.display = "block";
        }
        else {
            document.getElementById("back-to-top").style.display = "none";
        }
    };
}
else {
    document.getElementById("nav").classList.add("scroll");
}

//change svg hm menu
$(document).ready(function () {
    const temp = document.getElementsByClassName("navbar-toggler");
    $(temp).click(function () {
        if ((document.getElementById("bar").style.display) == "none") {
            document.getElementById("bar").style.display = "inline-block";
            document.getElementById("times").style.display = "none";
        }
        else {
            document.getElementById("times").style.display = "inline-block";
            document.getElementById("bar").style.display = "none";
        }
    })
});

//animation for going to a ID
$("#nav .nav-item [href^='#']").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 600);
});

//animation for going to the top
$('#back-to-top').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
});

//initialiaze gallery
const gallery = document.querySelector('.tz-gallery');
if(gallery !== null) {
    baguetteBox.run('.tz-gallery');
}

//animation menu
const menuButton = document.querySelectorAll('.btn-light')
menuButton.forEach((button) => {
    button.addEventListener('click', (e)=> {
        e.preventDefault()
        const btn =button.id;
        const view = document.getElementById(btn);
        view.scrollIntoView(true);
    })

})

// solving IOS problem
function closeGallery() {
    document.body.style.height = '100%';
    document.body.style.position = 'unset';
    document.body.style.top = '0';
    document.getElementById("nav").style.display = "flex";
    document.getElementById('gallery').scrollIntoView(true);//ok
}

$(document).ready(() => {
    scroll = window.pageYOffset;
    $(".lightbox").click(function () {
        document.body.style.height = '100%';
        document.body.style.position = 'fixed';
        document.body.style.top = '100%';
        document.getElementById("nav").style.display="none";
        // se clicco gli spazi vuoti
        $(document).click(() => {
            closeGallery();
        })
    })

    $("#close-button").click(() => {
        closeGallery();
    });
    $(document).click((e) => { // keyup
        if (e.key === "Escape") { // escape key maps to keycode `27`
            closeGallery();
        }
    });
});
