$(function (){
    // Cache a target so that we do not load it every time our functions run.
    var mainRoot = $('html, body');

    $.fn.scrollTo = function() {
        mainRoot.animate({
            scrollTop: $(this).offset().top - "50"
        }, 800);
    }

    // Smooth scrolling navigation
    $("#page-home, #page-about, #page-skills, #page-projects, #page-contact, #page-explore").click(function(e){
        if(e.target.id === "page-home"){
            $('.landing-page').scrollTo();
        }   
        if(e.target.id === "page-about"){
            $('.about-page').scrollTo();
        }
        if(e.target.id === "page-skills"){
            $('.tech-page').scrollTo();
        }
        if(e.target.id === "page-projects"){
            $('.projects-page').scrollTo();
        }
        if(e.target.id === "page-contact"){
            $('.contact-page').scrollTo();
        }
        if(e.target.id === "page-explore"){
            mainRoot.animate({
                scrollTop: 700
            }, 800, function(e){
                window.location.hash = "about";
            });
        }
    })

});


// Target scrolling
$(document).scroll(function(){
    // Shrink navbar on scrolldown.
    if($(this).scrollTop() > 30){
        $(".main-nav").addClass("down");
        $(".main-nav a").addClass("text-down");
    }
    // Enlarge navbar on scrollup.
    else {
        $(".main-nav").removeClass("down");
        $(".main-nav a").removeClass("text-down");
    }

    // Show elements on scrolldown.
    if($(this).scrollTop() >= 150){
        $(".about-page p, .about-page h2, .about-page .sub-line").animate({
             opacity: 1,
        }, 1000);
    }
    if($(this).scrollTop() >= 500){
        $(".tech-page p, .tech-page h2, .tech-page .sub-line").animate({
            opacity: 1,
       }, 1000);
    }

    // ICONS FIRST ROW
    if($(this).scrollTop() >= 700){
        $(".icon-row-1 .tech-item").animate({
            opacity: 1,
            "bottom": "0",
       }, 500);
    }
    // ICONS SECOND ROW
    if($(this).scrollTop() >= 900){
        $(".icon-row-2 .tech-item").animate({
            opacity: 1,
            "bottom": "0px"
       }, 500);
    }
    // ICONS THIRD ROW
    if($(this).scrollTop() >= 1100){
        $(".icon-row-3 .tech-item").animate({
            opacity: 1,
            "bottom": "0px"
       }, 500);
    }
    // ICONS FOURTH ROW
    if($(this).scrollTop() > 1300){
        $(".icon-row-4 .tech-item").animate({
            opacity: 1,
            "bottom": "0px"
       }, 500);
    }

    // PROJECTS PAGE
    if($(this).scrollTop() >= 1650){
        $(".project-item.item-1, .project-item.item-2, .projects-page .sub-line").animate({
            opacity: 1,
       }, 700);
    }
    if($(this).scrollTop() >= 2050){
        $(".project-item.item-3, .project-item.item-4").animate({
            opacity: 1,
       }, 700);
    }

    // CONTACTS PAGE
    if($(this).scrollTop() >= 2050){
        $(".contact-inline-container h3, .contact-page h2, .contact-page .sub-line").animate({
            opacity: 1,
       }, 1000);
    }
});
