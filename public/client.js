$(document).scroll(function(){
    if($(this).scrollTop() > 30){
        $(".main-nav").addClass("down");
        $(".main-nav a").addClass("text-down");
    }
    else {
        $(".main-nav").removeClass("down");
        $(".main-nav a").removeClass("text-down");
    }
});
