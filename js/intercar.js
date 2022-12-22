$(function () {
    $(document).ready(function(e) {
    $(".switch-btn").click(function(e) {
        if( $(".switch-btn").hasClass("btn-switch") ){
            $(".hc").hide(300);
            $(".switch-btn").removeClass("btn-switch");
        }else{
            $(".hc").show(300);
            $(".switch-btn").addClass("btn-switch");
        }
    });
    });
    
    $('.reserve').click(function () {
        window.location.href = "../www/carDetails.html";
    });
    $('.one').css('border', '1px solid #fff');
    $('.h-title').css('width', '100%');


});
