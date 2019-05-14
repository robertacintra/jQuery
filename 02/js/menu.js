$(document).ready(function(){
    $('li').hover(function(){
        $(this).find('.menu2').slideDown();
    }, function(){
        $(this).find('.menu2').slideUp();
    });

    //CLICK
    // $('li').click(function(){
    //     $(this).find('.menu2').slideToggle();
    //     $(this).siblings().find('.menu2').slideUp();
    // });
});