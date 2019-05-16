$(document).ready(function(){

    $('#btn-busca').click(function(e){
        //prevent the form from trying to send something and changing the url
        e.preventDefault();
        //alert("Foi");
        $('.area-gif').html(""); //old result disappears after new search

        let palavraBusca = $('#campo-busca').val();
        $('#campo-busca').val("");
        //alert(palavraBusca);
        
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=lcOzdeGKzf8Kivh7YHGNt5bOZfp7XZas&q=${palavraBusca}&limit=25&`,
            type: "GET",
            success: function(gifs){
                //console.log(gifs);
                let arrayDeGifs = gifs.data;
                $(arrayDeGifs).each(function(){
                    const container = $('<div>').attr('class', 'gif');
                    const gif = $('<img>').attr('src', this.images.fixed_width.url);
                    container.append(gif);
                    $('#exibe-busca').find('.area-gif').append(container);
                });
            }, 
            error: function(req){
                const errorImage = $("<img>").attr('src', `https://http.cat/${req.status}`);
                $('.area-gif').append(errorImage);
            }
        });
    });
})