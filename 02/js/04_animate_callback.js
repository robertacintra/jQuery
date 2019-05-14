$(document).ready(function(){
    $('#animate').click(function(){
        $('#content').animate({"width":"60%", "height":"30%"}, 1000, function(){
            $(this).html("Animação terminou!");
        });
    });
});