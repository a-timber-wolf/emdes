/**
 * JavaScript
 */
$(document).ready(function () {
    // $("#test1").animate({bottom:'200px'},1000);
    $("#test").fadeIn(2000);
    $("#protect").fadeIn(2000);
});

/*一键置顶*/
function p_top() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
}
/*页面滚动效果*/
$(function(){
    $("body").flowUp("div", { translateY: 350, duration: 1 });
});
if (screenTop === 0) {
    $(".t-top").hide();
}
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".t-top").fadeIn(500);
    } else if ($(window).scrollTop() === 0) {
        $(".t-top").fadeOut(500);
    }
});
$(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
});
