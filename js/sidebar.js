//メニュー表示
$(function(){
    $('#js-menu').click(function(){
        $('.l-menu').addClass('active');
        $('.u-background').show();
        $('html').css('overflow','hidden');//スクロールしない
    });
});

//メニュー非表示
$(function(){
    $('#js-close, .u-background').click(function(){
        $('.l-menu').removeClass('active');
        $('.u-background').hide();
        $('html').css('overflow','scroll');//スクロールする

    });
});

