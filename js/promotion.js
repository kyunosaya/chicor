function close(){
    $('.modal>.close').on('click',function(){
        $('.modal').hide()
    });
}

function bigImg(){
    // 제품
    $('.allProducts img').on('click',function(){
        let imgSrc = $(this).attr('src');
        let imgAlt = $(this).attr('alt');
        $('.list01 .bigPic>img').attr({src:imgSrc,alt:imgAlt})
    })

    // 포장
    $('.allWrapper img').on('click',function(){
        let imgSrc = $(this).attr('src');
        let imgAlt = $(this).attr('alt');
        $('.list02 .bigPic>img').attr({src:imgSrc,alt:imgAlt})
    })

    // 카드
    $('.allCard img').on('click',function(){
        let imgSrc = $(this).attr('src');
        let imgAlt = $(this).attr('alt');
        $('.list03 .bigPic>img').attr({src:imgSrc,alt:imgAlt})
    })

}

function btnTopWT(){
    let ulProductsWidth = $('.allProducts').width()/2
    $('.productsPrev').hide();

    // product
    $('.productsNext').on('click',function(){
        $('.productsPrev').show();
        $('.productsNext').hide();
        $('.productBtn>p:nth-child(2)').text('2')
        $('.productBtn').css('justify-content','flex-start')
        $('.allProducts').stop().animate({marginLeft:'-='+ulProductsWidth+'px'},500)
    })
     $('.productsPrev').on('click',function(){
        $('.productsNext').show();
        $('.productsPrev').hide();
        $('.productBtn>p:nth-child(2)').text('1')
        $('.productBtn').css('justify-content','flex-end')
        $('.allProducts').stop().animate({marginLeft:'0px'})
    })
}


// ///////////////////////////////////////////////////////
function btnTopM(){    
    // product
        // 준비하기
            let ulProductsWidth = $('.allProducts').width()/3
            let i = 0;
            $('.productsPrev').hide();

            $('.productsNext').on('click',function(){
                i++;
                if(i <= 1){
                    $('.productBtn>p:nth-child(2)').text('2');
                    $('.productsPrev').show();
                    $('.allProducts').stop().animate({marginLeft:'-='+ulProductsWidth+'px'},500)
                }
                else{
                    $('.productsNext').hide();
                    $('.productBtn>p:nth-child(2)').text('3');
                    $('.productsPrev').show();
                    $('.productBtn').css('justify-content','flex-start')
                    $('.allProducts').stop().animate({marginLeft:'-='+ulProductsWidth+'px'},500)
                    i=2;
                }
            })
            $('.productsPrev').on('click',function(){
                    i--;
                    if(i <= 0){
                        $('.productsPrev').hide();
                        $('.productBtn>p:nth-child(2)').text('1');
                        $('.productBtn').css('justify-content','flex-end')
                        $('.allProducts').stop().animate({marginLeft:'+='+ulProductsWidth+'px'},500)
                    }
                    else{
                        $('.productBtn>p:nth-child(2)').text('2');
                        $('.productsNext').show();
                        $('.allProducts').stop().animate({marginLeft:'+='+ulProductsWidth+'px'},500)
                    }
                })

    // wrapper
        // 준비하기
            let ulWrapperWidth = $('.allWrapper').width()/2
            let ii = 0;
            $('.wrapperPrev').hide();

            $('.wrapperNext').on('click',function(){
                ii++;
                if(ii >= 1){
                    $('.wrapperBtn>p:nth-child(2)').text('2');
                    $('.wrapperPrev').show();
                    $('.wrapperNext').hide();
                    $('.allWrapper').stop().animate({marginLeft:'-='+ulWrapperWidth+'px'},500)
                    ii=1;
                }
            })
            $('.wrapperPrev').on('click',function(){
                ii--;
                if(ii <= 0){
                    $('.wrapperBtn>p:nth-child(2)').text('1');
                    $('.wrapperPrev').hide();
                    $('.wrapperNext').show();
                    $('.allWrapper').stop().animate({marginLeft:'+='+ulWrapperWidth+'px'},500)
                }
            })

    // card
        // 준비하기
            let ulCardWidth = $('.allCard').width()/2
            let iii = 0;
            $('.cardPrev').hide();

            $('.cardNext').on('click',function(){
                iii++;
                if(iii >= 1){
                    $('.cardBtn>p:nth-child(2)').text('2');
                    $('.cardPrev').show();
                    $('.cardNext').hide();
                    $('.allCard').stop().animate({marginLeft:'-='+ulCardWidth+'px'},500)
                    iii=1;
                }
            })
            $('.cardPrev').on('click',function(){
                iii--;
                if(iii <= 0){
                    $('.cardBtn>p:nth-child(2)').text('1');
                    $('.cardPrev').hide();
                    $('.cardNext').show();
                    $('.allCard').stop().animate({marginLeft:'+='+ulCardWidth+'px'},500)
                }
            })
}

