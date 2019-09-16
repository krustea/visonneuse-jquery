$(document).ready(function () {

    $('.viewer .small li').hover(function () {
        let id = $(this).index();
        $('.viewer .large li').removeClass('show').eq(id).addClass('show');
        $('.viewer .small li').removeClass('active');
        $(this).addClass('active');
    })

    function setDimension() {
        let h = $('.viewer .show').height();
        $('.viewer .large').height(h);
    }

    setDimension();
    $(window).resize(setDimension());
});