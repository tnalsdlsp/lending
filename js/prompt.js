$(function(){

    //프롬프트 연습 켜졌을 때 on_prompt만 보이게함
    $('.prompt_wrap > ul > li').eq(0).addClass('on_prompt');

    a=0;

    $('.ing_wrap li').click(function(){

        let a=$(this).index();

        $('.ing_wrap li').css('margin-left','78px');

        if(0<=a&&a<=3){
            for(i=1;i<=3;i++){
                $('.ing_wrap li').eq(i).css({'margin-left':'74px','margin-right':'4px'});
            }
        }else if(4<=a&&a<=7){
            for(i=5;i<=7;i++){
                $('.ing_wrap li').eq(i).css({'margin-left':'74px','margin-right':'4px'});
            }
        }else{
            for(i=9;i<=12;i++){
                $('.ing_wrap li').eq(i).css({'margin-left':'74px','margin-right':'4px'});
            }
        }
        $('.ing_wrap li:nth-child(4n+1)').css('margin-left','0');
        $('.ing_wrap li:nth-child(4n+4)').css('margin-right','0');

        $('.ing_wrap li img').css('border','none');
        $(this).find('img').css('border','4px solid #000000');
        
        // $('.ing_wrap li img').css('transform','scale(1.0)');
        // $(this).find('img').css('transform','scale(1.05)');
        
        $(this).addClass('on').siblings().removeClass('on');
        
        $('.prompt_wrap>ul>li').eq(a).addClass('on_prompt').siblings().removeClass('on_prompt');
    })
    
})

    