function close(){
    $('.modal>.close').on('click',function(){
        $('.modal').hide()
    });
}

function bigImg(){
    $('.allProducts img').on('click',function(){
        let imgSrc = $(this).attr('src');
        $('.list01 .bigPic>img').attr('src',imgSrc)
    })
}

function btnTop(){
    let ulWrapperWidth = $('.allWrapper').width()/2
    let ulCardWidth = $('.allCard').width()/2
     //wrapper
     $('.wrapperPrev').on('click',function(){
        $('.allWrapper').stop().animate({marginLeft:'-'+ulWrapperWidth+'px'},500,function(){
            $('.wrapperBtn>p:nth-child(2)').text('2')
        })
    })
    $('.wrapperNext').on('click',function(){
        $('.allWrapper').stop().animate({marginLeft:'0px'},500,function(){
            $('.wrapperBtn>p:nth-child(2)').text('1')
        })
    })

    //card
    $('.cardPrev').on('click',function(){
        $('.allCard').stop().animate({marginLeft:'-'+ulCardWidth+'px'},500,function(){
            $('.cardBtn>p:nth-child(2)').text('2')
        })
    })
    $('.cardNext').on('click',function(){
        $('.allCard').stop().animate({marginLeft:'0px'},500,function(){
            $('.cardBtn>p:nth-child(2)').text('1')
        })
    })
}

function btnTopWT(){
    let ulProductsWidth = $('.allProducts').width()/2
    // product
    $('.productsPrev').on('click',function(){
        $('.allProducts').stop().animate({marginLeft:'-'+ulProductsWidth+'px'},500,function(){
            $('.productBtn>p:nth-child(2)').text('2')
        })
    })
    $('.productsNext').on('click',function(){
        $('.allProducts').stop().animate({marginLeft:'0px'},500,function(){
            $('.productBtn>p:nth-child(2)').text('1')
        })
    })
}

// ///////////////////////////////////////////////////////
function btnTopM(){
    let ulProductsWidth = $('.allProducts').width()/3
        // product
        $('.productsPrev').on('click',function(){
            $('.allProducts').stop().animate({marginLeft:'-'+ulProductsWidth+'px'},500,function(){
                $('.productBtn>p:nth-child(2)').text('2');
            })
        })
        $('.productsNext').on('click',function(){
            $('.allProducts').stop().animate({marginLeft:'0px'},500,function(){
                $('.productBtn>p:nth-child(2)').text('1')
            })
        })
}
// ///////////////////////////////////////////////////////







// ///////////////////////////////////////////////////////
function btnBottomW(){
    let listWidth = $('#show>ul>li').width()+140
    // let ulLeft = $('#show>ul').css('margin-left')
    let str = $('#show>ul>li:first').attr('class')
    console.log(str)
    $('#show>ul>li:last').prependTo('#show>ul')
    $('#show>ul').css('margin-left','-'+listWidth+'px')

    $('.lastBtn>.prev').on('click',function(){
        
        $('#show>ul').stop().animate({marginLeft:'-='+listWidth+'px'},500,function(){
            $('#show>ul>li:first').appendTo('#show>ul');
            $('#show>ul').css('margin-left','-'+listWidth+'px');
            let str1 = $('#show>ul>li:first').attr('class');
            console.log(str1)
            if(str == 'list04'){
// 해당 list에선 안 움직이게 하는 법 방법 생각해보기
                $('.lastBtn>.prev').on('click',function(){
                    $('#show>ul').stop().animate({marginLeft:'-'+listWidth+'px'},500,function(){
                        $('#show>ul').css('margin-left','0px');
                        $('#show>ul>li:first').appendTo('#show>ul');
                    })
                })
            }

        })
    });

    $('.lastBtn>.next').on('click',function(){
        let str = $('#show>ul>li:first').attr('class')
        $('#show>ul').stop().animate({marginLeft:'+='+listWidth+'px'},500,function(){
            $('#show>ul>li:last').prependTo('#show>ul');
            $('#show>ul').css('margin-left','-'+listWidth+'px');
            let str = $('#show>ul>li:first').attr('class');
            console.log(str)
            
            if(str == 'list01'){
// 해당 list에선 안 움직이게 하는 법 방법 생각해보기
            }
        })
    });
}



function btnBottomT(){
    let listWidth = $('#show>ul>li').width()+100
    $('#show>ul').css('margin-left','0px')
    
    $('.lastBtn>.prev').on('click',function(){
        $('#show>ul').stop().animate({marginLeft:'-='+listWidth+'px'},500,function(){
            $('#show>ul>li:first').appendTo('#show>ul');
            $('#show>ul').css('margin-left','0px')

            let str1 = $('#show>ul>li:first').attr('class')
            console.log(str1)
            if(str1 == 'list03'){
// 해당 list에선 안 움직이게 하는 법 방법 생각해보기
                $('.lastBtn>.prev').on('click',function(){
                    $('#show>ul').stop().animate({marginLeft:'-'+listWidth+'px'},500,function(){
                        $('#show>ul').css('margin-left','0px');
                        $('#show>ul>li:first').appendTo('#show>ul');
                    })
                })
            }

        })
    });

    let str2 = $('#show>ul>li:first').attr('class')
    console.log(str2)
    $('.lastBtn>.next').on('click',function(){
        $('#show>ul').stop().animate({marginLeft:'+='+listWidth+'px'},500,function(){
            $('#show>ul>li:last').prependTo('#show>ul');
            $('#show>ul').css('margin-left','0px')

            let str22 = $('#show>ul>li:first').attr('class')
            console.log(str22)
            if(str22 == 'list01' || str2 == 'list01'){
// 해당 list에선 안 움직이게 하는 법 방법 생각해보기
            }
        })
    });
}
// ///////////////////////////////////////////////////////