function btnBottom(){
    // 준비하기
    let listWidth = $('#show>ul>li').innerWidth();
    $('.lastBtn>.prev').hide();
    $('.lastBtn').css('justify-content','flex-end');
    let i = 0;

    // 클릭 이벤트
    $('.lastBtn>.next').on('click',function(){
        i++;
        if(i < 3){
            $('.lastBtn>.prev').show();
            $('.lastBtn').css('justify-content','space-between');
        }
        else{
            i = 3;
            $('.lastBtn>.next').hide();
            $('.lastBtn').css('justify-content','flex-start');
        }
        $('#show>ul').stop().animate({marginLeft:'-='+listWidth+'px'},500)
    });

    $('.lastBtn>.prev').on('click',function(){
        i--;
        if(i < 3 && i >= 1){
            $('.lastBtn>.next').show();
            $('.lastBtn').css('justify-content','space-between');
        }
        else if(i >= 3){
            i = 3;
            $('.lastBtn>.next').hide();
            $('.lastBtn').css('justify-content','flex-start');
        }
        else{
            $('.lastBtn>.prev').hide();
            $('.lastBtn').css('justify-content','flex-end');
        }
        $('#show>ul').stop().animate({marginLeft:'+='+listWidth+'px'},500)
    });
}

function check(){
    // list01
    $('.list01 input').on('click',function(){
        let checked = $(".list01 input:checked").length;
        if(checked > 3){
            alert('3개까지 구입 가능합니다.');
            $(this).prop("checked", false)
        }
    })
    // list02
    $('.list02 input').on('click',function(){
        let checked = $(".list02 input:checked").length;
        if(checked >= 2){
            alert('한 가지만 고를 수 있습니다.');
            $(this).prop("checked", false)
        }
    })
    // list03
    $('.list03 input').on('click',function(){
        let checked = $(".list03 input:checked").length;
        if(checked >= 2){
            alert('한 가지만 고를 수 있습니다.');
            $(this).prop("checked", false)
        }
    })
}

// 결과값에 이미지, 선택항목, 합계 나오는 함수
function result(){
    // list01 (제품선택)
    $('.list01 input').on('click',function(){
            // 준비하기
            let checkCheck = $(this).is(':checked')
            let checkedName = $(this).attr('name');
            let numbercheck = $(this).attr('num')
            let checkNum = Number(numbercheck).toLocaleString('ko-KR')
            let checkPic = $(this).parent().siblings('img').attr('alt')

            // 첫번째제품
            if( checkCheck === true && $('.set01').is(':empty') ){
                $('.set01').text(checkedName)
                .css({
                    width:'100%',textAlign:'left',
                    borderBottom:'1px solid #dfdfdf',
                    lineHeight:'30px',padding:'10px 0'
                }).append('<p>'+checkNum+'원</p>')
                $('.pic01').css({
                    background:"url('../img/promotion/product/"+checkPic+".png') no-repeat center"
                })
            }
            // 두번째제품
            else if(checkCheck === true && $('.set02').is(':empty')){
                $('.set02').text(checkedName)
                .css({
                    width:'100%',textAlign:'left',
                    borderBottom:'1px solid #dfdfdf',
                    lineHeight:'30px',padding:'10px 0'
                }).append('<p>'+checkNum+'원</p>')
                $('.pic02').css({
                    background:"url('../img/promotion/product/"+checkPic+".png') no-repeat center"
                })
            }
            // 세번째제품
            else if(checkCheck === true){
                $('.set03').text(checkedName)
                .css({
                    width:'100%',textAlign:'left',
                    borderBottom:'1px solid #dfdfdf',
                    lineHeight:'30px',padding:'10px 0'
                }).append('<p>'+checkNum+'원</p>')
                $('.pic03').css({
                    background:"url('../img/promotion/product/"+checkPic+".png') no-repeat center"
                })
            }

            // 합계
            let regex = /[^0-9]/g; /* 문자객체제거 */
            let set01Num = $('.set01>p').text()
            let result01 = set01Num.replace(regex, "")
            let set02Num = $('.set02>p').text()
            let result02 = set02Num.replace(regex, "")
            let set03Num = $('.set03>p').text()
            let result03 = set03Num.replace(regex, "")

            let totalPrice = ( Number(result01) + Number(result02) + Number(result03) + 2500 ).toLocaleString('ko-KR')
            $('.total>span').text(totalPrice)
    })

    // list02 (박스선택)
    $('.list02 input').on('click',function(){
            // 준비하기
            let checkCheck = $(this).is(':checked')
            let checkedName = $(this).attr('name');
            let checkPic = $(this).parent().siblings('img').attr('alt')

            if( checkCheck === true ){
                $('.set04').text(checkedName)
                .css({
                    width:'100%',textAlign:'left',
                    borderBottom:'1px solid #dfdfdf',
                    lineHeight:'50px'
                })
                $('.bigPic').css({
                    background:"url('../img/promotion/box/"+checkPic+".png') no-repeat center"
                })
            }     
    })

    // list03 (카드선택)
    $('.list03 input').on('click',function(){
            // 준비하기
            let checkCheck = $(this).is(':checked')
            let checkedName = $(this).attr('name');
            let checkPic = $(this).parent().siblings('img').attr('alt')
            
            if( checkCheck === true ){
                $('.set05').text(checkedName)
                .css({
                    width:'100%',textAlign:'left',
                    borderBottom:'1px solid #dfdfdf',
                    lineHeight:'50px'
                })
                $('.pic04').css({
                    background:"url('../img/promotion/giftcard/"+checkPic+".png') no-repeat center",
                    backgroundSize:'contain',
                    boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 10px'
                })
            }
    })
}/* btnBottom finish */

