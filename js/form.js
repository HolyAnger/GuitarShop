$(document).ready (function(){
    $('form').submit (function(){
        var login = $('#login').val();
        var pass = $('#pass').val();
        var r_pass = $('#r_pass').val();
        var fail = [];
        $('#alertFail').hide();
        $('#alertFail').html('');

        if(login.length == 0){
            fail[0] = "Поле не заполнено";
        }
        if( (/[А-яЁё]/).test(login))
            fail[1] = "Допускаются только латинские символы";
        if(pass.length == 0 || r_pass.length == 0){
            fail[2] = 'Одно из поле для пароля пустое';
        }
        if(pass != r_pass){
            fail[3] = "Пароли не совпадают";
        }

        if(fail !== ""){
             for(i = 0; i < fail.length; i++)
             if(fail[i] == undefined)
             {
                continue;
             }
             else{
                 $('#alertFail').append(fail[i] + '<br>');
                 $('#alertFail').show();
             }
            return false;
        }

    });

});