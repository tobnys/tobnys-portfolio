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
    if($(this).scrollTop() > 150){
        $(".about-page p, .about-page h2, .sub-line").animate({
             opacity: 1,
        }, 1000);
    }
});
