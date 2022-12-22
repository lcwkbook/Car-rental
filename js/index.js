$(function() {
    init();
    changImg();
    start();
});
function init() {
    var len = $('#img img').length;
    var html = '';
    for (var i = 0; i < len; i++) {
        html += '<li onmouseover="changImg(' + i +
            ')" onmouseout="reStart(' + i + ')">' + (i + 1) + '</li>';
    }
    $('#num').html(html);
    $('#img img').first().css('display', 'block');
    $('#num li').eq(0).addClass('active');
}
function changImg(num) {
    if (num == 'auto') {
        num = index;
    } else {
        clearInterval(timer);
    }
    $('#img img').eq(num).css('display', 'block').siblings().css('display',
        'none');
    $('#num li').eq(num).addClass('active').siblings()
        .removeClass('active');
    index++;
    if (index == $('#img img').length) {
        index = 0;
    }
}
var index = 0;
var timer;
function start() {
    timer = setInterval('changImg("auto")', 2500);
}
function reStart(num) {
    index = num;
    changImg(num);
    start();
}