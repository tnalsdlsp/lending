$(function(){
    //nav click 시, .on 갖음
    $('nav li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    })

    //mockup hover시 페이지 스크롤 _ teenage
    $('.preview ul li').eq(1).mouseenter(function(){
        $(this).find('.teen_full').stop().animate({'top':-530+'%'},3700);
    }).mouseleave(function(){
        $(this).find('.teen_full').stop().animate({'top':0+'%'},3700);
    })

    //mockup hover시 페이지 스크롤 _ gangsan
    $('.preview ul li').eq(2).mouseenter(function(){
        $(this).find('.gangsan_full').stop().animate({'top':-560+'%'},3700);
    }).mouseleave(function(){
        $(this).find('.gangsan_full').stop().animate({'top':0+'%'},3700);
    })

    //nav 클릭 시, 해당 순번의 preview li, con li가 fade-in으로 나타남
    $('nav>ul>li').click(function(){
        let i = $(this).index();        

        $('.preview>ul>li').css('display','none');
        $('.preview>ul>li').eq(i).fadeIn(200).css('z-index','1');

        $('.con>ul>li').css('display','none');
        $('.con>ul>li').eq(i).fadeIn(200).css('z-index','1');
    })
})