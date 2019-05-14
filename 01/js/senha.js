$(document).ready(function() {
    $('#senha').keyup(function(){
        let senha = $(this).val();
        let forca = 0;
        let aceito = "Não";

        if(senha.length > 4){
            forca += 25;
        }
        
        let regAlfabetico = new RegExp(/[a-z]/i);
        if (regAlfabetico.test(senha)){
            forca += 25;
        }

        let regNumerico = new RegExp(/[0-9]/i);
        if(regNumerico.test(senha)){
            forca += 25;
        }

        let regCaractereEspecial = new RegExp(/[^a-z0-9]/i);
        if (regCaractereEspecial.test(senha)){
            forca += 25;
        }

        //indicador de sucesso
        // if(forca >= 75) {
        //     aceito = "Sim";
        //     $(this).removeClass('erro');
        //     $(this).addClass('sucesso');
        // } else {
        //     $(this).removeClass('sucesso');
        //     $(this).addClass('erro');
        // }

        //indicador de sucesso - optimizado
        aceito = (forca >= 75);

        $(this).toggleClass('sucesso', aceito);
        $(this).toggleClass('erro', !aceito);
        
        $('#forca').html(`Força:${forca} - Senha:${senha} - Aceito:${ aceito ? "Sim" : "Não" }`);
    })
});