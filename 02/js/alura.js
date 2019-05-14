$(document).ready(function(){
    $('.campo-digitacao').on('input', function(){
        $('.texto-digitado').text($(this).val());
    });
});