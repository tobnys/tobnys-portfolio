$(function (){
    var mainRoot = $('html, body');

    // Smooth scrolling navigation
    $("#page-home, #page-about, #page-skills, #page-projects, #page-contact, #page-explore").click(function(e){
        if(e.target.id === "page-home"){
            mainRoot.animate({
                scrollTop: 0
            }, 800, function(e){
                window.location.hash = "home";
            });
        }   
        if(e.target.id === "page-about"){
            mainRoot.animate({
                scrollTop: 920
            }, 800, function(e){
                window.location.hash = "about";
            });
        }
        if(e.target.id === "page-skills"){
            mainRoot.animate({
                scrollTop: 1310
            }, 800, function(e){
                window.location.hash = "skills";
            });
        }
        if(e.target.id === "page-projects"){
            mainRoot.animate({
                scrollTop: 2478
            }, 800, function(e){
                window.location.hash = "projects";
            });
        }
        if(e.target.id === "page-contact"){
            mainRoot.animate({
                scrollTop: 2862
            }, 800, function(e){
                window.location.hash = "contact";
            });
        }
        if(e.target.id === "page-explore"){
            mainRoot.animate({
                scrollTop: 920
            }, 800, function(e){
                window.location.hash = "about";
            });
        }
    })
});


// Target scrolling
$(document).scroll(function(){
    console.log($(this).scrollTop());
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
    if($(this).scrollTop() > 150){
        $(".about-page p, .about-page h2, .sub-line").animate({
             opacity: 1,
        }, 1000);
    }
});
