$(document).ready(function(){
    $("a").click(function(event){
        //is there a hash? if there is one, it falls on the if.
        if (this.hash !== ""){
            let hash = this.hash;
            //smooth scroll to section clicked
            $('html, body').animate({
                scrollTop:$(hash).offset().top
            }, 800, function(){
                //coloca na url do navegador
                window.location.hash = hash;
            });
        }
    });
});