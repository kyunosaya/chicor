function bigImg(){
    $('.explain ul>li:not(:last-child)>img').on('click',function(){
        let imgSrc = $(this).attr('src');
        let imgAlt = $(this).attr('alt');
        let str = $('.bigImg>figcaption').children().attr('name');
        if(str == 'iframe'){
            $('.bigImg>figcaption').prepend('<img src="'+imgSrc+'" alt="'+imgAlt+'">')
            $('.bigImg>figcaption>iframe:last').fadeOut(500,function(){
                $('.bigImg>figcaption>iframe:last').remove()
            })
        }
        else {   
            $('.bigImg>figcaption').prepend('<img src="'+imgSrc+'" alt="'+imgAlt+'">')   
            $('.bigImg>figcaption>img:last').fadeOut(500,function(){
                $('.bigImg>figcaption>img:last').remove()
            })
        }
    });
}

function bigMap(){
    $('.explain ul>li:last-child>img').on('click',function(){
        $('.bigImg>figcaption').prepend('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7772404824486!2d126.97864191564788!3d37.560311732241715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f402e427b1%3A0x783616d428ac93ad!2z7ISc7Jq47Yq567OE7IucIOykkeq1rCDth7Tqs4TroZwgNzc!5e0!3m2!1sko!2skr!4v1658776289971!5m2!1sko!2skr" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" name="iframe"></iframe>')
        $('.bigImg>figcaption>img:last').fadeOut(500,function(){
            $('.bigImg>figcaption>img:last').remove()
        })
    });
}

function heart(){
    $('dl>dt>button').on('click',function(){
        let heartName = $(this).attr('name')
        if(heartName == 'off'){
            $(this).children().text('★ ').css({'color':'#ffbb00'});
            $(this).attr('name','on');
        }
        else{
            $(this).children().text('☆ ').css({'color':'#ababab'});
            $(this).attr('name','off');
        }
    })
}
