$(document).ready(function(){

    $("#openMenu").click(function(){
        $(".menu").fadeIn(200);
        $("#openMenu").animate({left:"-10%"});
        $("#closeMenu").animate({left:"95%"});
    });

    $("#closeMenu").click(function(){
        $(".menu").fadeOut(200);
        $("#openMenu").animate({left:"4%"});
        $("#closeMenu").animate({left:"110%"});
    });


});