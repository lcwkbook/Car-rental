$(function(){
    // auto();
    // $(window).resize(function(){
    // auto();
    // });
    // function auto(){
    // $("#box").css({
    // "margin-left":($(window).width() - $("#box").width())/2,
    // "margin-top":($(window).height() - $("#box").height())/3
    // });
    // }
    $('#login').click(function(){
        $('#box').show();
    });
    $('#wp-login').click(function(){
        $('#box').show();
    });
    $('.box-login-content-login a').click(function(){
        $('.box-register').show();
        $('.box-login').hide();
    });
    $('.box-register-content-login a').click(function(){
        $('.box-login').show();
        $('.box-register').hide();
    });



    $('.qx').click(function(){
        $('#box').hide();
    });
    $('.qx').click(function(){
        $('#box').hide();
    });

    
    })