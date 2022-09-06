function reviewModal(){
    // close
    $('.close').on('click',function(){
        $('#modal').hide()
    })
    // open
    $('.smallImg>li').on('click',function(){
        $('#modal').show()
    })
    
    // prev,next 준비
    let liWidth = $('.modalImg>li').width();
    $('.modalImg>li:last').prependTo('.modalImg');
    $('.modalImg').css('margin-left','-'+liWidth+'px');
    // prev
    $('#modal .prev').on('click',function(){
        $('.modalImg').stop().animate({marginLeft:'-='+liWidth+'px'},400,function(){
            $('.modalImg').css('margin-left','-'+liWidth+'px');
            $('.modalImg>li:first').appendTo('.modalImg');
        // })
        })
    })
    // next
    $('#modal .next').on('click',function(){
        $('.modalImg').stop().animate({marginLeft:'+='+liWidth+'px'},400,function(){
            $('.modalImg').css('margin-left','-'+liWidth+'px');
            $('.modalImg>li:last').prependTo('.modalImg');
        // })
        })
    })
}

function choice(){
    // 준비하기
    let ulCss1 = $('.choice>li:first-child').css('color')
    let ulCss2 = $('.choice>li:first-child').css('border-bottom');
    let ulWidth = $('.all>ul').width()/2;

    $('.choice>li:last-child').on('click',function(){
        $('.choice>li:last-child').css({color:ulCss1,borderBottom:ulCss2})
        $('.choice>li:first-child').css({color:'#595959',borderBottom:'none'})
        $('.all>ul').animate({'margin-left':'-'+ulWidth+'px'},500)
    })
    $('.choice>li:first-child').on('click',function(){
        $('.all>ul').animate({'margin-left':'0px'},500)
        $('.choice>li:first-child').css({color:ulCss1,borderBottom:ulCss2})
        $('.choice>li:last-child').css({color:'#595959',borderBottom:'none'})
    })
}